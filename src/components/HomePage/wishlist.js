import React, { useEffect } from "react";
import { useState } from "react";
import img1 from "../images/img1.jpg";
//import list from '../components/list'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./NavbarComponent";
import Context from "../../context/axiox";
import { getToken } from "../../context/StorageToken";
//import FavoriteIcon from "@mui/icons-material/Favorite";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState("");
  const [wishlistdata, setwishlistdata] = useState([]);

  const handleWishlistChange = (event) => {
    setWishlist(event.target.value);
  };

  const list = [
    {
      id: "1",
      img: img1,
      name: "Bubble",
      services: "spa|mains & pedics|spa",
      price: "240/person",
      location: "Gachibowli,800m away",
    },
    {
      id: "2",
      img: img1,
      name: "Bounce salon &spa",
      services: "hair cut|hair wash|spa",
      price: "320/person",
      location: "Banjara Hills,1.3km away",
    },
    {
      id: "3",
      img: img1,
      name: "envi salon & spa",
      services: "hair cut|manicure",
      price: "360/person",
      location: "Kukatpalli,2.4km away",
    },
    {
      id: "4",
      img: img1,
      name: "Hadeeds",
      services: "hair styling|make up|spa",
      price: "450/person",
      location: "Banjara Hills,1.8km away",
    },
  ];

  const handlewishlist = async () => {
    let headerlist = {
      Authorization: `Bearer ${getToken()}`,
    };
    let response = await fetch(`${Context}/user/wishlist`, {
      headers: headerlist,
    });
    let data = await response.json();
    if (data.code === 200) {
      setwishlistdata(data.data);
      console.log(wishlistdata);
      console.log(data.data);
    }
  };

  useEffect(() => {
    handlewishlist();
  }, []);

  useEffect(() => {}, [wishlistdata]);

  const repeatListTwice = Array.from({ length: 2 }).flatMap(() => list);

  return (
    <div>
      {/* <Navbar /> */}
      <div style={{ paddingTop: "100px", color: "white" }}>
        <p style={{ marginTop: "20px" }}>Shop Wishlist</p>
      </div>
      <div
        style={{
          marginTop: "20px",
          textAlign: "center",
          marginBottom: "20px",
          color: "white",
        }}
      >
        <h1>Wishlist</h1>
        <form>
          <label style={{ marginInline: "30px" }}>
            <input
              type="radio"
              value="yes"
              checked={wishlist === "yes"}
              onChange={handleWishlistChange}
            />
            Products
          </label>
          <label>
            <input
              type="radio"
              value="no"
              checked={wishlist === "no"}
              onChange={handleWishlistChange}
            />
            Salons
          </label>
        </form>
      </div>
      <div className="saloncard-main-box">
        {wishlistdata.map((data, index) => (
          <div className="card-box" key={index}>
            <div>
              <img src={data.img} className="img-tag" alt={data.name} />
              <div className="card-location">{data.location}</div>
              <div className="fa-heart">
                <FontAwesomeIcon icon={faHeart} />
              </div>
            </div>
            <h3 style={{ color: "white", marginTop: "-45px" }}>{data.name}</h3>

            <div
              className="wishlist-services"
              style={{ color: "white", fontSize: "13px", marginRight: "10px" }}
            >
              {data.services}
            </div>
            <div
              style={{ color: "white", marginTop: "15px", fontSize: "15px" }}
            >
              Rs {data.price}
              <div className="fa-arrow">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
