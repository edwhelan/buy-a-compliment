import React from 'react'


const Login = (props) => {
  return (
    <div className='nav-login'>
      <p className='modal-text'>Please Log in below</p>
      <form action='/api/login' method='POST' >
        <label>
          Email address: <br />
          <input type='email' name='email' required />
        </label><br />
        <label>
          Password:<br />
          <input type="password" name="password" required />
        </label> <br />
        <input className='buttonStyle' type="submit" value="submit" />
      </form>
    </div>
  )
}

export default Login