import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { Store } from "../../App";
import Profile from "./userProfile/Profile";

function Navbar() {
    const [isAuth] = useContext(Store);
    const [isDevDropdownVisible, setIsDevDropdownVisible] = useState(false);

    const toggleDevDropdown = () => {
        setIsDevDropdownVisible(!isDevDropdownVisible);
    };

    return (
        <div>
            <style>
                {`
                    .ProfileContainer {
                        margin-left: 50px;
                    }

                    .dropdown-menu {
                        display: none;
                        position: absolute;
                        background-color: #f9f9f9;
                        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                        padding: 12px 16px;
                        z-index: 2;
                    }
                    .nav-item.dropdown:hover .dropdown-menu {
                        display: block;
                    }
                    .dropdown-menu li {
                        list-style: none;
                    }
                    .dropdown-menu li a {
                        color: black;
                        padding: 8px 16px;
                        text-decoration: none;
                        display: block;
                    }
                    .dropdown-menu li a:hover {
                        background-color: #ddd;
                    }
                `}
            </style>
            <nav className="navbar navbar-expand-lg navbar-light d-flex flex-row justify-content-between">
                <div>
                    <a className="navbar-brand text-white header-navbargroomerimg" href="#">
                        <img width={100} src="https://i.ibb.co/sgNfKkB/Logo-1.png" alt="" />
                    </a>
                 {/*   <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                </button> */}
                </div>
            {/*    <div className="collapse navbar-collapse navbar-items" id="navbarSupportedContent">   */}
            <div className="groomer-responsive-navv navbar-collapse navbar-items" id="navbarSupportedContent"> 
                    <ul className="navbar-nav mr-auto groomer-responsive-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                Home
                            </a>
                        </li>

                        <li className="nav-item active">
                            <Link to="/menu" className="nav-link">
                                Saloon
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/shop" className="nav-link">
                                Shop
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/About" className="nav-link">
                                About us
                            </Link>
                        </li>

                        {/* <li className="nav-item dropdown" onClick={toggleDevDropdown}>
                            <a className="nav-link" href="#">Dev</a>
                            {isDevDropdownVisible && (
                                <ul className="dropdown-menu">
                                    <li><a href="#">Dev1</a></li>
                                    <li><a href="#">Dev2</a></li>
                                    <li><a href="#">Dev3</a></li>
                                </ul>
                            )}
                        </li> */}
                    </ul>
                    <div className="ProfileContainer">
                        {isAuth ? (
                            <Profile />
                        ) : (
                            <Link to="/Register" className="nav-link">
                                <button className="btn btn-light bg-transparent navbar-register-btn">Register</button>
                            </Link>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
