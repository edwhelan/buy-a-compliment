import React, { Component } from 'react';
import CompletedRequest from './CompletedRequest';

class UsersCompletedRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }
  async componentDidMount() {
    await fetch(`/api/usersCompletedRequests`)
      .then(r => r.json())
      .then(z => {
        this.setState({
          list: z
        })
      })
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

export default UsersCompletedRequests;