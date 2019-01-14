import React from 'react';

const Request = (props) => {
  return (
    <div key={props.id} className='request-card'>
      <div className='request-title blueText'>
        {props.data.sender_name}: {props.data.title}
      </div>
      <div className='request-body'>
        <p>{props.data.request_contents}</p>
      </div>
      <div className='request-recipient'>Assigned to:{props.data.recipient_name}</div>
    </div>
  )
}

export default Request;