import React from 'react'

const CompletedRequest = (props) => {
  return (
    <div className='completed-request' key={props.data.id}>
      <span className='blueText'>
        <p>
          {props.data.sender_name}: {props.data.title}
          <i className="fas fa-paper-plane"></i>
        </p>
      </span>
      <p>{props.data.request_contents}</p>
      <p className='receiveText'><i className="fas fa-check"></i>
        {props.data.recipient_name}: {props.data.reply}
      </p>
    </div>
  )
}

export default CompletedRequest