import React from 'react'
import './Starrating.css'

function Starrating({ rating }) {
  if (rating % 1 < 0.5) {
    rating = Math.floor(rating)
  } else {
    rating = Math.ceil(rating)
  }
  if (rating == 4) {
    return (
      <>
        <span className='fa fa-star checked'></span>
        <span className='fa fa-star checked'></span>
        <span className='fa fa-star checked'></span>
        <span className='fa fa-star checked'></span>
        <span className='fa fa-star '></span>
      </>
    )
  } else if (rating == 5) {
    return (
      <>
        <span class='fa fa-star checked'></span>
        <span class='fa fa-star checked'></span>
        <span class='fa fa-star checked'></span>
        <span class='fa fa-star checked'></span>
        <span class='fa fa-star checked'></span>
      </>
    )
  } else if (rating == 3) {
    return (
      <>
        <span class='fa fa-star checked'></span>
        <span class='fa fa-star checked'></span>
        <span class='fa fa-star checked'></span>
        <span class='fa fa-star '></span>
        <span class='fa fa-star '></span>
      </>
    )
  } else if (rating == 2) {
    return (
      <>
        <span class='fa fa-star checked'></span>
        <span class='fa fa-star checked'></span>
        <span class='fa fa-star '></span>
        <span class='fa fa-star '></span>
        <span class='fa fa-star '></span>
      </>
    )
  } else if (rating == 1) {
    return (
      <>
        <span class='fa fa-star checked'></span>
        <span class='fa fa-star '></span>
        <span class='fa fa-star '></span>
        <span class='fa fa-star '></span>
        <span class='fa fa-star '></span>
      </>
    )
  } else if (rating == 0) {
    return (
      <>
        <span class='fa fa-star '></span>
        <span class='fa fa-star '></span>
        <span class='fa fa-star'></span>
        <span class='fa fa-star '></span>
        <span class='fa fa-star '></span>
      </>
    )
  }
}

export default Starrating
