import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { Store } from "../../../App";
import { removeToken } from "../../../context/StorageToken";

function MenuBar() {
    const navigate = useNavigate();
    const [isAuth, setisAuth] = useContext(Store);

    const logoutHandler = () => {
        removeToken();
        setisAuth(null);
        navigate("/");
    };

    return (
        <>
            <style>
                {`
                .dropdown {
                    position: relative;
                    display: inline-block;
                }

                .dropdown-button {
                    background-color: #4CAF50;
                    color: white;
                    padding: 8px;
                    font-size: 16px;
                    border: none;
                    cursor: pointer;
                }

                .dropdown-menu {
                    display: none;
                    position: absolute;
                    background-color: #f9f9f9;
                    min-width: 160px;
                    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                    z-index: 1;
                }

                .dropdown-menu li {
                    color: black;
                    padding: 12px 16px;
                    text-decoration: none;
                    display: block;
                }

                .dropdown-menu li:hover {
                    background-color: #ddd;
                }

                .dropdown:hover .dropdown-menu {
                    display: block;
                }

                .dropdown-item {
                    cursor: pointer;
                }
                `}
            </style>
            <div className="dropdown">
                <button className="dropdown-button">Menu</button>
                <ul className="dropdown-menu">
                    <li><NavLink className="dropdown-item" to="#">Bookings</NavLink></li>
                    <li><NavLink className="dropdown-item" to="#">Wishlist</NavLink></li>
                    <li className="dropdown-item" onClick={logoutHandler}>Logout</li>
                </ul>
            </div>
        </>
    );
}

export default MenuBar;
