export const Applyfilters = ({
  state,
  vehicledata,
  setVehicleDataItems,
  vehicledataitems,
  dispatch,
  typeid,
  powerid,
  transid,
  seatid,
  starid,
}) => {
  if (state.car === true) {
    const newvehicledata = vehicledata.filter(
      (eachdata) => eachdata.type === 'car'
    )
    setVehicleDataItems(newvehicledata)
  }
  if (state.bike === true) {
    const newvehicledata = vehicledata.filter(
      (eachdata) => eachdata.type === 'bike'
    )
    setVehicleDataItems(newvehicledata)
  }
  if (state.scooter === true) {
    const newvehicledata = vehicledata.filter(
      (eachdata) => eachdata.type === 'scooter'
    )
    setVehicleDataItems(newvehicledata)
  }
  if (state.luxury === true) {
    const newvehicledata = vehicledata.filter(
      (eachdata) => eachdata.type === 'luxury'
    )
    setVehicleDataItems(newvehicledata)
  }
  if (state.suv === true) {
    const newvehicledata = vehicledata.filter(
      (eachdata) => eachdata.type === 'suv'
    )
    setVehicleDataItems(newvehicledata)
  }
  if (state.manual === true) {
    const newvehicledata = vehicledataitems.filter(
      (eachdata) => eachdata.transmissiontype === 'manual'
    )
    setVehicleDataItems(newvehicledata)
  }
  if (state.amt === true) {
    const newvehicledata = vehicledataitems.filter(
      (eachdata) => eachdata.transmissiontype === 'amt'
    )
    setVehicleDataItems(newvehicledata)
  }
  if (state.cvt === true) {
    const newvehicledata = vehicledataitems.filter(
      (eachdata) => eachdata.transmissiontype === 'cvt'
    )
    setVehicleDataItems(newvehicledata)
  }
  if (state.petrol === true) {
    const newvehicledata = vehicledataitems.filter(
      (eachdata) => eachdata.powertype === 'petrol'
    )
    setVehicleDataItems(newvehicledata)
  }
  if (state.diesel === true) {
    const newvehicledata = vehicledataitems.filter(
      (eachdata) => eachdata.powertype === 'diesel'
    )
    setVehicleDataItems(newvehicledata)
  }
  if (state.electric === true) {
    const newvehicledata = vehicledataitems.filter(
      (eachdata) => eachdata.powertype === 'electric'
    )
    setVehicleDataItems(newvehicledata)
  }
  if (state.hybrid === true) {
    const newvehicledata = vehicledataitems.filter(
      (eachdata) => eachdata.powertype === 'hybrid'
    )
    setVehicleDataItems(newvehicledata)
  }
  if (state.seat2 === true) {
    const newvehicledata = vehicledataitems.filter(
      (eachdata) => eachdata.seats === 2
    )
    setVehicleDataItems(newvehicledata)
  }
  if (state.seat4 === true) {
    const newvehicledata = vehicledataitems.filter(
      (eachdata) => eachdata.seats === 4
    )
    setVehicleDataItems(newvehicledata)
  }
  if (state.seat5 === true) {
    const newvehicledata = vehicledataitems.filter(
      (eachdata) => eachdata.seats === 5
    )
    setVehicleDataItems(newvehicledata)
  }
  if (state.seat7 === true) {
    const newvehicledata = vehicledataitems.filter(
      (eachdata) => eachdata.seats === 7
    )
    setVehicleDataItems(newvehicledata)
  }
  if (state.star4 === true) {
    const newvehicledata = vehicledataitems.filter(
      (eachdata) => eachdata.rating >= 4
    )
    setVehicleDataItems(newvehicledata)
  }
  if (state.star3 === true) {
    const newvehicledata = vehicledataitems.filter(
      (eachdata) => eachdata.rating >= 3
    )
    setVehicleDataItems(newvehicledata)
  }
  if (state.star2 === true) {
    const newvehicledata = vehicledataitems.filter(
      (eachdata) => eachdata.rating >= 2
    )
    setVehicleDataItems(newvehicledata)
  }
  if (state.star1 === true) {
    const newvehicledata = vehicledataitems.filter(
      (eachdata) => eachdata.rating >= 1
    )
    setVehicleDataItems(newvehicledata)
  }
  if (state.star0 === true) {
    const newvehicledata = vehicledataitems.filter(
      (eachdata) => eachdata.rating >= 0
    )
    setVehicleDataItems(newvehicledata)
  }
  console.log(vehicledataitems)
}
