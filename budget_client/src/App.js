import React, { Component } from 'react';
import Money from './components/Money.js'
import Chart from 'chart.js'
import './App.css';

class App extends Component {

  state = {
      formInputs:{
        name: '',
        monthly_income: ''
      },
      formSpendings:{
        activity: '',
        cost: '',
        monthy: ''
      }
    }

    componentDidMount() {
       this.getData()
    }

    getData = ()=> {
        fetch("http://localhost:3000/users/")
        .then(response => response.json())
        .then(data=>this.prepareData(data))
        .then(chartData => this.createChart(chartData))
    }

    prepareData = (data) => {
        const chartData = {
            labels: [],
            datasets: []
        }
        data.map((x,xindex) => {
            console.log(x)
            chartData.datasets[xindex]={
                label:`${x.name} cost`,
                data: []
            }
            x.spendings.map(
                (y, yindex) => {
                    chartData.labels.push(y.id)
                    chartData.datasets[xindex].data.push(y.cost)
                }
            )
        })
        return chartData
    }

    createChart = (data) => {
        const ctx = document.querySelector('#spendings')
        const spendChart = new Chart(ctx, {
            type: 'line',
            data:data
        })
    }

    handleChange = (event) => {
      const updateInput = Object.assign( this.state.formInputs, { [event.target.id]: event.target.value })
      this.setState({formInputs:updateInput})
    }

    handleSubmit  = (event) =>{
      event.preventDefault()
      fetch('http://localhost:3000/users', {
        body: JSON.stringify(this.state.formInputs),
        method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
      })
      .then(createdUser => {
        return createdUser.json()
      })

      .then(jsonedUser => {
        this.setState({
          formInputs: {
            name: '',
            monthly_income: '',
          },
          notices: [jsonedUser, ...this.state.users]
        })
      })
      .catch(error => console.log(error))
    }

    handleSpendingChange = (event) => {
      const updateSpending = Object.assign( this.state.formSpendings, { [event.target.id]: event.target.value })
      this.setState({formSpendings:updateSpending})
    }

    handleSpendingSubmit  = (event) =>{
      event.preventDefault()
      fetch('http://localhost:3000/users', {
        body: JSON.stringify(this.state.formSpendings),
        method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
      })
      .then(createdSpending => {
        return createdSpending.json()
      })

      .then(jsonedSpending => {
        this.setState({
          formSpendings: {
            activity: '',
            cost: '',
            month:''
          },
          notices: [jsonedSpending, ...this.state.spendings]
        })
      })
      .catch(error => console.log(error))
    }

  render() {
    return (
      <>
      <div className="App">
        <Money money={this.state.spendings}/>
      </div>
      <div className="user">
        <h3>Add A User</h3>
        <form onSubmit={this.handleSubmit}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" value={this.state.formInputs.name} onChange={this.handleChange}/>
              <label htmlFor="monthly_income">Monthly Income</label>
              <input type="text" id="monthly_income" value={this.state.formInputs.monthly_income} onChange={this.handleChange}/>
              <input type="submit" className="submit" />
          </form>
      </div>
      <div className="spendings">
        <h3>Add a Spending</h3>
          <form>
              <label htmlFor="activity">Activity</label>
              <input type="text" id="activity" value={this.state.formSpendings.activity} onChange={this.handleSpendingChange}/>
              <label htmlFor="cost">Cost</label>
              <input type="text" id="cost" value={this.state.formSpendings.cost} onChange={this.handleSpendingChange}/>
              <label htmlFor="month">Month</label>
              <input type="text" id="month" value={this.state.formSpendings.month} onChange={this.handleSpendingChange}/>
              <input type="submit" className="submit" />
          </form>
      </div>
      </>
    );
  }
}

export default App;
