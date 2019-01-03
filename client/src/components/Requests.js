import React, { Component } from 'react';
import Request from './Request'

class Requests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    }
  }
  //get data from API for all requests then put into state
  async componentDidMount() {
    console.log('fetching data')
    await fetch('/api/requests/')
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
  render() {
    return (
      <div className='request-wrapper'>
        {
          // take data from state and map it into reusable card component.
          this.state.list.map(request => {
            return <Request data={request} />
          })
        }
      </div>



    )
  }
}

export default Requests