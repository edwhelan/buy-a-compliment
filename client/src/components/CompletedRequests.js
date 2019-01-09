import React, { Component } from 'react';
import CompletedRequest from './CompletedRequest';

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
  render() {
    return (
      <div className='completed-requests'>
        {this.state.list.map(item => {
          return (<CompletedRequest data={item} />)
        })}
      </div>
    )
  }
}

export default CompletedRequests;