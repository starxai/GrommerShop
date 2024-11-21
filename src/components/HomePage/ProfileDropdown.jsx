import React, { useState, useEffect, useRef } from "react";
import { useNavigate, NavLink } from "react-router-dom";
// import { useBlur } from "../../../context/blurContext";
// import { getAppointmentsApi } from "../../../api/Booking_service";
// import { removeToken } from "../../../context/StorageToken";
import manCircle from "../../assets/mans-face-in-a-circle.svg";
import MenuBar from "./userProfile/menubar";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";
import "../css/ProfileDropdown.css";
import { Store } from "../../App";
import { useContext } from "react";

function Profile() {
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const [openProfile, setOpenProfile] = useState(false);

  const handleCircleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setOpenProfile(!openProfile);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenProfile(false);
      }
    };

    if (openProfile) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openProfile]);
  return (
    <div className="profile-button-container">
      <button
        ref={dropdownRef}
        onClick={handleCircleClick}
        className="profile-button"
      >
        <img src={manCircle} alt="user" className="profile-image" />
        <span className="profile-chevron">
          {openProfile ? (
            <RiArrowUpSLine size={30} />
          ) : (
            <RiArrowDownSLine size={30} />
          )}
        </span>
        <span className="profile-btn-text">Profile</span>
      </button>

      {openProfile && <MenuBar2 />}
    </div>
  );
}

function MenuBar2() {
  const { setisAuth } = useContext(Store);
  const navigate = useNavigate();
  //   const [isAuth, setisAuth] = useContext(Store);

  const logoutHandler = () => {
    localStorage.removeItem("salon_user_token");
    setisAuth(null);
    navigate("/");
  };

  return (
    <ul className="profile-dropdown">
      <li className="profile-dropdown-link">
        <NavLink to="/bookinghistory">Bookings</NavLink>
      </li>
      <li className="profile-dropdown-link">
        <NavLink to="/wishlist">Wishlist</NavLink>
      </li>
      <li className="profile-dropdown-link">
        <NavLink to="/account">Account</NavLink>
      </li>
      <li className="profile-dropdown-link" onClick={logoutHandler}>
        Logout
      </li>
    </ul>
  );
}

export default Profile;
