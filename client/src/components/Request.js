import React from 'react';

const Request = (props) => {
  return (
    <div key={props.id} className='request-card'>
      <div className='request-title blueText'>
        Subject: {props.data.title}
      </div>
      <div className='request-body'>
        <p>{props.data.request_contents}</p>
      </div>
      <div className='request-recipient'>Assigned to:{props.data.user_id_to}</div>
    </div>
  )
}

export default Request;