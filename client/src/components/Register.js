import React from 'react'

const Register = (props) => {
  return (
    <form action="/api/register" method="POST">
      <label>
        Email address:<br />
        <input type="email" name="email" required />
      </label>
      <br />
      <label>
        Display name:<br />
        <input type="text" name="displayName" required />
      </label>
      <br />
      <label>
        Password:<br />
        <input type="password" name="password" required />
      </label>
      <br />
      <input type="submit" value="Register" />
    </form >
  )
}

export default Register;