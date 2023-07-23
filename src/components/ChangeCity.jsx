import React from 'react'
import backggroundlogin from '../images/loginbackground.jpg'
import './Changecity.css'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

function ChangeCity({
  cityname,
  setCityName,
  setIsModalOpen,
  setModalContent,
}) {
  const navigate = useNavigate()
  const cahngecitybutton = (event) => {
    setCityName(event.target.id)
    navigate('/')
    setIsModalOpen(true)
    setModalContent('City Name Changed Successfully')
  }
  return (
    <>
      <div
        className='citypage'
        style={{
          backgroundImage: `url(${backggroundlogin})`,
          height: '500px',
          width: '100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className='citybox'>
          <span className='cityboxtext'>Current Selected City:</span>
          <span className='cityboxname'>{cityname}</span>
          <span className='cityboxtext'>Change City:</span>
          <div className='cityoptions'>
            <button
              className='cityoption'
              id='Bangalore'
              onClick={cahngecitybutton}
            >
              Bangalore
            </button>
            <button
              className='cityoption'
              id='Delhi'
              onClick={cahngecitybutton}
            >
              Delhi
            </button>
            <button
              className='cityoption'
              id='Hyderabad'
              onClick={cahngecitybutton}
            >
              Hyderabad
            </button>
            <button
              className='cityoption'
              id='Mumbai'
              onClick={cahngecitybutton}
            >
              Mumbai
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ChangeCity
