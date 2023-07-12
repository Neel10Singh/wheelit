import React, { useEffect } from 'react'
import './VehicleCard.css'
import Lambo from '../images/Lamborghini.jpg'
import mapicon from '../images/greenmapicon.png'
import Starrating from './Starrating'

function VehicleCard({ vehicleitem }) {
  const {
    id,
    type,
    vehiclename,
    vehicleimage,
    rating,
    tripnumber,
    transmissiontype,
    powertype,
    seats,
    price,
    city,
  } = vehicleitem
  return (
    <div key={id} className='vehiclecard'>
      <img src={vehicleimage} alt={vehiclename} className='vehicleimage' />
      <div className='vehiclerating'>
        <div id='vehicleratingstars'>
          <Starrating rating={rating} />
        </div>
        <span className='vdetails'>
          {rating}({tripnumber} Trips)
        </span>
      </div>

      <span className='vehiclename'>{vehiclename}</span>
      <span className='vdetails'>
        {transmissiontype} &#x2022; {powertype} &#x2022; {seats} Seats
      </span>
      <div className='vehiclecardline'></div>
      <div className='vehiclecardfooter'>
        <div className='vcardrentdetails'>
          <span className='vdetails'> Available </span>
          <span className='vehicleprice'>&#8377; {price}/day</span>
        </div>
        <div className='vehiclecity'>
          <img src={mapicon} className='vehiclecardmapicon' />
          <span className='vdetails'>{city}</span>
        </div>
      </div>
    </div>
  )
}

export default VehicleCard
