import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom';

import Requests from './components/Requests'
import LoginSystem from './components/LoginSystem';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <LoginSystem />
          <h1>a hero image with login goes here</h1>
          <Requests />
          <Route path='/' exact Component={Requests} />
          <Route path='/home' exact Component={Requests} />
        </div>
      </Router>
    );
  }
}

export default App;
