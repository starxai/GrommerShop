// Ensure all imports are correctly referenced
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useBlur } from "../../../context/blurContext";
import { getAppointmentsApi } from "../../../api/Booking_service";
import { removeToken } from "../../../context/StorageToken";
import manCircle from "../../../assets/mans-face-in-a-circle.svg";
import MenuBar from "./menubar";  // Double-check this import path

function Profile() {
  const { isBlur } = useBlur();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [bookingCount, setBookingCount] = useState(0);

  const handleCircleClick = () => {
    setIsDropdownVisible(prev => !prev); // Use functional update for toggle
    console.log("Dropdown toggled to: ", !isDropdownVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        console.log("Click outside detected");
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
    <div className={`position-relative ${isBlur ? 'blur-sm' : ''}`} style={{ cursor: "pointer" }}>
      <div className="badge bg-success position-absolute top-0 start-100 translate-middle p-2 border border-light rounded-circle">
        <img
          src={manCircle}
          alt="user"
          className="img-fluid"
          style={{ transform: "scale(0.6)" }}
          ref={dropdownRef}
          onClick={handleCircleClick}
        />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {bookingCount}
        </span>
      </div>
      {isDropdownVisible && <MenuBar />}
    </div>
  );
}

export default Profile;
