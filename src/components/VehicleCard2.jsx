import React from "react";
import "./VehicleCard2.css";
import { vehicledata2 } from "../vehicledata2";
import Starrating from "./Starrating";

function VehicleCard2({ value, vehicle }) {
  const {
    id,
    type,
    vehiclename,
    vehicleimage,
    rating,
    tripnumber,
    transmissiontype,
    powertype,
    seats,
    price,
    city,
    about,
    features,
  } = vehicle;

  return (
    <div key={id} className="vehiclecard2">
      <img src={vehicleimage} alt={vehiclename} className="vehicleimage2" />
      <div className="vehiclerating2">
        <div id="vehicleratingstars2">
          <Starrating rating={rating} />
        </div>
        <span className="vdetails2">
          {rating}({tripnumber} Trips)
        </span>
      </div>

      <span className="vehiclename2">{vehiclename}</span>
      <span className="vdetails2">
        {transmissiontype} &#x2022; {powertype} &#x2022; {seats} Seats
      </span>
      <div className="vehiclecardline2"></div>
      <div className="vehiclecardfooter2">
        <div className="vcardrentdetails2">
          <span className="vehicleprice2">&#8377; {price}/day</span>
          <span className="vdetails2">
            {" "}
            Total:
            {((value[1].$M - value[0].$M) * 30 + (value[1].$D - value[0].$D)) *
              price}{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default VehicleCard2;
