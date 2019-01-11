import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom';

import CompletedRequests from './components/CompletedRequests';
import HeroSpacer from './components/HeroSpacer';
import LoginSystem from './components/LoginSystem';
import Dashboard from './components/Dashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <LoginSystem />
          <Route path='/' exact component={HeroSpacer} />
          <Route path='/' exact component={CompletedRequests} />
          <Route path='/dashboard' exact component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
