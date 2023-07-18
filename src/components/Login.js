import React from 'react'
import './Login.css'
import backggroundlogin from '../images/loginbackground.jpg'
import { Link } from 'react-router-dom'
function Login({ setisLogin }) {
  const loginsubmit = (e) => {
    e.preventDefault()
  }
  const signupactive = () => {
    const signbox = document.getElementById('signupbox')
    signbox.classList.add('signupbox')
    signbox.classList.remove('signupboxinvisible')
  }
  const signupdeactive = () => {
    const signbox = document.getElementById('signupbox')
    signbox.classList.remove('signupbox')
    signbox.classList.add('signupboxinvisible')
  }
  const signupclick = (event) => {
    event.preventDefault()
    const otpbox = document.getElementById('otpdiv')
    otpbox.classList.add('otp')
    otpbox.classList.remove('otphide')
  }
  return (
    <div
      className='loginpage'
      style={{
        backgroundImage: `url(${backggroundlogin})`,

        width: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* <img src={backggroundlogin} className='loginbackground' /> */}
      <div className='loginbox'>
        <form className='loginform' onSubmit={loginsubmit}>
          <input type='text' placeholder='Enter email' className='loginfield' />
          <input
            type='password'
            placeholder='Enter password'
            className='loginfield'
          />
          <Link to='/'>
            <button
              type='submit'
              className='loginboxbutton'
              onClick={() => {
                setisLogin(true)
              }}
            >
              Log In
            </button>
          </Link>
        </form>
        <div className='alternatelogins'>
          <span className='loginboxtext'>Login with: </span>
          <button className='alternateloginbutton phone'>
            <i className='fa fa-phone'></i>
          </button>
          <button className='alternateloginbutton google'>
            <i className='fa fa-google'></i>
          </button>
          <button className='alternateloginbutton facebook'>
            <i className='fa fa-facebook'></i>
          </button>
        </div>
        <span className='loginboxtext'>
          Don' have an account?{' '}
          <button className='signuptransfer' onClick={signupactive}>
            Sign Up
          </button>
        </span>
      </div>
      <div className='signupboxinvisible' id='signupbox'>
        <div className='signupboxtitle'>
          <span className='loginboxtext'>Enter details:</span>
          <button className='closebox' onClick={signupdeactive}>
            <i className='fa fa-close'></i>
          </button>
        </div>

        <form className='loginform'>
          <input type='text' placeholder='Full Name' className='loginfield' />
          <input
            type='text'
            placeholder='Phone Number'
            className='loginfield'
          />
          <input type='email' placeholder='email id' className='loginfield' />

          <input
            type='password'
            placeholder='Enter password'
            className='loginfield'
          />
          <input
            type='password'
            placeholder='Confirm password'
            className='loginfield'
          />
          <button
            type='submit'
            className='loginboxbutton'
            onClick={signupclick}
          >
            Sign Up
          </button>
          <div className='otphide' id='otpdiv'>
            <span className='loginboxtext'>
              Enter 6 digit otp sent to your email id
            </span>
            <form className='otp form'>
              <input type='text' className='loginfield'></input>
              <button type='submit' className='loginboxbutton'>
                Confirm
              </button>
            </form>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
