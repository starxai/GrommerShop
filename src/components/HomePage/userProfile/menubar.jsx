import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Store } from "../../../App";
import { removeToken } from "../../../context/StorageToken";
import { Link } from "react-router-dom";

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
                .menu-bar {
                    position: absolute;
                     top: 20px;
                      right: -47px;
                    background-color: #222222;
                    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                    padding: 4px 2px;
                    list-style: none;       /* Removes default list styling */
                    margin: 0;              /* Removes default margin */
                }

                .menu-item {
                    color: white;
                    padding: 4px 1px;
                    text-decoration: none; /* Removes underline from links */
                    cursor: pointer;
                }

                .menu-item:hover {
                    background-color: black; /* Adds a hover effect */
                }

                .menu-item:not(:last-child) {
                    margin-right: 10px;     /* Adds spacing between items */
                }

                // .a {
                //     color: black;          /* Ensures text color is black */
                //     text-decoration: none; /* Ensures no underline */
                // }

                // .a:hover {
                //     color: #4CAF50;        /* Changes text color on hover */
                // }
                `}
      </style>
      <ul className="menu-bar">
        <Link to="/bookinghistory">
          {" "}
          <li className="menu-item">
            <a>Bookings</a>
          </li>{" "}
        </Link>
        <Link to="/wishlist">
          {" "}
          <li className="menu-item">
            <a>Wishlist</a>
          </li>
        </Link>
        <li className="menu-item">
          <a onClick={logoutHandler}>Logout</a>
        </li>
      </ul>
    </>
  );
}

export default MenuBar;
