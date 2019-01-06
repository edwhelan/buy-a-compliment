import React from 'react';

const RequestsForm = () => {
  return (
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

      <input type="submit" value="submit" />
    </form>
  )
}

export default RequestsForm;