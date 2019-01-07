import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body_contents: '',
      is_private: false,
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

    if (response.ok) this.setState({ complete: true });
    if (response.ok) {
      fetch('/api/userRequests', {
        method: 'POST',
        body: JSON.stringify({
          title: this.state.title,
          body_contents: this.state.body_contents,
          is_private: this.state.is_private,
        }),
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      })
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
        <select name="is_private" value={this.state.is_private} onChange={this._onChangePrivate}>
          <option value="false">Not Private</option>
          <option value="true">Private</option>
        </select> <br />
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
  _onChangePrivate = (e) => {
    this.setState({
      is_private: e.target.value
    })
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