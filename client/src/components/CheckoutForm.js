import React, { Component } from 'react';
import plane from '../images/mail.svg'

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body_contents: '',
      is_private: false,
      stripe_token: '',
      super_users_list: [],
      selected_super_user: null,
      complete: false
    }
    this.submit = this.submit.bind(this);
  }

  //fetch a list of all super user names to have requests assigned to.
  async componentDidMount() {
    await fetch('/api/superUsersList')
      .then(r => r.json())
      .then(data => {
        this.setState({
          super_users_list: data
        })
      })
  }

  async submit(ev) {
    let handler = await window.StripeCheckout.configure({
      key: 'pk_test_tYRNrX4cgaDufHFLDWagpMUG',
      locale: 'auto',
      image: `${plane}`,
      token: (token) => {
        fetch("/charge", {
          method: "POST",
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          body: JSON.stringify({
            data: token.id,
            email: token.email
          })
        })
          .then((response) => {
            console.log(response)
            // IF RESPONSE IS GOOD 
            // set state to completed
            if (response.ok) {
              this.setState({ complete: true });
            }
            // send post request with form information to be written into the DB
            // with stripe token as a receipt_id for backend db
            if (response.ok) {
              fetch('/api/userRequests', {
                method: 'POST',
                body: JSON.stringify({
                  title: this.state.title,
                  text_body: this.state.body_contents,
                  is_private: this.state.is_private,
                  stripe_token: token.id,
                  super_user: this.state.selected_super_user
                }),
                headers: {
                  'Content-Type': 'application/json; charset=utf-8'
                }
              })
            }

          });
      }
    });
    handler.open({
      name: "Buy a Compliment",
      description: 'Classic Compliment order',
      zipCode: true,
      amount: 100 //the total is in pennies
    })
  }

  render() {
    if (this.state.complete) return <h1>Thank you for your purchase</h1>
    return (
      <div className="checkout">
        <label>
          Title:<br />
          <input value={this.state.title} onChange={this._onChangeTitle} type='text' name='title' placeholder='Ex. This is my story...' required></input>
        </label><br />
        <label className='form-text-area'>
          Body:<br />
          <textarea name="text_body" value={this.state.body_contents} onChange={this._onChangeBody} placeholder='I have been having a hard time recently...' required />
        </label> <br />
        <label>Is this private?
          <select name="is_private" onChange={this._onChangePrivate}>
            <option value="" selected disabled hidden>Choose here</option>
            <option value='notPrivate'>Not Private</option>
            <option value='private'>Private</option>
          </select>
        </label>
        <br />
        <label>Who to send to?
          <select name="super_user" onChange={this._onChangeSuperUser}>
            <option value="" selected disabled hidden>Choose here</option>
            {this.state.super_users_list.map(user => {
              return (<option value={user.id}>{user.name}</option>)
            })}
          </select>
        </label>
        <br />
        {/* this area will show the terms to agree to and the $1 purchase ammount */}
        <div className='checkout-terms'>
        <p>Terms</p>
          <p>For $1.00 you may send a message to one of the listed people to receive feedback on your problem, issue, or just to chat! Click below to checkout with Stripe</p>
        </div>
        <h4>Would you like to complete the purchase?</h4>
        {/* <CardElement /> */}
        <button className='buttonStyle' onClick={this.submit}>Send</button>
      </div>
    );
  }

  // designate which super user to assign request to
  _onChangeSuperUser = (e) => {
    this.setState({
      selected_super_user: e.target.value
    })
  }

  //handler for changing the IS_PRIVATE field/state
  _onChangePrivate = (e) => {
    if (e.target.value === 'notPrivate') {
      this.setState({
        is_private: false
      })
    } else if (e.target.value === 'private') {
      this.setState({
        is_private: true
      })
    }
  }

  //handler for changing TITLE field/state
  _onChangeTitle = (event) => {
    this.setState({
      title: event.target.value
    })
  }
  //handler for changing BODY_CONTENTS field/state
  _onChangeBody = (e) => {
    this.setState({
      body_contents: e.target.value
    })
  }
}

export default CheckoutForm;