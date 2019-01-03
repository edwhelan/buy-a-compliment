import React, { Component } from 'react';
import './App.css';

import Requests from './components/Requests'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>a hero image with login goes here</h1>
        <Requests />
      </div>
    );
  }
}

export default App;
