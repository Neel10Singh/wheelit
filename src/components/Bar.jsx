import React, { useState } from 'react'
import './Bar.css'
import wheellogo from '../images/wheellogo.png'
import { Link } from 'react-router-dom'
import loginicon from '../images/loginicon.png'
import mapicon from '../images/mapicon.png'
import policyicon from '../images/policyicon.png'
import helpicon from '../images/helpicon.png'

function Bar({ cityname }) {
  const [isActive, setisActive] = useState(false)

  const myFunction = (event) => {
    setisActive((current) => {
      return !current
    })
  }
  return (
    <div className='navbar'>
      <div className='hamicon'>
        <div className={isActive ? 'change' : ''} onClick={myFunction}>
          <div className='bar1'></div>
          <div className='bar2'></div>
          <div className='bar3'></div>
        </div>
      </div>
      <div className={isActive ? 'invalidlayer' : 'invalidlayerhidden'} />
      <Link className='home'>
        <img src={wheellogo} alt='logo' className='wheellogo' />
        <div className='hometext'>
          <span className='hometitle'>Wheel it</span>
          <span className='homesubtitle'>Never stop wheeling</span>
        </div>
      </Link>
      <div className='loginsignup'>
        <button className='loginbutton'>Login/Signup</button>
      </div>
      <div className={isActive ? 'navmenu' : 'navmenuhidden'}>
        <Link className='navmenuitem'>
          <img src={loginicon} className='navmenuicon' />
          <span className='navmenutext'>Login/Signup</span>
        </Link>
        <Link className='navmenuitem'>
          <img src={mapicon} className='navmenuicon' />
          <span className='navmenutext'>Change City</span>
          <span className='cityname'>{cityname}</span>
        </Link>
        <Link className='navmenuitem'>
          <img src={policyicon} className='navmenuicon' />
          <span className='navmenutext'>Policies</span>
        </Link>
        <Link className='navmenuitem'>
          <img src={helpicon} className='navmenuicon' />
          <span className='navmenutext'>Help & Support</span>
        </Link>
      </div>
    </div>
  )
}

export default Bar
