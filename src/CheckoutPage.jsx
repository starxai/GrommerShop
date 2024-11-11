import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/HomePage/NavbarComponent";
function PaymentPage() {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      {/* <br /> */}

      <div className="checkout-page-container">
        <div class="container-fluid">
          <div class="row flex-nowrap">
            <div class="col-auto col-md-5 col-xl-5 px-sm-9 px-5 ">
              <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a
                  href="/"
                  class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
                ></a>
                <ul
                  class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                  id="menu"
                >
                  <div style={{ boxSizing: "border-box", paddingLeft: "20px" }}>
                    <div className="salons-checkoutpage-header">
                      <Link to="/saloon">
                        <span
                          style={{
                            color: "white",
                            fontSize: "10px",
                            width: "30px",
                            height: "14px",
                          }}
                        >
                          salons{" "}
                        </span>
                      </Link>
                      <span>
                        <i
                          style={{ color: "white", fontSize: "10px" }}
                          class="bi bi-chevron-right"
                        ></i>
                      </span>
                      <Link to="/Details">
                        <span style={{ color: "white", fontSize: "10px" }}>
                          {" "}
                          saloon details
                        </span>
                      </Link>
                      <span>
                        <i
                          style={{ color: "white" }}
                          class="bi bi-chevron-right"
                        ></i>
                      </span>
                      <Link to="/booking">
                        <span style={{ color: "white", fontSize: "10px" }}>
                          {" "}
                          date&time
                        </span>
                      </Link>
                      <span>
                        <i
                          style={{ color: "white" }}
                          class="bi bi-chevron-right"
                        ></i>
                      </span>
                      <span style={{ color: "white", fontSize: "10px" }}>
                        {" "}
                        checkout
                      </span>
                    </div>

                    <div className="payment-details">
                      <h1 style={{ fontSize: "24px" }}>Payment details</h1>
                    </div>

                    <div className="price-positions">
                      <h5 className="price-data-content">Haircut </h5>
                      <h5 className="price-detail-content">₹200</h5>
                    </div>

                    <div className="price-positions">
                      <h5 className="price-data-content">Haircut wash </h5>
                      <h5 className="price-detail-content">₹180</h5>
                    </div>
                    <div className="price-positions">
                      <h5 className="price-data-content">
                        Combo service: massage + facial{" "}
                      </h5>
                      <h5 className="price-detail-content">₹600</h5>
                    </div>
                    <div className="price-positions">
                      <h5 className="price-data-content">GST (18%) </h5>
                      <h5 className="price-detail-content">₹126</h5>
                    </div>

                    <div className="position-data">
                      <hr style={{ color: "gold" }} />
                    </div>

                    <div className="price-positions">
                      <h5 className="price-data-content">Total </h5>
                      <h5 className="price-detail-content">₹826</h5>
                    </div>

                    <div className="position-data">
                      <hr style={{ color: "gold" }} />
                    </div>

                    <h1
                      className=" saloncheckoutpage-payment"
                      style={{ fontSize: "16px" }}
                    >
                      Payment Method
                    </h1>

                    <div className="position-data salondetailpagecards">
                      <input
                        type="radio"
                        id="radio3"
                        name="radios"
                        value="option3"
                      />
                      <label for="radio3" style={{ fontSize: "14px" }}>
                        {" "}
                        credit/debitcard
                      </label>
                      <br></br>
                    </div>

                    <div className="checkout-inputs">
                      <>
                        <div>
                          <h3 className="fontsize saloncheckout-cardnumber">
                            card Number
                          </h3>
                          <input
                            placeholder="Please enter your card number"
                            className="payment-card-input"
                            type="text"
                          />
                        </div>

                        <div>
                          <h3 className="fontsize saloncheckout-date">
                            Expiration Date
                          </h3>
                          <input
                            placeholder="Please enter the date of expiration"
                            className="payment-expire-input saloncheckout-dateinput"
                            type="text"
                          />
                        </div>
                      </>
                    </div>

                    <div className="checkout-second-inputs">
                      <>
                        <div>
                          <h3 className="fontsize saloncheckout-name">
                            Name of the card holder
                          </h3>
                          <input
                            placeholder="Name of the card holder"
                            className="payment-card-input"
                            type="text"
                          />
                        </div>

                        <div className="saloncheckoutpage-cvv">
                          <h3 className="fontsize saloncheckout-cvvname">
                            cvv
                          </h3>
                          <input
                            className="payment-last-input saloncheckout-cvvinput"
                            placeholder="cvv"
                            type="text"
                          />
                        </div>
                      </>
                    </div>

                    <div className="position-data">
                      <hr style={{ color: "gold" }} />
                    </div>

                    <div className="saloncheckout-upi">
                      <input
                        type="radio"
                        id="radio2"
                        name="radios"
                        value="option2"
                      />
                      <label for="radio2" className="fontsize">
                        Upi
                      </label>
                      <br />
                    </div>

                    <div className="position-data">
                      <hr style={{ color: "gold" }} />
                    </div>

                    <div className="saloncheckout-cash">
                      <input
                        type="radio"
                        id="radio1"
                        name="radios"
                        value="option1"
                      />
                      <label for="radio1" className="fontsize">
                        cash
                      </label>
                      <br />
                    </div>

                    <div className="position-data">
                      <button className="payment-button">pay</button>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
            <div
              class="col py-3 saloncheckout-booking"
              style={{ paddingLeft: "200px", marginTop: "50px" }}
            >
              <div className="checkout-data-handler-container">
                <h1
                  className="saloncheckout-bookingname"
                  style={{ color: "white", fontSize: "24px" }}
                >
                  Booking details
                </h1>

                <div className="position-data">
                  <p
                    className="para-content"
                    style={{ color: "white", fontSize: "14px" }}
                  >
                    salonname
                  </p>
                  <p
                    className="head-content"
                    style={{ color: "white", fontSize: "14px" }}
                  >
                    bounce salon & spa
                  </p>
                </div>

                <div className="position-data">
                  <hr className="saloncheckout-hr" style={{ color: "gold" }} />
                </div>

                <div className="position-data">
                  <h3 style={{ color: "white", fontSize: "16px" }}>
                    Date And Time
                  </h3>

                  <div className="position-data">
                    <h5
                      className="para-content"
                      style={{ color: "white", fontSize: "14px" }}
                    >
                      Date
                    </h5>
                    <h5
                      className="head-content"
                      style={{ color: "white", fontSize: "14px" }}
                    >
                      22nd March,2024
                    </h5>
                  </div>

                  <div className="position-data">
                    <h5
                      className="para-content"
                      style={{ color: "white", fontSize: "14px" }}
                    >
                      Time
                    </h5>
                    <h6
                      className="head-content"
                      style={{ color: "white", fontSize: "14px" }}
                    >
                      11:00 am
                    </h6>
                  </div>
                </div>

                <div className="position-data">
                  <hr className="saloncheckout-hr" style={{ color: "gold" }} />
                </div>

                {/* <hr style={{ color: "gold" }} /> */}

                <div className="position-data">
                  <h3 style={{ color: "white", fontSize: "16px" }}>
                    Service booked
                  </h3>
                  <div className="position-data">
                    <h5 style={{ color: "white", fontSize: "14px" }}>
                      Haircut, Hair wash, Facial
                    </h5>
                  </div>
                </div>

                <div className="position-data saloncheckout-hr">
                  <hr className="saloncheckout-hr" style={{ color: "gold" }} />
                </div>

                <div className="position-data">
                  <h3 style={{ color: "white", fontSize: "16px" }}>Location</h3>
                  <div className="position-data">
                    <h5
                      className="para-content"
                      style={{ color: "white", fontSize: "14px" }}
                    >
                      city
                    </h5>
                    <h5
                      className="head-content"
                      style={{ color: "white", fontSize: "14px" }}
                    >
                      hyderbad
                    </h5>
                  </div>
                </div>

                <div className="position-data">
                  <h5
                    className="address-content"
                    style={{ color: "white", fontSize: "14px" }}
                  >
                    Address
                  </h5>

                  <h5
                    className="adress-right-content"
                    style={{ color: "white", width: "300px", fontSize: "14px" }}
                  >
                    shop no 8-2-686/8/ 6/1a, 1st floor, 12th square building,
                    opp Audi car showroom, road no 12, Banjara hills, Hyderabad,
                    Telangana 500034{" "}
                  </h5>
                </div>

                <div className="location-data">
                  <img
                    className="image-location"
                    width={500}
                    src="https://i.ibb.co/xFtLtn1/image-9.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PaymentPage;
