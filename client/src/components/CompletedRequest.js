import React from 'react'

const CompletedRequest = (props) => {
  return (
    <div className='completed-request' key={props.data.id}>
      <span className='blueText'>
        <p>{props.data.sender_name}: {props.data.title}</p>
      </span>
      <p>{props.data.request_contents}</p>
      <p>{props.data.recipient_name}: {props.data.reply}</p>
    </div>
  )
}

export default CompletedRequest