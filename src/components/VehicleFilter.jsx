import React, { useContext, useState, useReducer } from 'react'
import './VehicleFilter.css'
import scooter from '../images/scooter.png'
import bike from '../images/bike.png'
import car from '../images/car.png'
import luxury from '../images/luxurycar.png'
import suv from '../images/suv.png'
import { vehicledata } from '../vehicledata'
import { type } from '@testing-library/user-event/dist/type'

const defaultState = {
  car: false,
  bike: false,
  scooter: false,
  luxury: false,
  suv: false,
  startprice: '',
  endprice: '',
  manual: false,
  amt: false,
  cvt: false,
  petrol: false,
  diesel: false,
  electric: false,
  hybrid: false,
  seat2: false,
  seat4: false,
  seat5: false,
  seat7: false,
  star4: false,
  star3: false,
  star2: false,
  star1: false,
  star0: false,
}

function VehicleFilter({
  filtershow,
  setFilterShow,
  vehicledataitems,
  setVehicleDataItems,
  margintop,
  vmiconsize,
}) {
  const idlist = [
    'car',
    'bike',
    'scooter',
    'luxury',
    'suv',
    'startprice',
    'endprice',
    'manual',
    'amt',
    'cvt',
    'petrol',
    'diesel',
    'electric',
    'hybrid',
    'seat2',
    'seat4',
    'seat5',
    'seat7',
    'star4',
    'star3',
    'star2',
    'star1',
    'star0',
  ]

  let typeid = ''
  let transid = ''
  let powerid = ''
  let seatid = ''
  let starid = ''
  const [state, dispatch] = useReducer(defaultState)

  const makefilterbuttonactive = (id) => {
    if (
      id === 'car' ||
      id === 'scooter' ||
      id === 'bike' ||
      id === 'luxury' ||
      id === 'suv'
    ) {
      typeid = id
      if (id !== 'car')
        document.getElementById('car').classList.remove('vmbutton2active')
      if (id !== 'bike')
        document.getElementById('bike').classList.remove('vmbutton2active')
      if (id !== 'scooter')
        document.getElementById('scooter').classList.remove('vmbutton2active')
      if (id !== 'luxury')
        document.getElementById('luxury').classList.remove('vmbutton2active')
      if (id !== 'suv')
        document.getElementById('suv').classList.remove('vmbutton2active')
    } else if (id === 'manual' || id === 'amt' || id === 'cvt') {
      transid = id
      if (id !== 'manual')
        document.getElementById('manual').classList.remove('vmbutton2active')
      if (id !== 'amt')
        document.getElementById('amt').classList.remove('vmbutton2active')
      if (id !== 'cvt')
        document.getElementById('cvt').classList.remove('vmbutton2active')
    } else if (
      id === 'petrol' ||
      id === 'diesel' ||
      id === 'electric' ||
      id === 'hybrid'
    ) {
      powerid = id
      if (id !== 'petrol')
        document.getElementById('petrol').classList.remove('vmbutton2active')
      if (id !== 'diesel')
        document.getElementById('diesel').classList.remove('vmbutton2active')
      if (id !== 'electric')
        document.getElementById('electric').classList.remove('vmbutton2active')
      if (id !== 'hybrid')
        document.getElementById('hybrid').classList.remove('vmbutton2active')
    } else if (
      id === 'seat2' ||
      id === 'seat4' ||
      id === 'seat5' ||
      id === 'seat7'
    ) {
      seatid = id
      if (id !== 'seat2')
        document.getElementById('seat2').classList.remove('vmbutton2active')
      if (id !== 'seat4')
        document.getElementById('seat4').classList.remove('vmbutton2active')
      if (id !== 'seat5')
        document.getElementById('seat5').classList.remove('vmbutton2active')
      if (id !== 'seat7')
        document.getElementById('seat7').classList.remove('vmbutton2active')
    } else if (
      id === 'star4' ||
      id === 'star3' ||
      id === 'star2' ||
      id === 'star1' ||
      id === 'star0'
    ) {
      starid = id
      if (id !== 'star4')
        document.getElementById('star4').classList.remove('vmbutton2active')
      if (id !== 'star3')
        document.getElementById('star3').classList.remove('vmbutton2active')
      if (id !== 'star2')
        document.getElementById('star2').classList.remove('vmbutton2active')
      if (id !== 'star1')
        document.getElementById('star1').classList.remove('vmbutton2active')
      if (id !== 'star0')
        document.getElementById('star1').classList.remove('vmbutton2active')
    }
    document.getElementById(id).classList.toggle('vmbutton2active')
    dispatch({ type: id })
  }
  return (
    <div className='filterbody'>
      <button
        className={filtershow ? 'showhidewide' : 'showhide'}
        onClick={() => {
          setFilterShow(!filtershow)
        }}
      >
        Filters
      </button>
      <div className={filtershow ? 'filtermenu' : 'filtermenuhide'}>
        <p>Vehicle Class:</p>
        <div className='vehicleclass'>
          <button
            className='vmbutton2'
            id='scooter'
            onClick={() => makefilterbuttonactive('scooter')}
          >
            <img
              src={scooter}
              className='vmicon2'
              style={{ width: vmiconsize }}
            />
          </button>
          <button
            className='vmbutton2'
            id='bike'
            onClick={() => makefilterbuttonactive('bike')}
          >
            <img src={bike} className='vmicon2' style={{ width: vmiconsize }} />
          </button>
          <button
            className='vmbutton2'
            id='car'
            onClick={() => makefilterbuttonactive('car')}
          >
            <img src={car} className='vmicon2' style={{ width: vmiconsize }} />
          </button>
          <button
            className='vmbutton2'
            id='luxury'
            onClick={() => makefilterbuttonactive('luxury')}
          >
            <img
              src={luxury}
              className='vmicon2'
              style={{ width: vmiconsize }}
            />
          </button>
          <button
            className='vmbutton2'
            id='suv'
            onClick={() => makefilterbuttonactive('suv')}
          >
            <img src={suv} className='vmicon2' style={{ width: vmiconsize }} />
          </button>
        </div>
        <line className='filterdivision'></line>
        <p>Price Range/day:</p>
        <div className='pricerange'>
          <input
            type='text'
            className='priceinput'
            placeholder='starting price'
            id='startprice'
            onChange={(event) => {
              dispatch({
                type: 'startprice',
                payload: event.target.value,
              })
            }}
          />

          <input
            type='text'
            className='priceinput'
            placeholder='ending price'
            id='endprice'
            onChange={(event) => {
              dispatch({
                type: 'endprice',
                payload: event.target.value,
              })
            }}
          />
        </div>
        <line className='filterdivision'></line>
        <p>Transmission type:</p>
        <div className='pricerange'>
          <button
            className='tbutton'
            id='manual'
            onClick={() => makefilterbuttonactive('manual')}
          >
            Manual
          </button>
          <button
            className='tbutton'
            id='amt'
            onClick={() => makefilterbuttonactive('amt')}
          >
            AMT
          </button>
          <button
            className='tbutton'
            id='cvt'
            onClick={() => makefilterbuttonactive('cvt')}
          >
            CVT
          </button>
        </div>
        <line className='filterdivision'></line>
        <p>Fuel type:</p>
        <div className='pricerange'>
          <button
            className='tbutton'
            id='petrol'
            onClick={() => makefilterbuttonactive('petrol')}
          >
            Petrol
          </button>
          <button
            className='tbutton'
            id='diesel'
            onClick={() => makefilterbuttonactive('diesel')}
          >
            Diesel
          </button>
          <button
            className='tbutton'
            id='electric'
            onClick={() => makefilterbuttonactive('electric')}
          >
            Electric
          </button>
          <button
            className='tbutton'
            id='hybrid'
            onClick={() => makefilterbuttonactive('hybrid')}
          >
            Hybrid
          </button>
        </div>
        <line className='filterdivision'></line>
        <p>Seating Capacity:</p>
        <div className='pricerange'>
          <button
            className='tbutton'
            id='seat2'
            onClick={() => makefilterbuttonactive('seat2')}
          >
            2 Seater
          </button>
          <button
            className='tbutton'
            id='seat4'
            onClick={() => makefilterbuttonactive('seat4')}
          >
            4 Seater
          </button>
          <button
            className='tbutton'
            id='seat5'
            onClick={() => makefilterbuttonactive('seat5')}
          >
            5 Seater
          </button>
          <button
            className='tbutton'
            id='seat7'
            onClick={() => makefilterbuttonactive('seat7')}
          >
            7 Seater
          </button>
        </div>
        <line className='filterdivision'></line>
        <p>Rating:</p>
        <div className='pricerange'>
          <button
            className='tbutton'
            id='star4'
            onClick={() => makefilterbuttonactive('star4')}
          >
            &#62; 4<span className='fa fa-star checked'></span>
          </button>
          <button
            className='tbutton'
            id='star3'
            onClick={() => makefilterbuttonactive('star3')}
          >
            &#62; 3<span className='fa fa-star checked'></span>
          </button>
          <button
            className='tbutton'
            id='star2'
            onClick={() => makefilterbuttonactive('star2')}
          >
            &#62; 2<span className='fa fa-star checked'></span>
          </button>
          <button
            className='tbutton'
            id='star1'
            onClick={() => makefilterbuttonactive('star1')}
          >
            &#62; 1<span className='fa fa-star checked'></span>
          </button>
          <button
            className='tbutton'
            id='star0'
            onClick={() => makefilterbuttonactive('star0')}
          >
            &#62; 0<span className='fa fa-star checked'></span>
          </button>
        </div>
        <div className='pricerange'>
          <button className='applyfilter'>Apply</button>
          <button
            className='applyfilter'
            onClick={() => {
              idlist.forEach((element) => {
                document
                  .getElementById(element)
                  .classList.remove('vmbutton2active')
              })
              document.getElementById('startprice').value = ''
              document.getElementById('endprice').value = ''
              typeid = ''
              powerid = ''
              transid = ''
              starid = ''
              seatid = ''
              dispatch({ type: 'CLEAR_FILTERS' })
            }}
          >
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  )
}

export default VehicleFilter
