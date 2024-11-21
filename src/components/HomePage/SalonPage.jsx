import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Carousel from "./Carousel";
import img_1 from "../images/img1.jpg";
import img_2 from "../images/img2.jpg";
import img_3 from "../images/img3.jpg";
import img_4 from "../images/img4.jpg";
import "../css/SalonPage.css";
import { useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

function SalonPage() {
  const location = useLocation();
  const { salon_uuid } = location.state || "";
  const [salonData, setSalonData] = useState(null);
  const [services, setServices] = useState([]);
  const [customerCount, setCustomerCount] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSalonData = async () => {
      try {
        const { data } = await axios(
          `http://localhost:8000/user/salon?uuid=${salon_uuid}`
        );
        setSalonData(data.data.salon);
        console.log(data);
      } catch (error) {}
    };
    fetchSalonData();
  }, [salon_uuid]);
  const images = [img_4, img_1, img_2, img_3, img_4, img_1];
  console.log(services, customerCount);

  function bookTimeSlot() {
    navigate("/booking", {
      state: {
        salonData: {
          salon_name: salonData.salon_name,
          salon_address: salonData.salon_city + ", " + salonData.salon_area,
          salon_uuid: salonData.salon_uuid,
        },
        services,
        customerCount,
      },
    });
  }

  function isChecked(service) {
    let checked = false;
    services.forEach((serObj) => {
      if (service._id === serObj._id) checked = true;
    });
    return checked;
  }
  return (
    <div className="salon-page">
      <div className="salon-page-carousel">
        <Carousel>
          {images.map((img, index) => {
            return (
              <img
                key={index}
                src={img}
                alt="barber"
                className="salon-page-carousel-image"
              />
            );
          })}
        </Carousel>
      </div>
      <div className="salon-details">
        {salonData && (
          <>
            <div className="salon-title-location-rating">
              <div>
                <h2 className="salon-title">{salonData.salon_name}</h2>
                <p className="salon-location">
                  {salonData.salon_area + " " + salonData.salon_city} |{" "}
                  <a
                    href="https://www.google.com/maps"
                    style={{
                      color: "#ccbb8e",
                    }}
                  >
                    view on map
                  </a>
                </p>
              </div>
              <div>
                <p>
                  (46)
                  <svg
                    width="113"
                    height="17"
                    viewBox="0 0 113 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.01807 0.515625L9.89898 5.92677L15.6265 6.04349L11.0614 9.50448L12.7203 14.9878L8.01807 11.7156L3.31578 14.9878L4.97469 9.50448L0.409614 6.04349L6.13715 5.92677L8.01807 0.515625Z"
                      fill="white"
                    />
                    <path
                      d="M32.0181 0.515625L33.899 5.92677L39.6265 6.04349L35.0614 9.50448L36.7203 14.9878L32.0181 11.7156L27.3158 14.9878L28.9747 9.50448L24.4096 6.04349L30.1372 5.92677L32.0181 0.515625Z"
                      fill="white"
                    />
                    <path
                      d="M56.0181 0.515625L57.899 5.92677L63.6265 6.04349L59.0614 9.50448L60.7203 14.9878L56.0181 11.7156L51.3158 14.9878L52.9747 9.50448L48.4096 6.04349L54.1372 5.92677L56.0181 0.515625Z"
                      fill="white"
                    />
                    <path
                      d="M80.0181 0.515625L81.899 5.92677L87.6265 6.04349L83.0614 9.50448L84.7203 14.9878L80.0181 11.7156L75.3158 14.9878L76.9747 9.50448L72.4096 6.04349L78.1372 5.92677L80.0181 0.515625Z"
                      fill="white"
                    />
                    <path
                      d="M104.018 2.03848L105.427 6.09094L105.541 6.41958L105.889 6.42667L110.178 6.51408L106.759 9.10604L106.482 9.31624L106.583 9.64927L107.825 13.7557L104.304 11.3052L104.018 11.1065L103.732 11.3052L100.211 13.7557L101.453 9.64927L101.554 9.31624L101.277 9.10604L97.8579 6.51408L102.147 6.42667L102.495 6.41958L102.609 6.09094L104.018 2.03848Z"
                      stroke="white"
                    />
                    <path
                      d="M99.3149 14.9878L104.017 11.7156V0.515625L102.136 5.92677L96.4087 6.04349L100.974 9.50448L99.3149 14.9878Z"
                      fill="white"
                    />
                  </svg>
                </p>
              </div>
            </div>
            <p className="salon-description">
              Step into our salon oasis where expert stylists await to transform
              your look. From haircuts to coloring, manicures to massages,
              indulge in a full range of beauty services tailored to your needs.
              Experience luxury, rejuvenation, and style under one roof.{" "}
              {salonData.salon_description}
            </p>
            <div className="salon-amenities-list">
              {salonData.salon_features.feature_AC && (
                <span className="salon-amenity">
                  <svg
                    width="43"
                    height="32"
                    viewBox="0 0 43 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1.01074"
                      y="0.5"
                      width="41"
                      height="23"
                      stroke="white"
                    />
                    <rect
                      x="8.01074"
                      y="12.5"
                      width="27"
                      height="11"
                      stroke="white"
                    />
                    <line
                      x1="10.0107"
                      y1="28"
                      x2="10.0107"
                      y2="32"
                      stroke="white"
                    />
                    <line
                      x1="18.0107"
                      y1="28"
                      x2="18.0107"
                      y2="32"
                      stroke="white"
                    />
                    <line
                      x1="26.0107"
                      y1="28"
                      x2="26.0107"
                      y2="32"
                      stroke="white"
                    />
                    <line
                      x1="34.0107"
                      y1="28"
                      x2="34.0107"
                      y2="32"
                      stroke="white"
                    />
                  </svg>
                  <p>AC available</p>
                </span>
              )}
              {salonData.salon_features.feature_wifi && (
                <span className="salon-amenity">
                  <svg
                    width="37"
                    height="23"
                    viewBox="0 0 37 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.14062 7.90309C2.10903 5.87077 4.20615 4.01813 7.1953 2.66354C10.1782 1.31179 13.8464 0.549594 17.6552 0.502336C21.4637 0.45508 25.1862 1.12551 28.2686 2.40359C31.3573 3.68427 33.5958 5.48769 34.7166 7.50336"
                      stroke="white"
                    />
                    <path
                      d="M5.95705 11.7085C6.63678 10.2976 8.11942 8.99328 10.2609 8.0335C12.3957 7.0767 15.0262 6.53522 17.7614 6.50166C20.4964 6.4681 23.1665 6.94446 25.3737 7.84955C27.5874 8.75736 29.1732 10.0287 29.9617 11.431"
                      stroke="white"
                    />
                    <path
                      d="M10.7722 14.5164C11.1621 13.7274 12.0292 12.9703 13.324 12.4045C14.6114 11.842 16.2051 11.5209 17.8676 11.501C19.5299 11.4811 21.1485 11.7637 22.481 12.2964C23.8209 12.8322 24.7533 13.5723 25.2083 14.3614"
                      stroke="white"
                    />
                    <circle cx="18.5317" cy="19.5" r="3" stroke="white" />
                  </svg>

                  <p>Free Wi-Fi</p>
                </span>
              )}
              {salonData.salon_features.feature_parking && (
                <span className="salon-amenity">
                  <svg
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1.05273"
                      y="0.5"
                      width="29"
                      height="30"
                      stroke="white"
                    />
                    <path
                      d="M9.55273 18.1667H16.7194C19.3888 18.1667 21.5527 16.0027 21.5527 13.3333V13.3333C21.5527 10.664 19.3888 8.5 16.7194 8.5H9.55273V18.1667ZM9.55273 18.1667V22.5"
                      stroke="white"
                    />
                  </svg>

                  <p>Bike and car parking</p>
                </span>
              )}
              {salonData.salon_languages && (
                <span className="salon-amenity">
                  <svg
                    width="35"
                    height="32"
                    viewBox="0 0 35 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.7734 12.4H24.9734M30.1734 12.4H27.5734M24.9734 12.4V10M24.9734 12.4H27.5734M27.5734 12.4C27.5068 14.2667 25.8534 18.72 19.7734 21.6M28.1734 21.6C26.8401 21.0667 23.5334 19.12 20.9734 15.6"
                      stroke="white"
                    />
                    <path
                      d="M6.77344 17L7.98723 11.8M13.1734 17L11.9596 11.8M11.9596 11.8L10.3734 5H9.57344L7.98723 11.8M11.9596 11.8H7.98723"
                      stroke="white"
                    />
                    <path
                      d="M10.407 26.0598L6.07344 30.7267V26.4V25.9H5.57344H1.27344V0.5H33.8734V25.9H10.7734H10.5554L10.407 26.0598Z"
                      stroke="white"
                    />
                  </svg>

                  <p>
                    {[
                      salonData.salon_languages.language_hindi && "Hindi ",
                      salonData.salon_languages.language_english && "English ",
                      salonData.salon_languages.language_telugu && "Telugu ",
                    ]}
                  </p>
                </span>
              )}
            </div>
            <hr></hr>
            <form className="salon-page-form">
              <div className="salon-form-field-container">
                <div>
                  <h4 style={{ fontWeight: "normal" }}>Service</h4>
                  <div
                    className="salon-form-field"
                    onClick={() => {
                      let element = document.getElementById(
                        "salon-form-services"
                      );
                      let chevron = document.getElementById(
                        "salon-form-chevron-services"
                      );
                      if (element.style.height !== "150px") {
                        chevron.style.transform = "rotate(180deg)";
                        element.style.height = "150px";
                      } else {
                        chevron.style.transform = "rotate(0deg)";
                        element.style.height = "0px";
                      }
                    }}
                  >
                    <p>Select service</p>
                    <span style={{ display: "flex" }}>
                      <FiChevronDown
                        id="salon-form-chevron-services"
                        className="chevron"
                      />
                    </span>
                  </div>
                  <div className="salon-form-filter" id="salon-form-services">
                    {salonData.salon_services.map((service, index) => {
                      return (
                        <div>
                          <input
                            className="checkbox"
                            type="checkbox"
                            name="service"
                            value={index}
                            checked={isChecked(service)}
                            onChange={(event) => {
                              console.log("event", event.target.value);

                              setServices((prevService) => {
                                let service_exists = false;
                                let newService = [...prevService];
                                prevService.forEach((serObj, index) => {
                                  if (
                                    salonData.salon_services[event.target.value]
                                      ._id === serObj._id
                                  ) {
                                    service_exists = true;
                                    newService.splice(index, 1);
                                  }
                                });
                                if (!service_exists) {
                                  newService.push(
                                    salonData.salon_services[event.target.value]
                                  );
                                }
                                return newService;
                              });
                            }}
                          />
                          <label
                            style={{
                              flexGrow: "1",
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            {service.service_name}
                            <span>₹ {service.service_original_price}</span>
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <h4 style={{ fontWeight: "normal" }}>Booking for</h4>
                  <div
                    className="salon-form-field"
                    onClick={() => {
                      let element = document.getElementById(
                        "salon-form-customerCount"
                      );
                      let chevron = document.getElementById(
                        "chevron-customerCount"
                      );
                      if (element.style.height !== "200px") {
                        chevron.style.transform = "rotate(180deg)";
                        element.style.height = "200px";
                      } else {
                        chevron.style.transform = "rotate(0deg)";
                        element.style.height = "0px";
                      }
                    }}
                  >
                    <p>{customerCount} persons</p>
                    <span style={{ display: "flex" }}>
                      <FiChevronDown
                        id="chevron-customerCount"
                        className="chevron"
                      />
                    </span>
                  </div>
                  <div
                    className="salon-form-filter"
                    id="salon-form-customerCount"
                  >
                    {[1, 2, 3, 4].map((personCount) => {
                      return (
                        <div>
                          <input
                            className="radio-button"
                            type="radio"
                            name="customerCount"
                            value={personCount}
                            onChange={(event) => {
                              setCustomerCount(event.target.value);
                            }}
                          />
                          <label>{personCount} persons</label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <button
                className="button-one salon-form-btn"
                onClick={(event) => {
                  event.preventDefault();
                  if (services.length > 0) bookTimeSlot();
                }}
              >
                Book Time Slot
              </button>
            </form>
            <hr></hr>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3 style={{ fontWeight: "normal" }}>Reviews</h3>
              <button className="button-two salon-page-review-btn">
                Write a review
              </button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                paddingBlock: "20px",
              }}
            >
              {[
                {
                  user: "Suri Babu",
                  review:
                    "Service was very good however the behavior of the dresser was a bit rude.",
                },
                {
                  user: "Appal Rao",
                  review:
                    "The interior was very nice. Excellent service and hosting. Would definitely recommend.",
                },
              ].map((reviewObj, index) => {
                return (
                  <div
                    key={reviewObj.user + index}
                    className="salon-page-reviews"
                    style={{ backgroundColor: "#222222", padding: "1em 1.5em" }}
                  >
                    <div style={{ display: "flex", gap: "20px" }}>
                      <span
                        style={{
                          borderRadius: "50%",
                          backgroundColor: "#5b5441",
                          padding: "0.5em 1.1em",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {reviewObj.user[0]}
                      </span>
                      <div>
                        <p style={{ margin: "0" }}>{reviewObj.user}</p>
                        <svg
                          width="112"
                          height="17"
                          viewBox="0 0 112 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 0.0380859L9.88091 5.44923L15.6085 5.56595L11.0434 9.02694L12.7023 14.5102L8 11.2381L3.29772 14.5102L4.95662 9.02694L0.391548 5.56595L6.11909 5.44923L8 0.0380859Z"
                            fill="white"
                          />
                          <path
                            d="M32 0.0380859L33.8809 5.44923L39.6085 5.56595L35.0434 9.02694L36.7023 14.5102L32 11.2381L27.2977 14.5102L28.9566 9.02694L24.3915 5.56595L30.1191 5.44923L32 0.0380859Z"
                            fill="white"
                          />
                          <path
                            d="M56 0.0380859L57.8809 5.44923L63.6085 5.56595L59.0434 9.02694L60.7023 14.5102L56 11.2381L51.2977 14.5102L52.9566 9.02694L48.3915 5.56595L54.1191 5.44923L56 0.0380859Z"
                            fill="white"
                          />
                          <path
                            d="M80 0.0380859L81.8809 5.44923L87.6085 5.56595L83.0434 9.02694L84.7023 14.5102L80 11.2381L75.2977 14.5102L76.9566 9.02694L72.3915 5.56595L78.1191 5.44923L80 0.0380859Z"
                            fill="white"
                          />
                          <path
                            d="M104 1.56094L105.409 5.6134L105.523 5.94204L105.871 5.94913L110.16 6.03654L106.741 8.6285L106.464 8.83871L106.565 9.17173L107.807 13.2782L104.286 10.8277L104 10.6289L103.714 10.8277L100.193 13.2782L101.435 9.17173L101.536 8.83871L101.259 8.6285L97.8399 6.03654L102.129 5.94913L102.477 5.94204L102.591 5.6134L104 1.56094Z"
                            stroke="white"
                          />
                          <path
                            d="M99.2968 14.5102L103.999 11.2381V0.0380859L102.118 5.44923L96.3906 5.56595L100.956 9.02694L99.2968 14.5102Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                    <p style={{ margin: "0", marginTop: "1em" }}>
                      {reviewObj.review}
                    </p>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default SalonPage;
