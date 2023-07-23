import React, { useState, useEffect } from 'react'
import { auth } from '../config/firebase'
import { signOut } from 'firebase/auth'
import './userdash.css'
import { Link, useNavigate } from 'react-router-dom'
import { db } from '../config/firebase'
import { getDocs, collection } from 'firebase/firestore'

function UserDash({ islogin, setisLogin, setIsModalOpen, setModalContent }) {
  const [currentuserdash, setCurrentuserdash] = useState({})

  const usersRef = collection(db, 'users')
  useEffect(() => {
    const getUserlist = async () => {
      const data = await getDocs(usersRef)
      let datalist = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      datalist = datalist.filter((data) => {
        return data.email === auth?.currentUser?.email
      })
      setCurrentuserdash(datalist[0])
    }
    getUserlist()
  }, [])

  const navigate = useNavigate()
  const logout = async () => {
    try {
      await signOut(auth)
      if (islogin) {
        setisLogin(false)
        setIsModalOpen(true)
        setModalContent('Sussessfully signed out! Thanks for visiting')
        navigate('/')
      }
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <div className='userdashpage'>
      <div className='userinfodash'>
        <span>User email:</span>
        <span>{auth?.currentUser?.email}</span>
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
