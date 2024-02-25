import React, { useEffect, useState } from 'react'
import './Login.css'
import backggroundlogin from '../images/loginbackground.jpg'
import { Link, useNavigate } from 'react-router-dom'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '../firebase'

import googleicon from '../images/googleicon.png'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, updateUser } from '../redux/slices/userSlice'

function Login({ setisLogin, setIsModalOpen, setModalContent }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const error = useSelector((state) => state.user.error)
  const user = useSelector((state) => state.user.userInfo)

  const loginsubmit = async (e) => {
    e.preventDefault()
    dispatch(updateUser({ email, password }))

    setisLogin(true)
    setIsModalOpen(true)
    setModalContent('Successfully logged in')
    navigate('/')
    // console.log(typeof err.message);
    if (error) {
      setIsModalOpen(true)
      setModalContent('Invalid credentials')
    }
  }
  const signinwithgoogle = async (e) => {
    e.preventDefault()
    try {
    } catch (err) {
      console.error(err)
    }
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
  const signupclick = async (event) => {
    event.preventDefault()
    dispatch(addUser({ email, password, name }))

    setisLogin(true)
    setIsModalOpen(true)
    setModalContent('Successfully logged in')
    navigate('/')
    // console.log(typeof err.message);
    if (error) {
      setIsModalOpen(true)
      setModalContent('Invalid credentials')
    }
  }

  useEffect(() => {
    document.getElementById('email').value = ''
    document.getElementById('pass').value = ''
  }, [])

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
          <input
            type='text'
            placeholder='Enter email'
            className='loginfield'
            id='email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Enter password'
            className='loginfield'
            id='pass'
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type='submit' className='loginboxbutton'>
            Log In
          </button>
        </form>
        <div className='alternatelogins'>
          <button className='alternateloginbutton' onClick={signinwithgoogle}>
            <img src={googleicon} className='google' />
            <span className='loginboxtext'> Continue with Google</span>
          </button>
        </div>
        <span className='loginboxtext'>
          Don't have an account?{' '}
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
          <input
            type='text'
            placeholder='Name'
            className='loginfield'
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='email'
            placeholder='email id'
            className='loginfield'
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type='password'
            placeholder='Enter password'
            className='loginfield'
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type='submit'
            className='loginboxbutton'
            onClick={signupclick}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
