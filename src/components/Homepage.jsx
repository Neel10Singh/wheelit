import React, { useEffect, useState } from 'react'
import DateRange from './DateRange'
import background from '../images/loginbackground.jpg'
import './Homepage.css'
import { Link } from 'react-router-dom'
import myloc from '../images/mylocation.png'
import VehicleMenuBar from './VehicleMenuBar'
import adv1 from '../images/adv1.jpg'
import adv2 from '../images/adv2.jpg'
import adv3 from '../images/adv3.jpg'
import VehicleMenu from './VehicleMenu'
import Reviews from './Reviews'
import Footer from './Footer'

function Homepage({ value, setValue, vehicledataitems, setVehicleDataItems }) {
  const handlesubmit = (event) => {
    event.preventDefault()
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
        <Link to='/carlist'>
          <button type='submit' className='getcar'>
            GET VEHICLE
          </button>
        </Link>
      </form>
      <VehicleMenuBar
        vehicledataitems={vehicledataitems}
        setVehicleDataItems={setVehicleDataItems}
      />
      <VehicleMenu vdata={vehicledataitems} />
      <div className='advimages'>
        <img src={adv1} className='advimage'></img>
        <img src={adv2} className='advimage'></img>
        <img src={adv3} className='advimage'></img>
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
