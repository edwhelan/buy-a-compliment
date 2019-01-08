import React, { Component } from 'react';

import Request from './Request';

class SuperUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      replyBody: '',
      requestIdToReplyTo: 0
    }
  }

  //fetch requests of USER_ID_TO of currently logged in user if they havent been responded to
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
  render() {
    return (
      <>
        <div>Reply to specific request
        <form onSubmit={this._onSubmit}>
            <label>
              Reply:
              <textarea value={this.state.replyBody} onChange={this._onChangeReply} name="reply_body" form="usrform" required></textarea>
            </label>
            <br />
            <input type='submit' />
          </form>
          <div>Replying to:
          <select name="idToReplyTo" onChange={this._onChangeRequestID}>
              <option value="" selected disabled hidden>Choose here</option>
              {this.state.list.map(item => {
                return (<option value={item.id}>{item.title}</option>)
              })}
            </select>
            {this.state.list.map(box => {

            })}</div>
        </div>
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
  _onChangeRequestID = (event) => {
    this.setState({
      requestIdToReplyTo: event.target.value
    })
    console.log(event.target.value)
  }

  _onChangeReply = (event) => {
    this.setState({
      replyBody: event.target.value
    })
  }
}

export default SuperUser;