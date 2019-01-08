import React, { Component } from 'react';

import Request from './Request';

class SuperUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  //fetch requests of USER_ID_TO of currently logged in user
  async componentDidMount() {
    await fetch('/api/requestsToUser')
      .catch(err => {
        console.log(err)
      })
      .then(r => {
        return (r.json());
      })
      .then(data => {
        this.setState({
          list: data
        })
        return data;
      })
  }
  //display below
  //each of these should have the ability to be responded to
  // col has_responded?
  render() {
    return (
      <>
        <div>Reply to specific request</div>
        <div>here are your current pending requests to reply to</div>
        <div className='replies request-wrapper'>
          {
            // take data from state and map it into reusable card component.
            this.state.list.map(request => {
              return <Request data={request} />
            })
          }
        </div>
      </>
    )
  }
}

export default SuperUser;