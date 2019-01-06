import React, { Component } from 'react';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserLoggedIn: false,
      list: []
    }
  }
  render(props) {
    return (
      <>
        <div className='requests-form'>
          requests form will go here
      </div>

        <div className='requests-already-made'>
          ...load requests here


      </div>
      </>
    )
  }
}

{/* <div className='request-card'>
      <div className='request-title'>
        {props.data.title}
      </div>
      <div className='request-body'>
        <p>{props.data.request_contents}</p>
      </div>
      <div className='request-recipient'>from:{props.data.user_id_from}</div>
    </div> */}

export default Dashboard;