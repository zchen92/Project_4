import React, { Component } from 'react';
import Chart from 'chart.js'

class Money extends Component {
    // state = {

    // }

    // componentDidMount() {
    //    this.getData()
    // }

    // getData = ()=> {
    //     fetch("http://localhost:3000/users/")
    //     .then(response => response.json())
    //     .then(data=>this.prepareData(data))
    //     .then(chartData => this.createChart(chartData))
    // }

    // prepareData = (data) => {
    //     const chartData = {
    //         labels: [],
    //         datasets: []
    //     }
    //     data.map((x,xindex) => {
    //         console.log(x)
    //         chartData.datasets[xindex]={
    //             label:`${x.name} cost`,
    //             data: []
    //         }
    //         x.spendings.map(
    //             (y, yindex) => {
    //                 chartData.labels.push(y.id)
    //                 chartData.datasets[xindex].data.push(y.cost)
    //             }
    //         )
    //     })
    //     return chartData
    // }

    // createChart = (data) => {
    //     const ctx = document.querySelector('#spendings')
    //     const spendChart = new Chart(ctx, {
    //         type: 'line',
    //         data:data
    //     })
    // }


  render () {
    return (
      <>
        <h1>Spendings</h1>
        <h2>{this.props.spendings}</h2>
        <canvas id="spendings" width="300" height="100"></canvas>
      </>
    )
  }
}

export default Money
