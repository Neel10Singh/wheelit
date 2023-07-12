import React from 'react'
import VehicleCard from './VehicleCard'
import './Vehiclemenu.css'

function VehicleMenu({ vdata }) {
  return (
    <div className='vehiclemenucards'>
      {vdata.map((vehicleitem) => {
        return <VehicleCard vehicleitem={vehicleitem} />
      })}
    </div>
  )
}

export default VehicleMenu
