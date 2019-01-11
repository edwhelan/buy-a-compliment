import React, { Component } from 'react';

class HeroSpacer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    }
  }
  render() {
    return (
      <div className='heroImage'>
        <div className='heroTextWrapper'>
          <p> Fan-Ex is the leading site in the fan interaction experience</p>
          <p>Allowing fans to connect to registered members of the community with public or private questions </p>
          <p>The recipient can then respond to the user</p>
          <p>All interactions are only $1.00 for a request. </p>
        </div>
      </div>
    )
  }

}

export default HeroSpacer