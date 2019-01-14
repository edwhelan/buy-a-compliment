import React, { Component } from 'react';

import mail from '../images/mail.svg';
import paperPlane from '../images/paper-plane.svg';

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
        <div className='heroTextP'>
        <div className='heroTextImg'>
          <p> Buy-a-Compliment.xyz is a site to connect you to people that care.</p>
          <img id='mailImg' src={mail} alt='icon of paperplane flying' />
        </div>
          <p className='heroTextBlock'>Sign-up to make requests to users that care. You can make your requests public or private. View sample items below!  </p>
          {/* <p>The recipient can then respond to the user</p> */}
          <div className='heroTextImg'>
          <img src={paperPlane} alt='icon of stick figurethrowing paper plane' />
          <p> Recipients can then respond to the user and share in the interaction fee! All request interactions are only $1.00</p>
        </div>
          <p className='heroTextBlock'>Sign up to become a member of the community now! </p>
        </div>
        </div>
      </div>
    )
  }

}

export default HeroSpacer