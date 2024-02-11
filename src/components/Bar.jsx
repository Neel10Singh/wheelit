import React, { useState } from "react";
import "./Bar.css";
import wheellogo from "../images/wheellogo.png";
import { Link } from "react-router-dom";
import loginicon from "../images/loginicon.png";
import mapicon from "../images/mapicon.png";
import policyicon from "../images/policyicon.png";
import helpicon from "../images/helpicon.png";

import { useSelector } from "react-redux";

function Bar({ islogin }) {
  const [isActive, setisActive] = useState(false);
  const cityname = useSelector((state) => state.city.cityname);
  const myFunction = (event) => {
    setisActive((current) => {
      return !current;
    });
  };
  return (
    <div className="navbar">
      <div className="hamicon">
        <div className={isActive ? "change" : ""} onClick={myFunction}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
      <div className={isActive ? "invalidlayer" : "invalidlayerhidden"} />
      <Link className="home" to="/">
        <img src={wheellogo} alt="logo" className="wheellogo" />
        <div className="hometext">
          <span className="hometitle">Wheel it</span>
          <span className="homesubtitle">Never stop wheeling</span>
        </div>
      </Link>
      {/* <div className="loginsignup"> */}
      {!islogin && (
        <Link to="/login">
          <button className="loginbutton">Login/Signup</button>
        </Link>
      )}
      {islogin && (
        <p
          style={{
            color: "white",
            position: "absolute",
            right: "15px",
            fontSize: "25px",
            marginTop: "20px",
          }}
          className="userdisplay"
        >
          Hello{" "}
          <Link to="/userdashboard">
            <button className="userdashbutton">
              {/* {auth?.currentUser?.email} */}jflafjlafl
            </button>
          </Link>
        </p>
      )}
      {/* </div> */}
      <div className={isActive ? "navmenu" : "navmenuhidden"}>
        {!islogin && (
          <Link
            className="navmenuitem"
            to="/login"
            onClick={() => setisActive(false)}
          >
            <img src={loginicon} className="navmenuicon" />
            <span className="navmenutext">Login/Signup</span>
          </Link>
        )}
        {islogin && (
          <Link to="/userdashboard">
            <span
              className="navmenuitem"
              style={{
                paddingLeft: "15px",
                width: "95%",
                textDecoration: "none",
              }}
            >
              Hello {/*{auth?.currentUser?.email}!*/}
            </span>
          </Link>
        )}
        <Link
          className="navmenuitem"
          to="/citychange"
          onClick={() => setisActive(false)}
        >
          <img src={mapicon} className="navmenuicon" />
          <span className="navmenutext">Change City</span>
          <span className="cityname">{cityname}</span>
        </Link>
        <Link className="navmenuitem" onClick={() => setisActive(false)}>
          <img src={policyicon} className="navmenuicon" />
          <span className="navmenutext">Policies</span>
        </Link>
        <Link className="navmenuitem" onClick={() => setisActive(false)}>
          <img src={helpicon} className="navmenuicon" />
          <span className="navmenutext">Help & Support</span>
        </Link>
      </div>
    </div>
  );
}

export default Bar;
