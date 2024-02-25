import React, { useEffect, useState } from 'react'
import './CarList.css'
import DateRange from './DateRange'
import VehicleFilter from './VehicleFilter'
import VehicleCard2 from './VehicleCard2'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateDate } from '../redux/slices/dateSlice'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import { getVehicles } from '../redux/slices/vehicleSlice'

function CarList({
  cityname,

  vehicledataitems,
  setVehicleDataItems,
  filtershow,
  setFilterShow,
}) {
  const dispatch = useDispatch()
  const startDate = useSelector((state) => state.date.startdate)
  const endDate = useSelector((state) => state.date.enddate)
  const [value, setValue] = useState([startDate, endDate])
  const vehicleList = useSelector((state) => state.vehicles.vehicleList)

  const changedate = () => {
    const startDate = value[0]
    const endDate = value[1]
    dispatch(updateDate([startDate, endDate]))
  }
  // console.log(datevalue);
  useEffect(() => {
    dispatch(getVehicles())
  }, [])
  return (
    <div className='carlistpage'>
      <div className='daterangeitem'>
        <DateRange value={value} setValue={setValue} />
        <button type='submit' className='getcar' onClick={changedate}>
          SEARCH
        </button>
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
        {vehicleList?.map((vehicle) => {
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
