import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import account_landscape_img from "../images/account_page_img_landscape.jpg";
import account_portrait_img from "../images/account_page_img_portrait.png";
import Footer from "../Footer";
import "../css/HomeService.css";
import DatePicker from "react-datepicker";
import { HomeServiceAppointAPI } from "../../api/Home_service";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function HomeServiceForm() {
  const [city, setCity] = useState(null);
  const [category, setCategory] = useState("all");
  const [service, setService] = useState([]);
  const [date, setDate] = useState(new Date());
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [suggesstions, setSuggesstions] = useState("");
  const timeSlotsArray = [
    { slot_time: "9:00 AM" },
    { slot_time: "10:00 AM" },
    { slot_time: "11:00 AM" },
    { slot_time: "12:00 AM" },
    { slot_time: "1:00 PM" },
    { slot_time: "2:00 PM" },
    { slot_time: "3:00 PM" },
    { slot_time: "4:00 PM" },
    { slot_time: "5:00 PM" },
    { slot_time: "6:00 PM" },
  ];
  const [timeSlot, setTimeSlot] = useState(timeSlotsArray[0].slot_time);
  // const [date, setDate] = useState(new Date());

  const total_service_types = 7;
  function selectDate(selectedDate) {
    if (
      selectedDate >= new Date() ||
      selectedDate.toLocaleDateString("en-In") ===
        new Date().toLocaleDateString("en-IN")
    ) {
      setDate(selectedDate);
    }
  }
  const screenSize = window.innerWidth;
  async function submit() {
    const userDetails = {
      appointmentDate: date.toLocaleDateString("en-In"),
      fullName: fullName,
      mobileNumber: phone,
      fullAddress: address,
      suggestions: suggesstions,
      appointmentTime: timeSlot,
    };
    const totalPrice = 1000;
    const response = await HomeServiceAppointAPI(
      userDetails,
      category,
      service,
      totalPrice
    );
    if (response.code === 201) {
      console.log("success", response.data);
       toast.success("Your credentials have been received. We’ll get in touch with you shortly.", {
              theme: "colored"
            })
    } else {
      console.log(response.message);
       toast.error("Details entered in not acceptable. Please fill in correct information", {
              theme: "colored"
            })
    }
  }
  return (
    <div className="home-service-form-page">
       <ToastContainer />
      <div
        className="home-service-form-img-container"
        style={{ position: "relative" }}
      >
        <h2 className="home-service-form-title">Home Salon Services</h2>
        <picture className="acoount-page-picture">
          <source media="(min-width: 650px)" srcSet={account_landscape_img} />
          <img
            src={account_portrait_img}
            alt="groomer"
            className="account-page-img"
          />
        </picture>
      </div>
      <div>
        <form className="home-service-form-salon">
          <h3>Salon Details</h3>
          {/* city */}
          <div className="salon-form-element ">
            <label>Choose city</label>
            <div
              className="salon-form-city-main"
              onClick={() => {
                setCity(null);
                let element = document.getElementById(
                  "salon-form-city-dropdown"
                );
                let chevron = document.getElementById("chevron-city");
                if (element.style.height !== "250px") {
                  chevron.style.transform = "rotate(180deg)";
                  element.style.height = "250px";
                  element.style.overflow = "auto";
                  element.scrollTo(0, 0, "instant");
                } else {
                  chevron.style.transform = "rotate(0deg)";
                  element.style.overflow = "hidden";
                  element.style.height = "0px";
                }
              }}
            >
              <p style={{ margin: "0" }}>{city ? city : "Select city"}</p>
              <span
                id="chevron-city"
                className="chevron"
                style={{ display: "flex" }}
              >
                <FiChevronDown />
              </span>
            </div>
            <div
              className="salon-form-city-dropdown"
              id="salon-form-city-dropdown"
            >
              {[
                "Hyderabad",
                "Chennai",
                "Bangalore",
                "Mumbai",
                "Kolkata",
                "Pune",
                "Delhi",
              ].map((city) => {
                return (
                  <p
                    key={city}
                    onClick={() => {
                      setCity(city);
                      let element = document.getElementById(
                        "salon-form-city-dropdown"
                      );
                      let chevron = document.getElementById("chevron-city");
                      chevron.style.transform = "rotate(0deg)";
                      element.style.overflow = "hidden";
                      element.style.height = "0px";
                    }}
                  >
                    {city}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Category */}
          <div className="salon-form-element">
            <label>For whom are you booking?</label>
            <div className="salon-form-catogory">
              <div className="salon-form-category-element">
                <input
                  id="salon-form-category-men"
                  style={{ cursor: "pointer" }}
                  checked={category === "men"}
                  onChange={() => {
                    setCategory("men");
                  }}
                  value="men"
                  name="category"
                  type="radio"
                  className="radio-button"
                />
                <label
                  htmlFor="salon-form-category-men"
                  style={{ cursor: "pointer" }}
                >
                  Men
                </label>
              </div>
              <div className="salon-form-category-element">
                <input
                  id="salon-form-category-women"
                  style={{ cursor: "pointer" }}
                  checked={category === "women"}
                  onChange={() => {
                    setCategory("women");
                  }}
                  value="women"
                  name="category"
                  type="radio"
                  className="radio-button"
                />
                <label
                  htmlFor="salon-form-category-women"
                  style={{ cursor: "pointer" }}
                >
                  Women
                </label>
              </div>
              <div className="salon-form-category-element">
                <input
                  id="salon-form-category-both"
                  style={{ cursor: "pointer" }}
                  checked={category === "both"}
                  onChange={() => {
                    setCategory("both");
                  }}
                  value="both"
                  name="category"
                  type="radio"
                  className="radio-button"
                />
                <label
                  htmlFor="salon-form-category-both"
                  style={{ cursor: "pointer" }}
                >
                  Both
                </label>
              </div>
              <div className="salon-form-category-element">
                <input
                  id="salon-form-category-kids"
                  style={{ cursor: "pointer" }}
                  checked={category === "kids"}
                  onChange={() => {
                    setCategory("kids");
                  }}
                  value="kids"
                  name="category"
                  type="radio"
                  className="radio-button"
                />
                <label
                  htmlFor="salon-form-category-kids"
                  style={{ cursor: "pointer" }}
                >
                  Kids
                </label>
              </div>
              <div className="salon-form-category-element">
                <input
                  id="salon-form-category-all"
                  style={{ cursor: "pointer" }}
                  checked={category === "all"}
                  onChange={() => {
                    setCategory("all");
                  }}
                  value="all"
                  name="category"
                  type="radio"
                  className="radio-button"
                />
                <label
                  htmlFor="salon-form-category-all"
                  style={{ cursor: "pointer" }}
                >
                  All
                </label>
              </div>
            </div>
          </div>

          {/* Service */}
          <div className="salon-form-element">
            <label>Select the services</label>

            <div
              className="salon-form-service-main"
              onClick={() => {
                let element = document.getElementById(
                  "salon-form-service-dropdown"
                );
                let chevron = document.getElementById(
                  "salon-form-chevron-service"
                );
                if (element.style.height !== "250px") {
                  chevron.style.transform = "rotate(180deg)";
                  element.style.height = "250px";
                  element.style.overflow = "auto";
                } else {
                  chevron.style.transform = "rotate(0deg)";
                  element.style.overflow = "hidden";
                  element.style.height = "0px";
                }
              }}
            >
              <p className="form-element-title">Service</p>
              <span style={{ display: "flex" }}>
                <FiChevronDown
                  id="salon-form-chevron-service"
                  className="chevron"
                />
              </span>
            </div>

            <div
              className="salon-form-service-dropdown"
              id="salon-form-service-dropdown"
            >
              <div>
                <input
                  className="checkbox"
                  type="checkbox"
                  name="service"
                  value="All"
                  checked={service.length === total_service_types}
                  onChange={(event) => {
                    if (service.length !== total_service_types)
                      setService([
                        "hair cut",
                        "shaving",
                        "massage",
                        "face painting",
                        "facial",
                        "manicure",
                        "pedicure",
                      ]);
                    else setService([]);
                  }}
                />
                <label>All</label>
              </div>
              <div>
                <input
                  className="checkbox"
                  type="checkbox"
                  name="service"
                  value="face painting"
                  checked={service.indexOf("face painting") !== -1}
                  onChange={(event) => {
                    setService((prevService) => {
                      let newService = [...prevService];
                      if (service.indexOf("face painting") === -1) {
                        newService.push("face painting");
                        return newService;
                      } else {
                        newService.splice(service.indexOf("face painting"), 1);
                        return newService;
                      }
                    });
                  }}
                />
                <label>Face painting</label>
              </div>
              <div>
                <input
                  className="checkbox"
                  type="checkbox"
                  name="service"
                  value="facial"
                  checked={service.indexOf("facial") !== -1}
                  onChange={(event) => {
                    setService((prevService) => {
                      let newService = [...prevService];
                      if (service.indexOf("facial") === -1) {
                        newService.push("facial");
                        return newService;
                      } else {
                        newService.splice(service.indexOf("facial"), 1);
                        return newService;
                      }
                    });
                  }}
                />
                <label>Facial</label>
              </div>
              <div>
                <input
                  className="checkbox"
                  type="checkbox"
                  name="service"
                  value="hair cut"
                  checked={service.indexOf("hair cut") !== -1}
                  onChange={(event) => {
                    setService((prevService) => {
                      let newService = [...prevService];
                      if (service.indexOf("hair cut") === -1) {
                        newService.push("hair cut");
                        return newService;
                      } else {
                        newService.splice(service.indexOf("hair cut"), 1);
                        return newService;
                      }
                    });
                  }}
                />
                <label>Haircut</label>
              </div>
              <div>
                <input
                  className="checkbox"
                  type="checkbox"
                  name="service"
                  value="manicure"
                  checked={service.indexOf("manicure") !== -1}
                  onChange={(event) => {
                    setService((prevService) => {
                      let newService = [...prevService];
                      if (service.indexOf("manicure") === -1) {
                        newService.push("manicure");
                        return newService;
                      } else {
                        newService.splice(service.indexOf("manicure"), 1);
                        return newService;
                      }
                    });
                  }}
                />
                <label>Manicure</label>
              </div>
              <div>
                <input
                  className="checkbox"
                  type="checkbox"
                  name="service"
                  value="pedicure"
                  checked={service.indexOf("pedicure") !== -1}
                  onChange={(event) => {
                    setService((prevService) => {
                      let newService = [...prevService];
                      if (service.indexOf("pedicure") === -1) {
                        newService.push("pedicure");
                        return newService;
                      } else {
                        newService.splice(service.indexOf("pedicure"), 1);
                        return newService;
                      }
                    });
                  }}
                />
                <label>Pedicure</label>
              </div>
              <div>
                <input
                  className="checkbox"
                  type="checkbox"
                  name="service"
                  value="shaving"
                  checked={service.indexOf("shaving") !== -1}
                  onChange={(event) => {
                    setService((prevService) => {
                      let newService = [...prevService];
                      if (service.indexOf("shaving") === -1) {
                        newService.push("shaving");
                        return newService;
                      } else {
                        newService.splice(service.indexOf("shaving"), 1);
                        return newService;
                      }
                    });
                  }}
                />
                <label>Shaving</label>
              </div>
              <div>
                <input
                  className="checkbox"
                  type="checkbox"
                  name="service"
                  value="massage"
                  checked={service.indexOf("massage") !== -1}
                  onChange={(event) => {
                    setService((prevService) => {
                      let newService = [...prevService];
                      if (service.indexOf("massage") === -1) {
                        newService.push("massage");
                        return newService;
                      } else {
                        newService.splice(service.indexOf("massage"), 1);
                        return newService;
                      }
                    });
                  }}
                />
                <label>Massage</label>
              </div>
            </div>
          </div>
          <div className="salon-form-service-list">
            {service.length > 0 ? (
              service.map((service, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      color: "white",
                      border: "1px solid #ccbb8e",
                      padding: "  0.25em 0.5em",
                      display: "flex",
                      flexWrap: "nowrap",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <span style={{ whiteSpace: "nowrap" }}>{service}</span>
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        setService((prevService) => {
                          let newService = [...prevService];
                          newService.splice(service.indexOf(service), 1);
                          return newService;
                        });
                      }}
                      style={{
                        backgroundColor: "black",
                        border: "none",
                        display: "flex",
                        cursor: "pointer",
                      }}
                    >
                      <svg
                        width="11"
                        height="13"
                        viewBox="0 0 11 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1.01407"
                          y="2.36969"
                          width="8.97185"
                          height="1.71259"
                          stroke="#CCBB8E"
                          strokeWidth="0.88"
                        />
                        <rect
                          x="0.22"
                          y="-0.22"
                          width="3.18963"
                          height="0.44"
                          transform="matrix(1 0 0 -1 3.68518 0.452578)"
                          stroke="#CCBB8E"
                          strokeWidth="0.44"
                        />
                        <rect
                          x="2.05118"
                          y="4.0943"
                          width="6.89778"
                          height="8.45333"
                          stroke="#CCBB8E"
                          strokeWidth="0.88"
                        />
                      </svg>
                    </button>
                  </div>
                );
              })
            ) : (
              <p style={{ margin: "none" }}>No service selected</p>
            )}
          </div>
          <div className="salon-form-element" style={{ paddingInline: "0px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                paddingInline: "30px",
              }}
            >
              <label>Select time slot</label>
              <button
                className="salon-form-data-time-btn"
                onClick={(event) => {
                  event.preventDefault();
                  let element = document.getElementById(
                    "salon-form-calender-timeslots"
                  );
                  let height = screenSize > 450 ? "300px" : "600px";
                  if (element.style.height !== height) {
                    element.style.height = height;
                  } else {
                    element.style.height = "0px";
                  }
                }}
              >
                Date & time
              </button>
            </div>
            <div
              className="salon-form-calender-timeslots"
              id="salon-form-calender-timeslots"
            >
              <DatePicker
                selected={date}
                onChange={(selectedDate) => {
                  selectDate(selectedDate);
                }}
                inline
              />
              <div
                style={{
                  display: "flex",
                  flexGrow: "1",
                  flexDirection: "column",
                  gap: "5px",
                  height: "100%",
                  overflow: "auto",
                }}
              >
                {timeSlotsArray.map((slot) => {
                  return (
                    <button
                      key={slot.slot_uuid}
                      value={slot.slot_time}
                      className={`salon-page-time-slot-btn button-two ${
                        timeSlot === slot.slot_time ? "selected-timeslot" : ""
                      }`}
                      onClick={(event) => {
                        event.preventDefault();
                        setTimeSlot(slot.slot_time);
                      }}
                    >
                      {slot.slot_time}
                    </button>
                  );
                })}
              </div>
            </div>
            <div>
              <p>{date.toLocaleDateString("en-In")}</p>
              <p>{timeSlot}</p>
            </div>
          </div>
        </form>
      </div>
      <hr
        style={{
          border: "none",
          backgroundColor: "#bbcc8e",
          height: "1px",
          width: "80%",
          marginBlock: "3rem",
        }}
      />
      <div>
        <form className="home-service-form-customer">
          <h3 style={{ textAlign: "center" }}>Customer </h3>
          <div className="customer-form-element">
            <label>Full Name</label>
            <input
              type="text"
              className="text-input"
              value={fullName}
              onChange={(event) => {
                setFullName(event.target.value);
              }}
            />
          </div>
          <div className="customer-form-element">
            <label>Contact Number</label>
            <input
              type="text"
              className="text-input"
              value={phone}
              onChange={(event) => {
                if (
                  !isNaN(event.target.value) &&
                  event.target.value.length <= 10
                ) {
                  setPhone(event.target.value);
                }
              }}
            />
          </div>
          <div className="customer-form-element">
            <label>Address</label>
            <textarea
              className="textarea"
              rows={5}
              value={address}
              onChange={(event) => {
                setAddress(event.target.value);
              }}
            />
          </div>
          <div className="customer-form-element">
            <label>Suggestions</label>
            <textarea
              className="textarea"
              rows={5}
              value={suggesstions}
              onChange={(event) => {
                setSuggesstions(event.target.value);
              }}
            />
          </div>
          <button
            className="button-one"
            style={{ alignSelf: "center" }}
            onClick={(event) => {
              event.preventDefault();
              submit();
            }}
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
export default HomeServiceForm;
