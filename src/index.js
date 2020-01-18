import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import Dashboard from './component/dashboard';
import FinalPage from './component/finalconfirmation'
import * as serviceWorker from './serviceWorker';
import CustomerDetails from './component/customerdetails';

const routing = (
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/customerDetails" component = {CustomerDetails}/>
        <Route path="/ordersuccessfull" component = {FinalPage}/>
      </div>
    </Router>
  )
  
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
