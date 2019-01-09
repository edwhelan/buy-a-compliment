import React, { Component } from 'react';

class CompletedRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }
  async componentDidMount() {
    await fetch(`/api/completedRequests`)
      .then(r => r.json()
        .then(data => {
          this.setState({
            list: data
          })
        }))
  }
  render(props) {
    return (
      <div className='completed-requests'>
        {this.state.list.map(item => {
          return (
            <div key={item.id}>
              <p>{item.sender_name}: {item.title}</p>
              <p>{item.request_contents}</p>
              <p>{item.recipient_name}: {item.reply}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default CompletedRequests