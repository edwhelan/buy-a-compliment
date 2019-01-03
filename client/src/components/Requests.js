import React, { Component } from 'react';

class Requests extends Component {
  render() {
    return (
      <div className='request-card'>
        <div className='request-title'>
          title
      </div>
        <div className='request-body'>
          <p>body</p>
        </div>
        <div className='request-recipient'>to:Bob</div>
      </div>
    )
  }
}

export default Requests