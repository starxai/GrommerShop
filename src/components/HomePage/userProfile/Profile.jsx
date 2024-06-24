import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useBlur } from "../../../context/blurContext";
import { getAppointmentsApi } from "../../../api/Booking_service";
import { removeToken } from "../../../context/StorageToken";
import manCircle from "../../../assets/mans-face-in-a-circle.svg";
import MenuBar from "./menubar";

function Profile() {
  const { isBlur } = useBlur();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [bookingCount, setBookingCount] = useState(0);

  const handleCircleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDropdownVisible(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownVisible(false);
      }
    };

    if (isDropdownVisible) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownVisible]);

  useEffect(() => {
    async function fetchBookings() {
      let response = await getAppointmentsApi(15, 1);
      if (response.code === 200) {
        let count = response.data.appointments.filter(item => item.appointment_status === "booked").length;
        setBookingCount(count);
      } else if (response.code === 401) {
        removeToken();
        navigate("/login");
      }
    }
    fetchBookings();
  }, []);

  return (
    <>
      <style>
        {`
          .profile-container {
            position: relative;
            cursor: pointer;
          }
          .profile-badge {
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(50%, -50%);
            display: flex;
            align-items: center;
            justify-content: center;
            width: 38px;
            height: 38px;
            // background-color: #28a745; /* success color */
             border: 2px solid #fff;
            border-radius: 50%;
            overflow: hidden;
          }
          .notification-badge {
            position: absolute;
            top: -10px;
            right: -10px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
            background-color: #dc3545; /* danger color */
            border-radius: 50%;
            color: white;
            font-size: 0.75rem;
          }
          .profile-image {
            width: 100%;
            height: auto;
            transform: scale(0.6);
          }
        `}
      </style>
      <div className={`profile-container ${isBlur ? 'blur-sm' : ''}`}>
        <div className="profile-badge" ref={dropdownRef} onClick={handleCircleClick}>
          <img src={manCircle} alt="user" className="profile-image" />
          {/* <span className="notification-badge">
            {bookingCount}
          </span> */}
        </div>
        
        {isDropdownVisible && <MenuBar />}
        
      </div>
    </>
  );
}

export default Profile;
