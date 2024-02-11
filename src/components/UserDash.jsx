import React, { useState, useEffect } from "react";

import { signOut } from "firebase/auth";
import "./userdash.css";
import { Link, useNavigate } from "react-router-dom";

function UserDash({ islogin, setisLogin, setIsModalOpen, setModalContent }) {
  const [currentuserdash, setCurrentuserdash] = useState({});

  useEffect(() => {
    const getUserlist = async () => {};
    getUserlist();
  }, []);

  const navigate = useNavigate();
  const logout = async () => {
    try {
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="userdashpage">
      <div className="userinfodash">
        <span>User email:</span>
        {/* <span>{auth?.currentUser?.email}</span> */}
        <button className="logoutbut" onClick={logout}>
          LogOut
        </button>
      </div>
      <div className="userinfodash2">
        <span>Upcomming Bookings:</span>

        {currentuserdash?.upcomingtrips?.map((booking) => {
          return (
            <Link
              to="/confirmpage"
              state={booking}
              style={{ textDecoration: "none" }}
            >
              <button className="userbooking">
                {booking.name}
                <div className="bookingdatesbut">
                  from: {booking.start} to: {booking.end}
                </div>{" "}
                <div className="bookingdatesbut">
                  Price: {booking.totalamount}
                </div>
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default UserDash;
