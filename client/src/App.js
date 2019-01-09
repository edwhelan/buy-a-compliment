import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom';

import Requests from './components/Requests';
import CompletedRequests from './components/CompletedRequests'

import LoginSystem from './components/LoginSystem';
import Dashboard from './components/Dashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <LoginSystem />
          <Route path='/' exact component={CompletedRequests} />
          <Route path='/dashboard' exact component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
