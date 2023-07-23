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
import Modal from './components/Modal'
import UserDash from './components/UserDash'
import VehicleConfirmPage from './components/VehicleConfirmPage'

const vdatacontext = React.createContext()
const currdate = new Date()

function App() {
  const [cityname, setCityName] = useState('Delhi')
  const [pickupaddress, setPickupAddress] = useState('')
  const [value, setValue] = useState([dayjs(currdate), dayjs(currdate)])
  const [vehicledataitems, setVehicleDataItems] = useState(vehicledata)
  const [filtershow, setFilterShow] = useState(false)
  const [islogin, setisLogin] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState('')
  const [vehiclelist, setVehicleList] = useState([])
  const closeModal = () => {
    setIsModalOpen(false)
  }
  return (
    <>
      <Bar cityname={cityname} islogin={islogin} />

      {isModalOpen && (
        <Modal closeModal={closeModal} modalContent={modalContent} />
      )}
      <Routes>
        <Route
          exact
          path='/'
          element={
            <Homepage
              islogin={islogin}
              value={value}
              setValue={setValue}
              vehicledataitems={vehicledataitems}
              setVehicleDataItems={setVehicleDataItems}
              setIsModalOpen={setIsModalOpen}
              setModalContent={setModalContent}
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
              vehiclelist={vehiclelist}
              setVehicleList={setVehicleList}
            />
          }
        ></Route>
        <Route
          path='/login'
          element={
            <Login
              setisLogin={setisLogin}
              setIsModalOpen={setIsModalOpen}
              setModalContent={setModalContent}
            />
          }
        ></Route>
        <Route
          path='/citychange'
          element={
            <ChangeCity
              cityname={cityname}
              setCityName={setCityName}
              setIsModalOpen={setIsModalOpen}
              setModalContent={setModalContent}
            />
          }
        ></Route>
        <Route
          path='/cardets'
          element={
            <VehiclePage
              value={value}
              cityname={cityname}
              vehiclelist={vehiclelist}
              setIsModalOpen={setIsModalOpen}
              setModalContent={setModalContent}
            />
          }
        ></Route>
        <Route
          path='/userdashboard'
          element={
            <UserDash
              islogin={islogin}
              setisLogin={setisLogin}
              setIsModalOpen={setIsModalOpen}
              setModalContent={setModalContent}
            />
          }
        ></Route>
        <Route
          path='/confirmpage'
          element={<VehicleConfirmPage cityname={cityname} />}
        />
      </Routes>
    </>
  )
}

export default App
