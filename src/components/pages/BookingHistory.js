import { FiChevronDown } from "react-icons/fi";
import "../css/BookingHistoryPage.css";
import { dummyBookings } from "./dummyBookingsData.js";
import Footer from "../Footer.jsx";
import { useNavigate } from "react-router-dom";
import { CancelBookingAPI } from "../../api/Booking_service.js";

function BookingHistory() {
  const screenSize = window.innerWidth;
  const navigate = useNavigate();

  function reschedule(appointment) {
    navigate("/booking", {
      state: {
        salonData: {
          salon_name: appointment.appointment_salon_name,
          salon_address: appointment.appointment_salon_address,
          salon_city: appointment.appointment_salon_city,
          salon_area: appointment.appointment_salon_area,
          salon_uuid: appointment.appointment_salon_uuid,
        },
        services: appointment.appointment_services,
        type: "reschedule",
        appointment: {
          appointment_uuid: appointment.appointment_uuid,
        },
      },
    });
  }
  async function cancel_appointment(appId) {
    const { data } = await CancelBookingAPI(appId);
  }
  return (
    <div className="bookingHistory-page">
      <h2 className="bookingHistory-page-title">Booking History</h2>

      {screenSize < 800 ? (
        <div className="bookingHistory-page-mobile">
          <hr
            style={{
              height: "0.5px",
              border: "none",
              backgroundColor: "#ccbb8e",
            }}
          />

          {dummyBookings.map((item, index) => {
            return (
              <div className="appointment-item" key={index}>
                <div
                  className="appointment-item-main"
                  style={{ position: "relative", cursor: "pointer" }}
                  onClick={() => {
                    let element = document.getElementById(
                      String(item.appointment_uuid)
                    );
                    let chevron = document.getElementById(
                      "chevron" + String(item.appointment_uuid)
                    );

                    if (element.style.height !== "370px") {
                      chevron.style.transform = "rotate(180deg)";
                      element.style.height = "370px";
                    } else {
                      chevron.style.transform = "rotate(0deg)";
                      element.style.height = "0px";
                    }
                  }}
                >
                  <p
                    className="appointment-item-salon-name"
                    style={{ fontWeight: "bold", fontSize: "1rem" }}
                  >
                    {item.appointment_salon_name}
                  </p>
                  <div style={{ marginLeft: "-10px" }}>
                    {item.appointment_services.map((service) => {
                      return (
                        <span
                          className="appointment-item-services "
                          style={{
                            backgroundColor: "#222222",
                            marginInline: "10px",
                            padding: "5px",
                          }}
                        >
                          {service.service_name}
                        </span>
                      );
                    })}
                  </div>
                  <p
                    className="appointment-item-price"
                    style={{ fontWeight: "bold" }}
                  >
                    {"₹" + item.appointment_subtotal}
                  </p>
                  <p
                    className="appointment-item-time-data"
                    style={{ color: "#FFFFFFB2" }}
                  >
                    {item.appointment_timing + ", " + item.appointment_date}
                  </p>
                  <span
                    style={{
                      position: "absolute",
                      top: "0px",
                      right: "0",
                      padding: "0.5em 1em",
                      backgroundColor: `${
                        item.appointment_status === "cancelled"
                          ? "#E2A9161A"
                          : item.appointment_status === "pending"
                          ? "#E2A9161A"
                          : "#48B5361A"
                      }`,
                      fontSize: "0.8rem",
                      color: `${
                        item.appointment_status === "cancelled"
                          ? "#BC3B3B"
                          : item.appointment_status === "pending"
                          ? "#E2A916"
                          : "#48B536"
                      }`,
                    }}
                  >
                    {item.appointment_status}
                  </span>
                  <span
                    id={`chevron${item.appointment_uuid}`}
                    style={{
                      position: "absolute",
                      bottom: "0px",
                      right: "0px",
                      display: "flex",
                    }}
                    className="chevron"
                  >
                    <FiChevronDown />
                  </span>
                </div>
                <div
                  className="appointment-hidden-section"
                  id={`${item.appointment_uuid}`}
                >
                  <hr
                    style={{
                      height: "0.5px",
                      border: "none",
                      backgroundColor: "white",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>
                      <span style={{ fontWeight: "bold" }}>Booking ID: </span>
                      <span style={{ color: " #FFFFFFB2" }}>
                        {" " + item.appointment_booking_id}
                      </span>
                    </p>
                    <button
                      style={{
                        backgroundColor: "black",
                        border: "none",
                        textDecoration: "underline",
                      }}
                    >
                      Modify Services
                    </button>
                  </div>
                  <hr
                    style={{
                      height: "0.5px",
                      border: "none",
                      backgroundColor: "white",
                    }}
                  />
                  <p>
                    <span style={{ fontWeight: "bold" }}>
                      {item.appointment_user_full_name + ", "}
                    </span>
                    <span style={{ color: " #FFFFFFB2" }}>
                      {"+91 " + item.appointment_user_phone}
                    </span>
                    <br />
                    <span style={{ color: " #FFFFFFB2" }}>
                      {item.appointment_user_email}
                    </span>
                  </p>
                  <p>
                    <span style={{ fontWeight: "bold" }}>Payment ID:</span>
                    <br />
                    <span style={{ color: " #FFFFFFB2" }}>
                      {item.appointment_payment_id}
                    </span>
                  </p>
                  <p>
                    <span style={{ fontWeight: "bold" }}>Method:</span>
                    <br />
                    <span style={{ color: " #FFFFFFB2" }}>
                      {item.appointment_payment_method}
                    </span>
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "30px",
                    }}
                  >
                    <button
                      className="cancel-btn-booking-history"
                      onClick={() => {
                        cancel_appointment(item.appointment_uuid);
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      className="button-one"
                      onClick={() => {
                        reschedule(item);
                      }}
                    >
                      Reschedule
                    </button>
                  </div>

                  <button
                    style={{
                      backgroundColor: "black",
                      border: "none",
                      textDecoration: "underline",
                      marginTop: "5px",
                    }}
                  >
                    view full details
                  </button>
                </div>
                <hr
                  style={{
                    height: "0.5px",
                    border: "none",
                    backgroundColor: "#ccbb8e",
                  }}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="bookingHistory-page-desktop-header">
              <p>Booking ID</p>
              <p>Salon</p>
              <p>Slot Details</p>
              <p>Services</p>
              <p>Pricing</p>
              <p>Status</p>
            </div>
            {dummyBookings.map((item, index) => {
              return (
                <div
                  style={{
                    borderBottom: "1px solid #ccbb8e",
                    position: "relative",
                  }}
                >
                  <div className="bookingHistory-page-desktop-item-main">
                    <span
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: 0,
                        display: "flex",
                        cursor: "pointer",
                      }}
                      className="chevron"
                      id={`chevron${item.appointment_uuid}`}
                      onClick={() => {
                        let element = document.getElementById(
                          String(item.appointment_uuid)
                        );
                        let chevron = document.getElementById(
                          "chevron" + String(item.appointment_uuid)
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
                      <FiChevronDown />
                    </span>
                    <div>
                      <p>{item.appointment_booking_id}</p>
                    </div>
                    <div>
                      <p>{item.appointment_salon_name}</p>
                    </div>
                    <div>
                      <p>
                        {item.appointment_timing + ", " + item.appointment_date}
                      </p>
                    </div>
                    <div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          height: "100%",
                          gap: "20px",
                          justifyContent: "flex-start",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            gap: "10px",
                            justifyContent: "center",
                          }}
                        >
                          {item.appointment_services.map((service) => {
                            return (
                              <span
                                className="appointment-item-services "
                                style={{
                                  backgroundColor: "#222222",
                                  padding: "5px 10px",
                                }}
                              >
                                {service.service_name}
                              </span>
                            );
                          })}
                        </div>
                        <button
                          style={{
                            backgroundColor: "black",
                            border: "none",
                            textDecoration: "underline",
                          }}
                        >
                          Modify Services
                        </button>
                      </div>
                    </div>
                    <div>
                      <p>{"₹" + item.appointment_subtotal}</p>
                    </div>
                    <div>
                      <p
                        style={{
                          padding: "0.5em 1em",
                          width: "fit-content",
                          margin: "auto",
                          backgroundColor: `${
                            item.appointment_status === "cancelled"
                              ? "#E2A9161A"
                              : item.appointment_status === "pending"
                              ? "#E2A9161A"
                              : "#48B5361A"
                          }`,
                          fontSize: "0.8rem",
                          color: `${
                            item.appointment_status === "cancelled"
                              ? "#BC3B3B"
                              : item.appointment_status === "pending"
                              ? "#E2A916"
                              : "#48B536"
                          }`,
                        }}
                      >
                        {item.appointment_status}
                      </p>
                    </div>
                  </div>
                  <div
                    className="bookingHistory-page-desktop-item-dropdown"
                    id={`${item.appointment_uuid}`}
                  >
                    <div className="bookingHistory-page-desktop-item">
                      <div>
                        <p>{item.appointment_user_full_name}</p>
                      </div>
                      <div>
                        <p>{"+91 " + item.appointment_user_phone}</p>
                      </div>
                      <div>
                        <p>{item.appointment_user_email}</p>
                      </div>
                      <div>
                        <p>{item.appointment_payment_id}</p>
                      </div>
                      <div>
                        <p>{item.appointment_payment_method}</p>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        gap: "100px",
                      }}
                    >
                      <div style={{ gridArea: "2/5/span 1/span 1" }}>
                        <button
                          className=" cancel-btn-booking-history"
                          onClick={() => {
                            cancel_appointment(item.appointment_uuid);
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                      <div style={{ gridArea: "2/6/span 1/span 1" }}>
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <button
                            className="button-one"
                            onClick={() => {
                              reschedule(item);
                            }}
                          >
                            Reschedule
                          </button>
                          <button
                            style={{
                              backgroundColor: "black",
                              border: "none",
                              textDecoration: "underline",
                            }}
                          >
                            view full details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
export default BookingHistory;
