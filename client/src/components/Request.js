import React from 'react';

const Request = (props) => {
  return (
    <div className='request-card'>
      <div className='request-title'>
        {props.data.title}
      </div>
      <div className='request-body'>
        <p>{props.data.bodyContents}</p>
      </div>
      <div className='request-recipient'>to:{props.data.to}</div>
    </div>
  )
}

export default Request;