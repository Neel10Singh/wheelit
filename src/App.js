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
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const vdatacontext = React.createContext()
const currdate = new Date()

function App() {
  const [cityname, setCityName] = useState('Delhi')
  const [pickupaddress, setPickupAddress] = useState('')
  const [value, setValue] = useState([dayjs(currdate), dayjs(currdate)])
  const [vehicledataitems, setVehicleDataItems] = useState(vehicledata)
  const [filtershow, setFilterShow] = useState(false)
  const [islogin, setisLogin] = useState(false)
  return (
    <>
      <Bar cityname={cityname} islogin={islogin} />
      <Routes>
        <Route
          exact
          path='/'
          element={
            <Homepage
              value={value}
              setValue={setValue}
              vehicledataitems={vehicledataitems}
              setVehicleDataItems={setVehicleDataItems}
            />
          }
        ></Route>
        <Route
          path='/carlist'
          element={
            <CarList
              cityname={cityname}
              value={value}
              setValue={setValue}
              vehicledataitems={vehicledataitems}
              setVehicleDataItems={setVehicleDataItems}
              filtershow={filtershow}
              setFilterShow={setFilterShow}
            />
          }
        ></Route>
        <Route
          path='/login'
          element={<Login setisLogin={setisLogin} />}
        ></Route>
        <Route
          path='/citychange'
          element={<ChangeCity cityname={cityname} setCityName={setCityName} />}
        ></Route>
        <Route
          path='/cardets'
          element={<VehiclePage value={value} cityname={cityname} />}
        ></Route>
      </Routes>
    </>
  )
}

export default App
