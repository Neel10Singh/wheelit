import React, { useState, useEffect } from 'react'

import { signOut } from 'firebase/auth'
import { logOut } from '../redux/slices/userSlice'
import './userdash.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../firebase'

function UserDash({ islogin, setisLogin, setIsModalOpen, setModalContent }) {
  const [currentuserdash, setCurrentuserdash] = useState({})
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.userInfo)
  useEffect(() => {
    const getUserlist = async () => {}
    getUserlist()
  }, [])

  const navigate = useNavigate()
  const logout = async () => {
    try {
      await signOut(auth)
      dispatch(logOut())
      navigate('/')
      setIsModalOpen(true)
      setModalContent('Logged Out Successfully')
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <div className='userdashpage'>
      <div className='userinfodash'>
        <span>User email:</span>
        {user?.email}
        <button className='logoutbut' onClick={logout}>
          LogOut
        </button>
      </div>
      <div className='userinfodash2'>
        <span>Upcomming Bookings:</span>

        {currentuserdash?.upcomingtrips?.map((booking) => {
          return (
            <Link
              to='/confirmpage'
              state={booking}
              style={{ textDecoration: 'none' }}
            >
              <button className='userbooking'>
                {booking.name}
                <div className='bookingdatesbut'>
                  from: {booking.start} to: {booking.end}
                </div>{' '}
                <div className='bookingdatesbut'>
                  Price: {booking.totalamount}
                </div>
              </button>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default UserDash
