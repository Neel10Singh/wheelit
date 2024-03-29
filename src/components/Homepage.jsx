import React, { useEffect, useState } from 'react'
import DateRange from './DateRange'
import background from '../images/loginbackground.jpg'
import './Homepage.css'
import { Link, useNavigate } from 'react-router-dom'
import myloc from '../images/mylocation.png'
import VehicleMenuBar from './VehicleMenuBar'
import adv1 from '../images/adv1.jpg'
import adv2 from '../images/adv2.jpg'
import adv3 from '../images/adv3.jpg'
import VehicleMenu from './VehicleMenu'
import Reviews from './Reviews'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import { updateDate } from '../redux/slices/dateSlice'
import dayjs from 'dayjs'

const currdate = new Date()
function Homepage({
  islogin,

  vehicledataitems,
  setVehicleDataItems,
  setIsModalOpen,
  setModalContent,
}) {
  const startdate = useSelector((state) => state.date.startdate)
  const enddate = useSelector((state) => state.date.enddate)
  const user = useSelector((state) => state.user.userInfo)
  const [value, setValue] = React.useState([startdate, enddate])
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handlesubmit = (event) => {
    event.preventDefault()
    console.log(value)
    const startDate = value[0]
    const endDate = value[1]
    dispatch(updateDate([startDate, endDate]))
    // console.log(datevalue);
    if (user !== null) {
      navigate('/carlist')
    } else {
      navigate('/login')
      setIsModalOpen(true)
      setModalContent('Login Please!!')
    }
  }
  const movetolist = () => {}
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

        <button type='submit' className='getcar'>
          GET VEHICLE
        </button>
      </form>
      <VehicleMenuBar
        vehicledataitems={vehicledataitems}
        setVehicleDataItems={setVehicleDataItems}
      />
      <VehicleMenu vdata={vehicledataitems} />
      <div className='advimages'>
        <div className='advimagediv'>
          <img src={adv1} className='advimage'></img>
          <span className='advtext'>
            Get road assistance anywhere everywhere 24x7
          </span>
        </div>
        <div className='advimagediv'>
          <img src={adv2} className='advimage'></img>
          <span className='advtext'>
            {' '}
            Get Scooters, Bikes, Sedans, SUVs or Luxury Cars as per your needs.
          </span>
        </div>
        <div className='advimagediv'>
          <img src={adv3} className='advimage'></img>
          <span className='advtext'>
            Most affordabe pricing with added security.
          </span>
        </div>
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
