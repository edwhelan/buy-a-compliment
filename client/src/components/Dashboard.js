import React, { Component } from 'react';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }
  render(props) {
    return (
      <>
        <div className='requests-form'>
          requests will go here
      </div>

        <div className='requests-already-made'>
          ...load requests here
      </div>
      </>
    )
  }
}

export default Dashboard;