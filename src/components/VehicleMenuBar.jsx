import React, { useState, useEffect } from 'react'
import scooter from '../images/scooter.png'
import bike from '../images/bike.png'
import car from '../images/car.png'
import luxury from '../images/luxurycar.png'
import suv from '../images/suv.png'
import { vehicledata } from '../vehicledata'

import './VehicleMenuBar.css'

function VehicleMenuBar({ setVehicleDataItems, margintop, vmiconsize }) {
  useEffect(() => {
    document.getElementById('car').classList.add('vmbuttonactive')
    const newvehicledata = vehicledata.filter(
      (eachdata) => eachdata.type === 'car'
    )
    setVehicleDataItems(newvehicledata)
  }, [])

  const idlist = ['scooter', 'bike', 'car', 'luxury', 'suv']

  const makevmbuttonactive = (id) => {
    idlist.forEach((vehicleid) => {
      document.getElementById(vehicleid).classList.remove('vmbuttonactive')
    })
    document.getElementById(id).classList.add('vmbuttonactive')
    // setSelectedVehicle(id)
    const newvehicledata = vehicledata.filter(
      (eachdata) => eachdata.type === id
    )
    setVehicleDataItems(newvehicledata)
  }

  return (
    <div className='vehiclemenu' style={{ marginTop: margintop }}>
      <button
        className='vmbutton'
        id='scooter'
        onClick={() => makevmbuttonactive('scooter')}
      >
        <img src={scooter} className='vmicon' style={{ width: vmiconsize }} />
      </button>
      <button
        className='vmbutton'
        id='bike'
        onClick={() => makevmbuttonactive('bike')}
      >
        <img src={bike} className='vmicon' style={{ width: vmiconsize }} />
      </button>
      <button
        className='vmbutton'
        id='car'
        onClick={() => makevmbuttonactive('car')}
      >
        <img src={car} className='vmicon' style={{ width: vmiconsize }} />
      </button>
      <button
        className='vmbutton'
        id='luxury'
        onClick={() => makevmbuttonactive('luxury')}
      >
        <img src={luxury} className='vmicon' style={{ width: vmiconsize }} />
      </button>
      <button
        className='vmbutton'
        id='suv'
        onClick={() => makevmbuttonactive('suv')}
      >
        <img src={suv} className='vmicon' style={{ width: vmiconsize }} />
      </button>
    </div>
  )
}

export default VehicleMenuBar
