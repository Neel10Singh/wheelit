import React from 'react'
import './Footer.css'
import wheellogo from '../images/wheellogo.png'

function Footer() {
  return (
    <div className='footer'>
      <div className='footertitle'>
        <p>About Us</p>
      </div>
      <p className='footercontent'>
        From short road trips to quick in-city drives for groceries, supply
        pick-up, food runs, we have the cheapest car rental options for all your
        needs! A scooter or a bike for daily commute, a sedan for short trips,
        SUV for hills or a luxury car for a surprise. With us, you can
        experience the convenience of online booking. The cars listed on our
        platform come with all-India permits that include vehicle insurance. It
        is extremely easy to pick up the car from the host location. You can
        drive unlimited KMs, 0 Security Deposit, and 24/7 Roadside Assistance.
        Rent per KM starts as low as Rs. 49/hour. From short road trips to quick
        in-city drives for groceries, supply pick-up, meeting friends and
        family, doctor visits, business trips, we have the cheapest vehicle
        rental options for all your needs!
      </p>
      <div className='footertitle'>
        <p>Why Zoomcar?</p>
      </div>
      <p className='footercontent'>
        Unlimited KMs You must never stop exploring! That’s why you get
        unlimited KMs with every booking! No Paperwork Rent a car & start
        traveling with zero paperwork requirements! All you need in your
        driver’s license& a national ID. Don’t put a limit to your travel plans
        - our long-duration bookings are here for you. Remember, the longer you
        book for, the more you save! We give you the freedom of self-drive! With
        budget car rental solutions, we offer the best offers, the cheapest
        prices and a wide range of vehicles to choose from. We assure you
        unbeatable prices!
      </p>
      <div className='footerhome'>
        <img src={wheellogo} alt='logo' className='footerwheellogo' />
        <div className='footerhometext'>
          <span className='footerhometitle'>Wheel it</span>
          <span className='footerhomesubtitle'>Never stop wheeling</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
