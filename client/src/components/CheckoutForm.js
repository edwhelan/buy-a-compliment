import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
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
  }

  render() {
    if (this.state.complete) return <h1>Thank you for your purchase</h1>
    return (
      <div className="checkout">
        <form className='user-requests' action='/api/userRequests' method='POST' id='usrform'>


          <label>
            Title:
      <input type='text' name='title' required />
          </label><br />
          <label>
            Body:
        <textarea name="text_body" form="usrform">Enter text here...</textarea>
          </label> <br />
          <select name="is_private">
            <option value="false">Not Private</option>
            <option value="true">Private</option>
          </select> <br />
          <p>Would you like to complete the purchase?</p>
          <CardElement />
          <button onClick={this.submit}>Send</button>
        </form>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);