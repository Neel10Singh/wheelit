import React, { useState, useContext } from 'react'
import './App.css'
import Bar from './components/Bar'
import Homepage from './components/Homepage'
import CarList from './components/CarList'
import Footer from './components/Footer'
import dayjs from 'dayjs'
import { vehicledata } from './vehicledata'
import Login from './components/Login'
import ChangeCity from './components/ChangeCity'
import VehiclePage from './components/VehiclePage'

const vdatacontext = React.createContext()
const currdate = new Date()

function App() {
  const [cityname, setCityName] = useState('Delhi')
  const [pickupaddress, setPickupAddress] = useState('')
  const [value, setValue] = useState([dayjs(currdate), dayjs(currdate)])
  const [vehicledataitems, setVehicleDataItems] = useState(vehicledata)
  const [filtershow, setFilterShow] = useState(false)
  return (
    <>
      <Bar cityname={cityname} />
      {/* <Homepage
        value={value}
        setValue={setValue}
        vehicledataitems={vehicledataitems}
        setVehicleDataItems={setVehicleDataItems}
      /> */}

      {/* <CarList
        cityname={cityname}
        value={value}
        setValue={setValue}
        vehicledataitems={vehicledataitems}
        setVehicleDataItems={setVehicleDataItems}
        filtershow={filtershow}
        setFilterShow={setFilterShow}
      /> */}
      {/* <Login /> */}
      {/* <ChangeCity cityname={cityname} setCityName={setCityName} /> */}
      <VehiclePage value={value} cityname={cityname} />
      {/* <Footer /> */}
    </>
  )
}

export default App
