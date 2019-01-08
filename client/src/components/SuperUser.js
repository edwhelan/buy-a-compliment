import React, { Component } from 'react';

class SuperUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }
  render() {
    return (
      <div>YOU ARE A SUPER USER HARRY</div>
    )
  }
}

export default SuperUser;