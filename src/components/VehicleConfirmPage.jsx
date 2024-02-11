import React, { useEffect, useState } from "react";
import "./VehicleComfirmPage.css";
import img1 from "../images/Lamborghini.jpg";
import img2 from "../images/vehicleimagesdata/baleno.jpg";
import img3 from "../images/vehicleimagesdata/swiftdzire.jpg";
import img4 from "../images/vehicleimagesdata/i20.jpg";
import img5 from "../images/vehicleimagesdata/verna.jpg";
import StarRating from "./Starrating";
import { Link, useLocation, useNavigate } from "react-router-dom";

const vechicleimages = [img1, img2, img3, img4, img5];
function VehiclePage({ cityname }) {
  const location = useLocation();
  const vehicle = location.state;
  const [cimg, setCimg] = useState(vechicleimages[0]);
  return (
    <>
      <div className="vehicleinfopage">
        <div className="vehicleinfopagesub">
          <div className="vehicleimages">
            <img src={cimg} className="centerimg"></img>
            <div className="imagerow">
              {vechicleimages.map((vimg) => {
                return (
                  <button
                    className="vehicleimgbut"
                    onMouseEnter={() => {
                      setCimg(vimg);
                    }}
                  >
                    <img src={vimg} className="vehicleimg" />
                  </button>
                );
              })}
            </div>
          </div>
          <span className="vpagename">
            <i className="fa fa-car vpageicon" /> {vehicle.name}
          </span>
        </div>
        <div className="infoandpayment">
          <div className="vinfopage">
            <div className="vpageinfo">{vehicle.about}</div>
            <span className="vpageaboutbasic">
              {vehicle.power}&#x2022;{vehicle.transmission}
              &#x2022;{vehicle.seats}
            </span>
            <div className="vpagerating">
              <StarRating rating={vehicle.rating} />
              <span className="vpageaboutbasic">
                {vehicle.rating} &#40;{vehicle.trips} trips&#41; &#40;
                {vehicle.kmsdriven} kms driven&#41;
              </span>
            </div>
            <div className="vpagebookingtime">
              <span className="vpagebookingtitle">
                <i className="fa fa-calendar vpageicon" /> Booking Duration:
              </span>
              <div className="vpagebookingdets">
                <span className="vpagebookingpoint">
                  Booking from:
                  <br />
                  {vehicle.start}
                </span>
                <span className="vpagebookingpoint">&#45;&#62;</span>
                <span className="vpagebookingpoint2">
                  Booking till:
                  <br />
                  {vehicle.end}
                </span>
              </div>
            </div>
            <div className="vpagebookingtime">
              <span className="vpagebookingtitle">
                <i className="fa fa-cogs vpageicon" /> Features:
              </span>
              <div className="vpagefeaturedets">
                {vehicle.features.map((feature) => {
                  return <span>{feature}</span>;
                })}
              </div>
            </div>
          </div>
          <div className="vpaymentoption">
            <div className="vpaymentoptionblock">
              <span className="vpaymenttitle">Delivery/Pickup Address</span>
              <textarea className="addressv">
                {vehicle.deliveryaddress}
              </textarea>
            </div>

            <div className="vpaymentoptionblock">
              <span className="vpaymenttitle">Wallet</span>
              <span className="cpaymentdets">
                Base Price: <i className="fa fa-rupee"></i>
                {vehicle.totalamount - 250 - 99}
              </span>
              <span className="cpaymentdets">
                Trip Protection Charge: <i className="fa fa-rupee"></i>250
              </span>
              <span className="cpaymentdets2">
                &#40;Customer will have to pay upto additional 1500 rupees in
                case of any damages to vehicle based upon the damage cost.&#41;
              </span>
              <span className="cpaymentdets">
                Conveyance Charge: <i className="fa fa-rupee"></i>99
              </span>
              <span className="cpaymenttitle">
                Final Price: <i className="fa fa-rupee"></i>
                {vehicle.totalamount}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VehiclePage;
