import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./NavbarComponent";
import ReactDatePicker from "./ReactDatePicker";
import Context from "../../context/axiox";
import Swal from "sweetalert2";
import { getToken } from "../../context/StorageToken";
import Rating from "react-rating-stars-component";
import reactstarcomponent from "./react-starcomponent";
import { event } from "jquery";
function SalonMainPage() {
  // function ReviewData() {
  //   console.log(review);
  // }
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = location.state || {};
  const [data, setData] = useState({});
  const [service, setservice] = useState();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedTreatments, setSelectedTreatments] = useState([]);
  const [review, setreview] = useState("");
  const [rating, setrating] = useState();
  // Destructure the data object and use optional chaining for salon_features
  const {
    salon_location,
    salon_name,
    salon_address,
    salon_description,
    salon_features,
    salon_services,
  } = data || {};

  const feature_wifi = salon_features?.feature_wifi;
  const feature_Ac = salon_features?.feature_AC;
  const feature_parking = salon_features?.feature_parking;
  const handleSalonProfile = async () => {
    fetch(`${Context}/user/salon?uuid=${id}`)
      .then((response) => response.json())
      .then((data) => setData(data.data.salon));
  };
  const headerlist = {
    Authorization: `Bearer ${getToken()}`,
  };
  const bodycontent = JSON.stringify({
    salon_uuid: id,
    rating: rating,
    message: review,
  });
  const hanldecreatereview = async () => {
    let response = await fetch(`${Context}/user/feedback/create`, {
      method: "POST",
      body: bodycontent,
      headers: headerlist,
    });

    let data = await response.json();
    console.log(data);
  };

  const handlereview = async () => {
    let response = await fetch(
      `${Context}/user/feedback/getFeedback?salon_uuid=${id}`
    );

    let code = await response.json();
    console.log(code);
  };

  useEffect(() => {
    if (id) {
      handleSalonProfile();
      handlereview();
    }
  }, [id]);
  useEffect(() => {
    console.log(review);
  }, [review]);

  function handleslotbooking() {
    navigate("/booking", {
      state: { salon_name, salon_address, selectedTreatments, id },
    });
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCheckboxChange = (event, treatment) => {
    const newSelectedTreatments = event.target.checked
      ? [...selectedTreatments, treatment]
      : selectedTreatments.filter((t) => t !== treatment);
    setSelectedTreatments(newSelectedTreatments);
  };
  console.log(selectedTreatments);

  const sweeetalert = async () => {
    Swal.fire({
      title: "please give me your review",
      input: "text",
      inputPlaceholder: "Enter your feedback",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "You need to write something!";
        }
      },
    }).then((result) => {
      if (result.value) {
        setreview(result.value);
        Swal.fire(`Hello, ${result.value}!`);
      }
    });
  };

  useEffect(() => {
    console.log(rating);
    hanldecreatereview();
  }, [rating]);

  const handleRatingChange = async (newRating) => {
    setrating(newRating);
  };

  return (
    <div>
      {/* <Navbar /> */}

      <div className="saloon-page-container">
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              style={{
                height: "9px",
                width: "11px",
                backgroundColor: "#fff",
                borderRadius: "50%",
              }}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              aria-label="Slide 1"
            ></button>
            <button
              style={{
                height: "9px",
                width: "11px",
                backgroundColor: "#fff",
                borderRadius: "50%",
              }}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              className="active"
              aria-current="true"
              aria-label="Slide 2"
            ></button>
            <button
              style={{
                height: "9px",
                width: "11px",
                backgroundColor: "#fff",
                borderRadius: "50%",
              }}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div
            className="carousel-inner slotbooking-carousel"
            style={{ width: "570px" }}
          >
            <div className="carousel-item slotbooking-carouselimg">
              <img
                src="https://i.ibb.co/GR0RH5x/20240227-203542-1.jpg"
                alt=""
                className="slotbooking-carouselimg"
              />
            </div>
            <div className="carousel-item active slotbooking-carouselimg">
              <img
                src="https://i.ibb.co/GR0RH5x/20240227-203542-1.jpg"
                alt=""
                className="slotbooking-carouselimg"
              />
            </div>
            <div className="carousel-item slotbooking-carouselimg">
              <img
                src="https://i.ibb.co/GR0RH5x/20240227-203542-1.jpg"
                alt=""
                className="slotbooking-carouselimg"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              style={{ fontSize: "28px" }}
              className="bi bi-arrow-left-circle"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next salondetailspage-nextarrow"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              style={{ fontSize: "28px" }}
              className="bi bi-arrow-right-circle"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="saloon-header-container">
          <div className="saloon-data-container">
            <div>
              <div className="pb-2 mb-4 salon-link-pages">
                <Link to="/saloon">
                  <span
                    style={{
                      color: "white",
                      fontFamily: "Poppins",
                      fontSize: "20px",
                      fontWeight: 300,
                    }}
                  >
                    salons
                  </span>
                </Link>
                <span>
                  <i
                    style={{ color: "white" }}
                    className="bi bi-chevron-right"
                  ></i>
                </span>
                <span
                  style={{
                    color: "white",
                    fontFamily: "Poppins",
                    fontSize: "20px",
                    fontWeight: 500,
                  }}
                >
                  {" "}
                  saloon details
                </span>
              </div>
              <h1
                className="salon-detailed-name"
                style={{
                  color: "white",
                  fontFamily: "Avegas Royale",
                  fontWeight: 700,
                  fontSize: "40px",
                }}
              >
                {salon_name}
              </h1>
              <h3
                className="salon-detailed-adress"
                style={{
                  color: "white",
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  fontSize: "22px",
                }}
              >
                {salon_address}{" "}
                <span
                  className="salon-detailed-map"
                  style={{
                    color: "gold",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "22px",
                  }}
                >
                  view in map
                </span>
              </h3>
            </div>
            <div className="saloon-rating">
              <span style={{ color: "white" }}>(42)</span>
              <span className="saloon-rating-stars">
                <i style={{ color: "white" }} className="bi bi-star-fill"></i>
                <i style={{ color: "white" }} className="bi bi-star-fill"></i>
                <i style={{ color: "white" }} className="bi bi-star-fill"></i>
                <i style={{ color: "white" }} className="bi bi-star-fill"></i>
                <i style={{ color: "white" }} className="bi bi-star-half"></i>
              </span>
            </div>
          </div>
          <div></div>
          <div>
            <p
              className="saloon-paragraph"
              style={{
                color: "white",
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "18px",
              }}
            >
              {salon_description}
            </p>
          </div>
          <div>
            <div className="icon-container">
              <div
                className="salon-details-features"
                style={{ display: "flex", flexDirection: "row" }}
              >
                {feature_Ac && (
                  <div className="col">
                    <i
                      style={{ color: "white", fontSize: "60px" }}
                      className="bi bi-pc-horizontal"
                    ></i>
                    <p
                      style={{
                        color: "white",
                        fontFamily: "Poppins",
                        fontWeight: 400,
                        fontSize: "16px",
                      }}
                    >
                      AC available
                    </p>
                  </div>
                )}
                {feature_wifi && (
                  <div className="col">
                    <i
                      style={{ color: "white", fontSize: "60px" }}
                      className="bi bi-wifi"
                    ></i>
                    <p
                      style={{
                        color: "white",
                        fontFamily: "Poppins",
                        fontWeight: 400,
                        fontSize: "16px",
                      }}
                    >
                      Free wifi
                    </p>
                  </div>
                )}
                {feature_parking && (
                  <div className="col">
                    <i
                      style={{ color: "white", fontSize: "60px" }}
                      className="bi bi-p-square"
                    ></i>
                    <p
                      style={{
                        color: "white",
                        fontFamily: "Poppins",
                        fontWeight: 400,
                        fontSize: "16px",
                      }}
                    >
                      Bikes and Car parking
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <hr
            className="salonedetailspage"
            style={{ color: "white", width: "600px" }}
          />
          <div className="booking-purpse-container">
            <div className="salondetailspage-treatment">
              <h3
                style={{
                  color: "white",
                  paddingTop: "20px",
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  fontSize: "20px",
                }}
              >
                Treatment
              </h3>
              <div className="app">
                <div className="dropdown">
                  <div className="dropdown-header" onClick={toggleDropdown}>
                    Select a treatment
                    <span
                      className={`arrow ${
                        isDropdownOpen ? "up" : "salondetailspage-down"
                      }`}
                    ></span>
                  </div>

                  {isDropdownOpen && (
                    <div className="dropdown-content">
                      {salon_features
                        ? salon_services.map((data, index) => (
                            <div className="dropdown-item">
                              <label style={{ color: "white" }}>
                                <input
                                  type="checkbox"
                                  checked={selectedTreatments.includes(
                                    data.service_name
                                  )}
                                  onChange={(e) =>
                                    handleCheckboxChange(e, data.service_name)
                                  }
                                />{" "}
                                {data.service_name}
                                <span>{data.service_original_price}</span>
                              </label>
                            </div>
                          ))
                        : ""}
                    </div>
                  )}
                </div>
              </div>

              {/*       <select className="select-treatment" name="" id="" onChange={(e) =>setservice(e.target.value)}>
                            <option style={{ fontFamily: "Poppins", fontWeight: 400, fontSize: "16px" }} value="" >Select a service</option>
                                {
                                  salon_features?salon_services.map(data =>
                                        <option  style={{ fontFamily: "Poppins", fontWeight: 400, fontSize: "16px" }} value={data.service_name}>
                                          
                                            <input type="checkbox"  />  {data.service_name} 
                                       
                                        </option>
                                    ):""
                                }
                              
                            </select>   */}
              {/* <option style={{ fontFamily: "Poppins", fontWeight: 400, fontSize: "16px" }} value="" disabled selected>Select Treatment</option>
                                <option style={{ fontFamily: "Poppins", fontWeight: 400, fontSize: "16px" }} value="">Hair cutting</option>
                                <option style={{ fontFamily: "Poppins", fontWeight: 400, fontSize: "16px" }} value="">Spa</option>
                            <option style={{ fontFamily: "Poppins", fontWeight: 400, fontSize: "16px" }} value="">Body massage</option> */}
            </div>
            <div className="booking-persons">
              <h3
                style={{
                  color: "white",
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  fontSize: "20px",
                }}
              >
                Booking For :
              </h3>
              <select
                style={{
                  color: "white",
                  backgroundColor: "black",
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  fontSize: "16px",
                }}
                className="selecting-persons"
                name=""
                id=""
              >
                <option disabled selected value="">
                  Select persons
                </option>
                <option
                  style={{
                    color: "white",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "16px",
                  }}
                  value=""
                >
                  1 person
                </option>
                <option
                  style={{
                    color: "white",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "16px",
                  }}
                  value=""
                >
                  2 person
                </option>
                <option
                  style={{
                    color: "white",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "16px",
                  }}
                  value=""
                >
                  3 person
                </option>
                <option
                  style={{
                    color: "white",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "16px",
                  }}
                  value=""
                >
                  4 persons
                </option>
              </select>
            </div>
          </div>
          <div>
            <div>{/* <ReactDatePicker /> */}</div>
          </div>
          <div className="book-btn">
            <button className="book-slot" onClick={() => handleslotbooking()}>
              Book Time Slot
            </button>
            {/*  <Link to="/booking" >
                            <button className="book-slot">Book Time Slot</button>
                        </Link> */}
          </div>
          <hr
            className="salonedetailspage"
            style={{ color: "gold", width: "600px" }}
          />
          <div className="review-container">
            <div>
              <h1
                className="salondetailspage-review"
                style={{
                  color: "white",
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  fontSize: "35px",
                }}
              >
                Reviews
              </h1>
              <Rating
                count={5}
                size="40"
                value={rating}
                onChange={(newRating) => handleRatingChange(newRating)}
              />
            </div>
            <div>
              <button className="review-butoon" onClick={sweeetalert}>
                Write a review{" "}
              </button>
            </div>
          </div>
          <div
            className="salonsdetailedpage-review"
            style={{
              color: "white",
              width: "600px",
              height: "113px",
              backgroundColor: "#222222",
            }}
          >
            <h6 style={{ marginLeft: "50px", paddingTop: "20px" }}>Suresh</h6>
            <div style={{ marginLeft: "50px" }}>Stars</div>
            <div style={{ marginLeft: "50px" }}>
              Services are very good hover the behaviour of dresses are little
              bit rude
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalonMainPage;
