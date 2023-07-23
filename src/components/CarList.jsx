import React, { useEffect, useState } from 'react'
import './CarList.css'
import DateRange from './DateRange'
import VehicleFilter from './VehicleFilter'
import VehicleCard2 from './VehicleCard2'
import { Link } from 'react-router-dom'
import { db } from '../config/firebase'
import { getDocs, collection } from 'firebase/firestore'

function CarList({
  cityname,
  value,
  setValue,
  vehicledataitems,
  setVehicleDataItems,
  filtershow,
  setFilterShow,
  vehiclelist,
  setVehicleList,
}) {
  const vehiclelistRef = collection(db, 'vehicles')
  useEffect(() => {
    const getvehiclelist = async () => {
      const data = await getDocs(vehiclelistRef)
      let datalist = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      datalist = datalist.filter((data) => {
        return data.city === cityname && data.status === false
      })
      setVehicleList(datalist)
    }
    getvehiclelist()
  }, [])
  return (
    <div className='carlistpage'>
      <div className='daterangeitem'>
        <DateRange value={value} setValue={setValue} />
      </div>
      <div className='filtercontainer'>
        <VehicleFilter
          filtershow={filtershow}
          setFilterShow={setFilterShow}
          vehicledataitems={vehicledataitems}
          setVehicleDataItems={setVehicleDataItems}
        />
      </div>
      <div className={filtershow ? 'vehiclepagelistnarrow' : 'vehiclepagelist'}>
        {vehiclelist.map((vehicle) => {
          return (
            <Link
              to={`/cardets`}
              style={{ textDecoration: 'none', color: 'black' }}
              state={vehicle}
            >
              <VehicleCard2 key={vehicle.id} value={value} vehicle={vehicle} />
            </Link>
          )
        })}
        {/* <Link to='/cardets' style={{ textDecoration: 'none', color: 'black' }}>
          <VehicleCard2 value={value} />
        </Link>
        <Link to='/cardets' style={{ textDecoration: 'none', color: 'black' }}>
          <VehicleCard2 value={value} />
        </Link>
        <Link to='/cardets' style={{ textDecoration: 'none', color: 'black' }}>
          <VehicleCard2 value={value} />
        </Link>
        <Link to='/cardets' style={{ textDecoration: 'none', color: 'black' }}>
          <VehicleCard2 value={value} />
        </Link>
        <Link to='/cardets' style={{ textDecoration: 'none', color: 'black' }}>
          <VehicleCard2 value={value} />
        </Link>
        <Link to='/cardets' style={{ textDecoration: 'none', color: 'black' }}>
          <VehicleCard2 value={value} />
        </Link>
        <Link to='/cardets' style={{ textDecoration: 'none', color: 'black' }}>
          <VehicleCard2 value={value} />
        </Link>
        <Link to='/cardets' style={{ textDecoration: 'none', color: 'black' }}>
          <VehicleCard2 value={value} />
        </Link> */}
      </div>
    </div>
  )
}

export default CarList
