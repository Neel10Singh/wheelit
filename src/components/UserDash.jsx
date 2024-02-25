import React, { useState, useEffect } from 'react'

import { signOut } from 'firebase/auth'
import { logOut } from '../redux/slices/userSlice'
import './userdash.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../firebase'
import { getBookings } from '../redux/slices/bookingSlice'

function UserDash({ setIsModalOpen, setModalContent }) {
  let bookings = useSelector((state) => state.bookings.bookingList)
  console.log(bookings)
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.userInfo)
  useEffect(() => {
    dispatch(getBookings(user))
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

        {bookings?.map((booking) => {
          return (
            <Link
              to='/confirmpage'
              state={booking}
              style={{ textDecoration: 'none' }}
            >
              <button className='userbooking'>
                {booking.vehiclename}
                <div className='bookingdatesbut'>
                  from: {booking.fromdate} to: {booking.todate}
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
