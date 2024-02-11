import React, { useEffect, useState } from "react";
import "./Login.css";
import backggroundlogin from "../images/loginbackground.jpg";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

import googleicon from "../images/googleicon.png";

function Login({ setisLogin, setIsModalOpen, setModalContent }) {
  const navigate = useNavigate();
  useEffect(() => {
    document.getElementById("email").value = "";
    document.getElementById("pass").value = "";
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginsubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const user = res.user;
      console.log(user);
      setisLogin(true);
      setIsModalOpen(true);
      setModalContent("Successfully logged in");
    } catch (err) {
      // console.log(typeof err.message);
      if (err.message.includes("invalid-credential")) {
        setIsModalOpen(true);
        setModalContent("Invalid credentials");
      }
    }
  };
  const signinwithgoogle = async (e) => {
    e.preventDefault();

    try {
    } catch (err) {
      console.error(err);
    }
  };
  const signupactive = () => {
    const signbox = document.getElementById("signupbox");
    signbox.classList.add("signupbox");
    signbox.classList.remove("signupboxinvisible");
  };
  const signupdeactive = () => {
    const signbox = document.getElementById("signupbox");
    signbox.classList.remove("signupbox");
    signbox.classList.add("signupboxinvisible");
  };
  const signupclick = async (event) => {
    event.preventDefault();
    try {
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className="loginpage"
      style={{
        backgroundImage: `url(${backggroundlogin})`,

        width: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* <img src={backggroundlogin} className='loginbackground' /> */}
      <div className="loginbox">
        <form className="loginform" onSubmit={loginsubmit}>
          <input
            type="text"
            placeholder="Enter email"
            className="loginfield"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password"
            className="loginfield"
            id="pass"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="loginboxbutton">
            Log In
          </button>
        </form>
        <div className="alternatelogins">
          <button className="alternateloginbutton" onClick={signinwithgoogle}>
            <img src={googleicon} className="google" />
            <span className="loginboxtext"> Continue with Google</span>
          </button>
        </div>
        <span className="loginboxtext">
          Don't have an account?{" "}
          <button className="signuptransfer" onClick={signupactive}>
            Sign Up
          </button>
        </span>
      </div>
      <div className="signupboxinvisible" id="signupbox">
        <div className="signupboxtitle">
          <span className="loginboxtext">Enter details:</span>
          <button className="closebox" onClick={signupdeactive}>
            <i className="fa fa-close"></i>
          </button>
        </div>

        <form className="loginform">
          <input
            type="email"
            placeholder="email id"
            className="loginfield"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter password"
            className="loginfield"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="loginboxbutton"
            onClick={signupclick}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
