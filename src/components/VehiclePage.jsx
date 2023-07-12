import React, { useEffect, useState } from 'react'
import './VehiclePage.css'
import img1 from '../images/Lamborghini.jpg'
import img2 from '../images/vehicleimagesdata/baleno.jpg'
import img3 from '../images/vehicleimagesdata/swiftdzire.jpg'
import img4 from '../images/vehicleimagesdata/i20.jpg'
import img5 from '../images/vehicleimagesdata/verna.jpg'
import { vehicledata2 } from '../vehicledata2'
import StarRating from './Starrating'

const vechicleimages = [img1, img2, img3, img4, img5]
function VehiclePage({ value, cityname }) {
  const [cimg, setCimg] = useState(vechicleimages[0])
  const [houseno, setHouseno] = useState('')
  const [street, setStreet] = useState('')
  const [locality, setLocality] = useState('')
  const [nearby, setNearby] = useState('')
  return (
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
          <i className='fa fa-car vpageicon' /> {vehicledata2.vehiclename}
        </span>
      </div>
      <div className='infoandpayment'>
        <div className='vinfopage'>
          <div className='vpageinfo'>{vehicledata2.about}</div>
          <span className='vpageaboutbasic'>
            {vehicledata2.powertype}&#x2022;{vehicledata2.transmissiontype}
            &#x2022;{vehicledata2.seats}
          </span>
          <div className='vpagerating'>
            <StarRating rating={vehicledata2.rating} />
            <span className='vpageaboutbasic'>
              {vehicledata2.rating} &#40;{vehicledata2.tripnumber} trips&#41;
              &#40;{vehicledata2.kmdriven} kms driven&#41;
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
              {vehicledata2.features.map((feature) => {
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
              {vehicledata2.price *
                ((value[1].$M - value[0].$M) * 30 + value[1].$D - value[0].$D)}
            </span>
            <span className='cpaymentdets'>
              Trip Protection Charge: <i className='fa fa-rupee'></i>250
            </span>
            <span className='cpaymentdets2'>
              &#40;Customer will have to pay upto additional 1500 rupees in case
              of any damages to vehicle based upon the damage cost.&#41;
            </span>
            <span className='cpaymentdets'>
              Conveyance Charge: <i className='fa fa-rupee'></i>99
            </span>
            <span className='cpaymenttitle'>
              Final Price: <i className='fa fa-rupee'></i>
              {vehicledata2.price *
                ((value[1].$M - value[0].$M) * 30 + value[1].$D - value[0].$D) +
                250 +
                99}
            </span>
          </div>
          <button className='vpagebook'>Book {vehicledata2.type}</button>
        </div>
      </div>
    </div>
  )
}

export default VehiclePage
