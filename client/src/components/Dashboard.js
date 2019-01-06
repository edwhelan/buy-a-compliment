import React, { Component } from 'react';

import Request from './Request';
import RequestsForm from './RequestsForm'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserLoggedIn: false,
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
      })
  }

  render(props) {
    return (
      <>
        <div className='requests-form'>
          requests form will go here
          <RequestsForm />
        </div>

        <div className='request-wrapper'>
          {this.state.list.map(request => {
            return <Request data={request} />
          })
          }


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