// // src/Routes.js

// import React from 'react';
// import { Switch, HashRouter as Router, Route } from 'react-router-dom';
// import createBrowserHistory from 'history/createBrowserHistory';

// import IndexUser from './IndexUser';
// import NewUser from './NewUser';
// import EditUser from './EditUser';
// import NotFound from './NotFound';

// const history = createBrowserHistory();
// const Routes = () =>
//   <Router history={history}>
//     <Switch>
//       <Route path="/users/:id/edit" component={EditUser} />
//       <Route path="/users/new" component={NewUser} />
//       <Route path="/users/" component={IndexUser} />
//       <Route path="*" component={NotFound} />
//     </Switch>
//   </Router>;

// export default Routes;