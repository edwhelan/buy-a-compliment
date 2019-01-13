import React from 'react'

const Register = (props) => {
  return (
    <div className='nav-register'>
      <p className='modal-text'>Please Fill Out the Information Below to Register</p>
      <form action="/api/register" method="POST">
        <label>
          Email address:<br />
          <input type="email" name="email" required />
        </label>
        <br />
        <label>
          Display name:<br />
          <input type="text" name="name" required />
        </label>
        <br />
        <label>
          Password:<br />
          <input type="password" name="password" required />
        </label>
        <br />
        <input className='buttonStyle' type="submit" value="Register" />
      </form >
    </div>
  )
}

export default Register;