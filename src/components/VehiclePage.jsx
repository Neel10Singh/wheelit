import React, { useEffect, useState } from 'react'
import './VehiclePage.css'
import img1 from '../images/Lamborghini.jpg'
import img2 from '../images/vehicleimagesdata/baleno.jpg'
import img3 from '../images/vehicleimagesdata/swiftdzire.jpg'
import img4 from '../images/vehicleimagesdata/i20.jpg'
import img5 from '../images/vehicleimagesdata/verna.jpg'
import StarRating from './Starrating'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import { auth, db } from '../firebase'
import { setUser } from '../redux/slices/userSlice'

const vechicleimages = [img1, img2, img3, img4, img5]
function VehiclePage({ vehiclelist, setIsModalOpen, setModalContent }) {
  const navigate = useNavigate()
  const [currentuser, setCurrentuser] = useState({})
  const dispatch = useDispatch()
  const cityname = useSelector((state) => state.city.cityname)
  const startDate = useSelector((state) => state.date.startdate)
  const endDate = useSelector((state) => state.date.enddate)
  const user = useSelector((state) => state.user.userInfo)
  const [value, setValue] = useState([startDate, endDate])
  // const usersRef = collection(db, "users");
  console.log(startDate.toString())
  useEffect(() => {
    const getUserlist = async () => {}
    getUserlist()
  }, [])

  const location = useLocation()
  const vehicle = location.state

  const [cimg, setCimg] = useState(vechicleimages[0])
  const [houseno, setHouseno] = useState('')
  const [street, setStreet] = useState('')
  const [locality, setLocality] = useState('')
  const [nearby, setNearby] = useState('')

  const makebooking = async () => {
    try {
      const docRef = await addDoc(collection(db, 'bookings'), {
        userid: auth.currentUser.uid,
        vehicleid: vehicle.id,
        fromdate: startDate.toString(),
        todate: endDate.toString(),
        address: houseno + street + locality + nearby,
        price:
          (value[1].$M - value[0].$M) * 30 +
          value[1].$D -
          value[0].$D +
          250 +
          99,
      })
      console.log('Document written with ID: ', docRef.id)
      const vehicleRef = doc(db, 'mumbai', vehicle.id)
      await updateDoc(vehicleRef, {
        booked: true,
        bookingId: docRef.id,
      })
      const userRef = doc(db, 'users', auth.currentUser.uid)
      await updateDoc(userRef, {
        bookings: [...user.bookings, docRef.id],
      })
      const docSnap = await getDoc(userRef)
      dispatch(setUser(docSnap.data()))
      navigate('/')
    } catch (e) {
      console.error('Error adding document: ', e)
    }
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
            <i className='fa fa-car vpageicon' /> {vehicle.vehiclename}
          </span>
        </div>
        <div className='infoandpayment'>
          <div className='vinfopage'>
            <div className='vpageinfo'>{vehicle.about}</div>
            <span className='vpageaboutbasic'>
              {vehicle.powertype}&#x2022;{vehicle.transmissionType}
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
            <button className='vpagebook' onClick={() => makebooking()}>
              Book {vehicle.type}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default VehiclePage
