import React, { useEffect } from 'react'
import './CarList.css'
import DateRange from './DateRange'
import VehicleFilter from './VehicleFilter'
import VehicleCard2 from './VehicleCard2'
import { Link } from 'react-router-dom'

function CarList({
  cityname,
  value,
  setValue,
  vehicledataitems,
  setVehicleDataItems,
  filtershow,
  setFilterShow,
}) {
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
        </Link>
        <Link to='/cardets' style={{ textDecoration: 'none', color: 'black' }}>
          <VehicleCard2 value={value} />
        </Link>
      </div>
    </div>
  )
}

export default CarList
