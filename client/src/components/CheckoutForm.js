import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body_contents: '',
      is_private: false,
      stripe_token: ''
    }
    this.state = { complete: false };
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    // User clicked submit
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    let response = await fetch("/charge", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: token.id
    });
    // await console.log(`============= this is your id = ${response}`)
    if (response.ok) {
      console.log(token.id)
      this.setState({ complete: true, stripe_token: token.id });
    }
    if (response.ok) {
      fetch('/api/userRequests', {
        method: 'POST',
        body: JSON.stringify({
          title: this.state.title,
          text_body: this.state.body_contents,
          is_private: this.state.is_private,
          stripe_token: token.id
        }),
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      })
        .then(j => window.location.reload())
        .then(res => res.json())
        .then(r => console.log(r))
    }
  }

  render() {
    if (this.state.complete) return <h1>Thank you for your purchase</h1>
    return (

      <div className="checkout">
        <label>
          Title:
          <input value={this.state.title} onChange={this._onChangeTitle} type='text' name='title' placeholder='Ex. This is my story...' required></input>
        </label><br />
        <label>
          Body:
        <textarea name="text_body" value={this.state.body_contents} onChange={this._onChangeBody} placeholder='I have been having a hard time recently...' required />
        </label> <br />
        <label>Is this private?
          <select name="is_private" value={this.state.is_private} onChange={this._onChangePrivate}>
            <option value="" selected disabled hidden>Choose here</option>
            <option value='notPrivate'>Not Private</option>
            <option value='private'>Private</option>
          </select>
        </label>
        <br />
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
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

  _onChangeTitle = (event) => {
    this.setState({
      title: event.target.value
    })
  }
  _onChangeBody = (e) => {
    this.setState({
      body_contents: e.target.value
    })
  }
}

export default injectStripe(CheckoutForm);