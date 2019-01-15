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
        <div className='replies-form'>
        <p>Reply to your requests</p>
        <form onSubmit={this._onSubmit}>
            <div>Replying to:
          <select name="idToReplyTo" onChange={this._onChangeRequestID}>
                <option value="" selected disabled hidden>Choose here</option>
                {this.state.list.map(item => {
                  return (<option value={item.id}>{item.title}</option>)
                })}
              </select>
            </div>
            <label>
              Reply:
              <textarea value={this.state.replyBody} placeholder='Must be 100 characters min'onChange={this._onChangeReply} name="reply_body" form="usrform" required></textarea>
            </label>
            <br />
            <div className='button-div'>
            <button className='buttonStyle' type='submit' > Send</button>
            </div>
          </form>
        </div>
        <div className='super-user-requests'>
          <h4>Here are your current pending requests to reply to</h4>
        <div className='replies request-wrapper'>
          {
            // take data from state and map it into reusable card component.
            this.state.list.map(request => {
              return <Request data={request} />
            })
          }
        </div>
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
  _onSubmit = (event) => {
    if (this.state.replyBody.length <= 99){
      event.preventDefault()
      alert('Your reply must be 100 characters or more!')
    } else{
      fetch('/api/submitReply', {
        method: 'POST',
        body: JSON.stringify({
          // (USER_ID_FROM, REQUESTS_ID, reply)
          REQUESTS_ID: this.state.requestIdToReplyTo,
          reply: this.state.replyBody,
        }),
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      })
        .then(r => {
          console.log(`IT WORKSSSSSSS`)
        })

    }
  }

}

export default SuperUser;