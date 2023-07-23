import React, { useEffect, useState } from 'react'
import DateRange from './DateRange'
import background from '../images/loginbackground.jpg'
import './Homepage.css'
import { Link, useNavigate } from 'react-router-dom'
import myloc from '../images/mylocation.png'
import VehicleMenuBar from './VehicleMenuBar'
import adv1 from '../images/adv1.jpg'
import adv2 from '../images/adv2.jpg'
import adv3 from '../images/adv3.jpg'
import VehicleMenu from './VehicleMenu'
import Reviews from './Reviews'
import Footer from './Footer'

function Homepage({
  islogin,
  value,
  setValue,
  vehicledataitems,
  setVehicleDataItems,
  setIsModalOpen,
  setModalContent,
}) {
  const navigate = useNavigate()
  const handlesubmit = (event) => {
    event.preventDefault()
  }
  const movetolist = () => {
    if (islogin) {
      navigate('/carlist')
    } else {
      navigate('/login')
      setIsModalOpen(true)
      setModalContent('Login Please!!')
    }
  }
  return (
    <div>
      <img src={background} alt='background' className='backgroundcar' />
      <div className='backgroundtext'>
        <span className='bgtextbig'>
          The perfect drive for your next trip is just around the corner
        </span>
        <span className='bgtextsmall'>Book it now!</span>
      </div>

      <form onSubmit={handlesubmit} className='inputdetails'>
        <DateRange value={value} setValue={setValue} />

        <button type='submit' className='getcar' onClick={movetolist}>
          GET VEHICLE
        </button>
      </form>
      <VehicleMenuBar
        vehicledataitems={vehicledataitems}
        setVehicleDataItems={setVehicleDataItems}
      />
      <VehicleMenu vdata={vehicledataitems} />
      <div className='advimages'>
        <div className='advimagediv'>
          <img src={adv1} className='advimage'></img>
          <span className='advtext'>
            Get road assistance anywhere everywhere 24x7
          </span>
        </div>
        <div className='advimagediv'>
          <img src={adv2} className='advimage'></img>
          <span className='advtext'>
            {' '}
            Get Scooters, Bikes, Sedans, SUVs or Luxury Cars as per your needs.
          </span>
        </div>
        <div className='advimagediv'>
          <img src={adv3} className='advimage'></img>
          <span className='advtext'>
            Most affordabe pricing with added security.
          </span>
        </div>
      </div>
      <div className='reviewstitle'>
        <p>Hear from our guests</p>
      </div>
      <Reviews />
      <Footer />
    </div>
  )
}

export default Homepage
