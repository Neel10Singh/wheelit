import React, { useEffect, useState } from 'react'
import './VehiclePage.css'
import img1 from '../images/Lamborghini.jpg'
import img2 from '../images/vehicleimagesdata/baleno.jpg'
import img3 from '../images/vehicleimagesdata/swiftdzire.jpg'
import img4 from '../images/vehicleimagesdata/i20.jpg'
import img5 from '../images/vehicleimagesdata/verna.jpg'
import StarRating from './Starrating'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { auth, db } from '../config/firebase'
import {
  getDocs,
  collection,
  doc,
  updateDoc,
  arrayUnion,
} from 'firebase/firestore'

const vechicleimages = [img1, img2, img3, img4, img5]
function VehiclePage({
  value,
  cityname,
  vehiclelist,
  setIsModalOpen,
  setModalContent,
}) {
  const navigate = useNavigate()
  const [currentuser, setCurrentuser] = useState({})

  const usersRef = collection(db, 'users')
  useEffect(() => {
    const getUserlist = async () => {
      const data = await getDocs(usersRef)
      let datalist = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      datalist = datalist.filter((data) => {
        return data.email === auth?.currentUser?.email
      })
      setCurrentuser(datalist[0])
    }
    getUserlist()
  }, [])

  const location = useLocation()
  const vehicle = location.state

  const [cimg, setCimg] = useState(vechicleimages[0])
  const [houseno, setHouseno] = useState('')
  const [street, setStreet] = useState('')
  const [locality, setLocality] = useState('')
  const [nearby, setNearby] = useState('')

  const makebooking = async (vehicle) => {
    let date = value[0].$D.toString()
    let month = (value[0].$M + 1).toString()
    let year = value[0].$y.toString()

    const startdate = date.concat('/', month, '/', year)
    date = value[1].$D.toString()
    month = (value[1].$M + 1).toString()
    year = value[1].$y.toString()

    const enddate = date.concat('/', month, '/', year)
    const vehicledoc = doc(db, 'vehicles', vehicle.id)
    await updateDoc(vehicledoc, {
      status: true,
      start: startdate,
      end: enddate,
      totalamount:
        vehicle.price *
          ((value[1].$M - value[0].$M) * 30 + value[1].$D - value[0].$D) +
        250 +
        99,
    })
    console.log(currentuser)
    const userdoc = doc(db, 'users', currentuser.id)
    vehicle.totalamount =
      vehicle.price *
        ((value[1].$M - value[0].$M) * 30 + value[1].$D - value[0].$D) +
      250 +
      99
    vehicle.status = true
    vehicle.start = startdate
    vehicle.end = enddate
    await updateDoc(userdoc, { upcomingtrips: arrayUnion(vehicle) })
    let completeadd = houseno.concat(
      ',',
      street,
      ',',
      locality,
      ',',
      nearby,
      ',',
      cityname
    )
    vehicle.deliveryaddress = completeadd
    await updateDoc(vehicledoc, { deliveryaddress: completeadd })

    navigate('/userdashboard')
    console.log('t')
    setIsModalOpen(true)
    console.log('t')
    setModalContent('Upcoming jouney added, Vehicle Booked.')
    console.log('t')
  }
  return (
    <>
      <div className='vehicleinfopage'>
        <div className='vehicleinfopagesub'>
          <div className='vehicleimages'>
            <img src={cimg} className='centerimg'></img>
            <div className='imagerow'>
              {vechicleimages.map((vimg) => {
                return (
                  <button
                    className='vehicleimgbut'
                    onMouseEnter={() => {
                      setCimg(vimg)
                    }}
                  >
                    <img src={vimg} className='vehicleimg' />
                  </button>
                )
              })}
            </div>
          </div>
          <span className='vpagename'>
            <i className='fa fa-car vpageicon' /> {vehicle.name}
          </span>
        </div>
        <div className='infoandpayment'>
          <div className='vinfopage'>
            <div className='vpageinfo'>{vehicle.about}</div>
            <span className='vpageaboutbasic'>
              {vehicle.power}&#x2022;{vehicle.transmission}
              &#x2022;{vehicle.seats}
            </span>
            <div className='vpagerating'>
              <StarRating rating={vehicle.rating} />
              <span className='vpageaboutbasic'>
                {vehicle.rating} &#40;{vehicle.trips} trips&#41; &#40;
                {vehicle.kmsdriven} kms driven&#41;
              </span>
            </div>
            <div className='vpagebookingtime'>
              <span className='vpagebookingtitle'>
                <i className='fa fa-calendar vpageicon' /> Booking Duration:
              </span>
              <div className='vpagebookingdets'>
                <span className='vpagebookingpoint'>
                  Booking from:
                  <br />
                  {value[0].$D}:{value[0].$M + 1}:{value[0].$y}
                </span>
                <span className='vpagebookingpoint'>&#45;&#62;</span>
                <span className='vpagebookingpoint2'>
                  Booking till:
                  <br />
                  {value[1].$D}:{value[1].$M + 1}:{value[1].$y}
                </span>
              </div>
            </div>
            <div className='vpagebookingtime'>
              <span className='vpagebookingtitle'>
                <i className='fa fa-cogs vpageicon' /> Features:
              </span>
              <div className='vpagefeaturedets'>
                {vehicle.features.map((feature) => {
                  return <span>{feature}</span>
                })}
              </div>
            </div>
          </div>
          <div className='vpaymentoption'>
            <div className='vpaymentoptionblock'>
              <span className='vpaymenttitle'>Delivery/Pickup Address</span>
              <input
                type='text'
                placeholder='House No.'
                className='cpaymentinput'
                onChange={(e) => {
                  setHouseno(e.target.value)
                }}
              />
              <input
                type='text'
                placeholder='Street/Colony'
                className='cpaymentinput'
                onChange={(e) => {
                  setStreet(e.target.value)
                }}
              />
              <input
                type='text'
                placeholder='Area/Locality'
                className='cpaymentinput'
                onChange={(e) => {
                  setLocality(e.target.value)
                }}
              />
              <input
                type='text'
                placeholder='Nearby Landmark'
                className='cpaymentinput'
                onChange={(e) => {
                  setNearby(e.target.value)
                }}
              />
              <input
                type='text'
                placeholder='House No.'
                className='cpaymentinput'
                value={cityname}
              />
            </div>

            <div className='vpaymentoptionblock'>
              <span className='vpaymenttitle'>Wallet</span>
              <span className='cpaymentdets'>
                Base Price: <i className='fa fa-rupee'></i>
                {vehicle.price *
                  ((value[1].$M - value[0].$M) * 30 +
                    value[1].$D -
                    value[0].$D)}
              </span>
              <span className='cpaymentdets'>
                Trip Protection Charge: <i className='fa fa-rupee'></i>250
              </span>
              <span className='cpaymentdets2'>
                &#40;Customer will have to pay upto additional 1500 rupees in
                case of any damages to vehicle based upon the damage cost.&#41;
              </span>
              <span className='cpaymentdets'>
                Conveyance Charge: <i className='fa fa-rupee'></i>99
              </span>
              <span className='cpaymenttitle'>
                Final Price: <i className='fa fa-rupee'></i>
                {vehicle.price *
                  ((value[1].$M - value[0].$M) * 30 +
                    value[1].$D -
                    value[0].$D) +
                  250 +
                  99}
              </span>
            </div>
            <button className='vpagebook' onClick={() => makebooking(vehicle)}>
              Book {vehicle.type}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default VehiclePage
