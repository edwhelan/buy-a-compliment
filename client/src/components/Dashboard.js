import React, { Component } from 'react';

import Request from './Request';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import SuperUser from './SuperUser';

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
              console.log(`YOU AHHHHH SUPPPPAH`)
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
        <StripeProvider apiKey="pk_test_tYRNrX4cgaDufHFLDWagpMUG">
          <div className="example">
            <Elements>
              <CheckoutForm />
            </Elements>
          </div>
        </StripeProvider>
        <div className='requests-form'>
          requests form will go here
          {/* <RequestsForm /> */}
        </div>
        {this.state.isSuper && <SuperUser />}
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