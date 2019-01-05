import React, { Component } from 'react';

import Login from './Login';
import Logout from './Logout';
import Register from './Register';

class LoginSystem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      displayName: null,
      loginOpen: false,
      registerOpen: false,
    }
  }
  async componentDidMount() {
    await fetch('/api/loggedin')
      .catch(err => {
        console.log(err)
      })
      .then(r => {
        return (r.json());
      })
      .then(data => {
        if (data) {
          this.setState({
            displayname: data.name,
            loggedIn: true
          })
        } else {
          console.log('move along');
        }
      })
  }

  _isClickedLogin = () => {
    console.log("clicked it")
    this.setState({
      loginOpen: !this.state.loginOpen
    })
  }
  _isClickedRegister = () => {
    console.log("clicked it")
    this.setState({
      registerOpen: !this.state.registerOpen
    })
  }

  render() {
    return (
      <>
        <ul className='login-system-ul'>
          {this.state.loggedIn ? <li className='nav-logout'><Logout /></li> : <><li><button onClick={this._isClickedLogin}>Login</button></li><li>{this.state.loginOpen ? <Login /> : <></>}</li><li><button onClick={this._isClickedRegister}>Register</button></li><li>{this.state.registerOpen ? <Register /> : <></>}</li></>}
        </ul>
      </>
    )
  }
}


export default LoginSystem;