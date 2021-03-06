import React, { Component } from 'react';

import Request from './Request';
import CheckoutForm from './CheckoutForm';
import SuperUser from './SuperUser';
import UsersCompletedRequests from './UsersCompletedRequests';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayname: '',
      isSuper: false,
      loggedIn: false,
      list: []
    }
  }
  async componentDidMount() {
    await fetch('/api/userRequests/')
      .catch(err => console.log(err))
      .then(r => {
        return (r.json())
      })
      .then(dataSource => {
        this.setState({
          list: [...dataSource, ...this.state.list]
        })
        return dataSource
      })
      .then(z => {
        fetch('/api/loggedin')
          .catch(err => {
            console.log(err)
          })
          .then(v => {
            return (v.json());
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
            if (data.is_super) {
              this.setState({
                isSuper: true
              })
            }
          })
      })
  }

  render(props) {
    return (
      <>
        <div className='requests-form'>
          {this.state.isSuper && <SuperUser />}
        </div>
        <div className="example">
          <CheckoutForm />
        </div>
        <div className='completed-requests-zone'>
          <h3>Your Replied Requests</h3>
          <UsersCompletedRequests />
        </div>
        <div className='requests-zone'>
          <h3 >Your Sent Requests</h3>
          <div className='request-wrapper'>
            {this.state.list.map(request => {
              return <Request key={request.id} data={request} />
            })
            }
          </div>
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