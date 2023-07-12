export const filterreducer = (state, action) => {
  if (action.type === 'car') {
    const cs = state.car
    return {
      ...state,
      bike: false,
      scooter: false,
      luxury: false,
      suv: false,
      car: !cs,
    }
  } else if (action.type === 'startprice') {
    return {
      ...state,
      startprice: action.payload,
    }
  } else if (action.type === 'endprice') {
    return {
      ...state,
      endprice: action.payload,
    }
  } else if (action.type === 'scooter') {
    const cs = state.scooter
    return {
      ...state,
      scooter: !cs,
      bike: false,
      luxury: false,
      suv: false,
      car: false,
    }
  } else if (action.type === 'luxury') {
    const cs = state.luxury
    return {
      ...state,
      luxury: !cs,
      bike: false,
      scooter: false,
      suv: false,
      car: false,
    }
  } else if (action.type === 'bike') {
    const cs = state.bike
    return {
      ...state,
      bike: !cs,
      scooter: false,
      luxury: false,
      suv: false,
      car: false,
    }
  } else if (action.type === 'suv') {
    const cs = state.suv
    return {
      ...state,
      suv: !cs,
      bike: false,
      scooter: false,
      luxury: false,
      car: false,
    }
  } else if (action.type === 'manual') {
    const cs = state.manual
    return {
      ...state,
      manual: !cs,
      amt: false,
      cvt: false,
    }
  } else if (action.type === 'amt') {
    const cs = state.amt
    return {
      ...state,
      amt: !cs,
      manual: false,
      cvt: false,
    }
  } else if (action.type === 'cvt') {
    const cs = state.cvt
    return {
      ...state,
      cvt: !cs,
      manual: false,
      amt: false,
    }
  } else if (action.type === 'petrol') {
    const cs = state.petrol
    return {
      ...state,
      petrol: !cs,
      diesel: false,
      electric: false,
      hybrid: false,
    }
  } else if (action.type === 'diesel') {
    const cs = state.diesel
    return {
      ...state,
      diesel: !cs,
      petrol: false,
      electric: false,
      hybrid: false,
    }
  } else if (action.type === 'electric') {
    const cs = state.electric
    return {
      ...state,
      electric: !cs,
      petrol: false,
      diesel: false,
      hybrid: false,
    }
  } else if (action.type === 'hybrid') {
    const cs = state.hybrid
    return {
      ...state,
      hybrid: !cs,
      petrol: false,
      diesel: false,
      electric: false,
    }
  } else if (action.type === 'seat2') {
    const cs = state.seat2
    return {
      ...state,
      seat2: !cs,
      seat4: false,
      seat5: false,
      seat7: false,
    }
  } else if (action.type === 'seat4') {
    const cs = state.seat4
    return {
      ...state,
      seat4: !cs,
      seat2: false,
      seat5: false,
      seat7: false,
    }
  } else if (action.type === 'seat5') {
    const cs = state.seat5
    return {
      ...state,
      seat5: !cs,
      seat2: false,
      seat4: false,
      seat7: false,
    }
  } else if (action.type === 'seat7') {
    const cs = state.seat7
    return {
      ...state,
      seat7: !cs,
      seat2: false,
      seat4: false,
      seat5: false,
    }
  } else if (action.type === 'star1') {
    const cs = state.star1
    return {
      ...state,
      star1: !cs,
      star2: false,
      star3: false,
      star4: false,
      star0: false,
    }
  } else if (action.type === 'star2') {
    const cs = state.star2
    return {
      ...state,
      star2: !cs,
      star1: false,
      star3: false,
      star4: false,
      star0: false,
    }
  } else if (action.type === 'star3') {
    const cs = state.star3
    return {
      ...state,
      star3: !cs,
      star1: false,
      star2: false,
      star4: false,
      star0: false,
    }
  } else if (action.type === 'star4') {
    const cs = state.star4
    return {
      ...state,
      star4: !cs,
      star1: false,
      star2: false,
      star3: false,
      star0: false,
    }
  } else if (action.type === 'star0') {
    const cs = state.star0
    return {
      ...state,
      star0: !cs,
      star1: false,
      star2: false,
      star3: false,
      star4: false,
    }
  } else if (action.type === 'CLEAR_FILTERS') {
    return {
      ...state,
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
  }
}
