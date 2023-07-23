import React, { useEffect, useState } from 'react'
import './Login.css'
import backggroundlogin from '../images/loginbackground.jpg'
import { Link, useNavigate } from 'react-router-dom'

import { auth, GoogleProvider } from '../config/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../config/firebase'

import googleicon from '../images/googleicon.png'

function Login({ setisLogin, setIsModalOpen, setModalContent }) {
  const navigate = useNavigate()
  useEffect(() => {
    document.getElementById('email').value = ''
    document.getElementById('pass').value = ''
  }, [])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const userRef = collection(db, 'users')

  const loginsubmit = async (e) => {
    e.preventDefault()

    try {
      const em = document.getElementById('email')
      setEmail(em.value)
      const pa = document.getElementById('pass')
      setPassword(pa.value)
      await signInWithEmailAndPassword(auth, email, password)
      setIsModalOpen(true)
      setModalContent('Sussessfully signed in!')
      setisLogin(true)
      navigate('/')
    } catch (err) {
      console.error(err)
    }
  }
  const signinwithgoogle = async (e) => {
    e.preventDefault()

    try {
      await signInWithPopup(auth, GoogleProvider)
      setIsModalOpen(true)
      setModalContent('Sussessfully signed in!')
      setisLogin(true)
      navigate('/')
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
    try {
      const em = document.getElementById('email')
      setEmail(em.value)
      const pa = document.getElementById('pass')
      setPassword(pa.value)

      await createUserWithEmailAndPassword(auth, email, password)
      await addDoc(userRef, {
        email: email,
        password: password,
        upcomingtrips: [],
        deliveryaddress: '',
      })
      setIsModalOpen(true)
      setModalContent('Account Created & Sussessfully signed in!')
      setisLogin(true)
      signupdeactive()
      navigate('/')
    } catch (err) {
      console.error(err)
    }
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
