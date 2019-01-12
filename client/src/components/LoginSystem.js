import React, { Component } from 'react';
import { Link } from 'react-router-dom'

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
    this.setState({
      loginOpen: !this.state.loginOpen,
      registerOpen: false
    })
  }
  _isClickedRegister = () => {
    this.setState({
      registerOpen: !this.state.registerOpen,
      loginOpen: false
    })
  }

  render() {
    return (
      <div className='login-div'>
        <ul className='login-system-ul'>
          {this.state.loggedIn ? <li className='nav-logout'><Logout /></li> : <><li><button onClick={this._isClickedLogin}>Login</button></li><li><button onClick={this._isClickedRegister}>Register</button></li></>}
          {this.state.loginOpen ? <Login /> : <></>}
          {this.state.registerOpen ? <Register /> : <></>}
          {this.state.loggedIn ? <li> <Link className='navLink' to='/dashboard' >Dashboard </Link></li> : <></>}
          {this.state.loggedIn ? <li> <Link className='navLink' to='/' >Home </Link></li> : <></>}
        </ul>
      </div>
    )
  }
}


export default LoginSystem;