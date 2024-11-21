import DatePicker from "react-datepicker";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { showTimingsAPI } from "../../api/Booking_service.js";
import DatePickerComponent from "../HomePage/DatePicker.js";
import "../css/BookingPage.css";

function BookingPage() {
  const [date, setDate] = useState(new Date());
  const [selctedTimeSlot, setSelectedTimeSlot] = useState("");
  const [timeSlots, setTimeSlots] = useState([]);
  const { salonData, services, customerCount } = useLocation().state || {};
  const [selectedServices, setSelectedServices] = useState(services);
  const navigate = useNavigate();

  // let duration = 0;
  // services.forEach((service) => {
  //   duration = duration + Number(service.service_duration);
  // });

  useEffect(() => {
    async function getTimeSlots() {
      const { data } = await showTimingsAPI(
        salonData.salon_uuid,
        null,
        date.toLocaleDateString("en-IN")
      );
      if (data.length > 0) {
        setTimeSlots(data);
        setSelectedTimeSlot(data[0].slot_time);
      } else {
        setSelectedTimeSlot("");
        setTimeSlots([]);
      }
    }
    getTimeSlots();
  }, [date]);

  function selectDate(selectedDate) {
    console.log(selectedDate);
    // console.log(selectedDate.toLocaleDateString("en-IN"));
    if (
      selectedDate >= new Date() ||
      selectedDate.toLocaleDateString("en-In") ===
        new Date().toLocaleDateString("en-IN")
    ) {
      setDate(selectedDate);
    }
  }

  function isChecked(service) {
    let checked = false;
    selectedServices.forEach((serObj) => {
      if (service._id === serObj._id) checked = true;
    });
    return checked;
  }

  function checkout() {
    navigate("/checkout", {
      state: {
        salonData: {
          salon_name: salonData.salon_name,
          salon_address: salonData.salon_city + ", " + salonData.salon_area,
          salon_uuid: salonData.salon_uuid,
        },
        services: selectedServices,
        date: date,
        timeSlot: selctedTimeSlot,
      },
    });
  }
  return (
    <div className="booking-page">
      <div className="booking-page-info-section">
        <div className="booking-page-salon-detains">
          <h2>{salonData.salon_name}</h2>
          <p>
            {salonData.salon_address} |{" "}
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
        <div className="booking-page-services">
          <h3>Services Selected</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            {services.map((service, index) => {
              return (
                <div className="booking-page-services-list">
                  <input
                    className="checkbox"
                    type="checkbox"
                    name="service"
                    value={index}
                    checked={isChecked(service)}
                    onChange={(event) => {
                      console.log("event", event.target.value);

                      setSelectedServices((prevService) => {
                        let service_exists = false;
                        let newService = [...prevService];
                        prevService.forEach((serObj, index) => {
                          if (services[event.target.value]._id === serObj._id) {
                            service_exists = true;
                            newService.splice(index, 1);
                          }
                        });
                        if (!service_exists) {
                          newService.push(services[event.target.value]);
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
                    {/* <span>₹ {service.service_original_price}</span> */}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        <div className="booking-page-time-date-section">
          <div>
            <h4>Date</h4>
            <p>{date.toLocaleDateString("en-IN")}</p>
          </div>
          <div>
            <h4>Time</h4>
            <p>{selctedTimeSlot}</p>
          </div>
        </div>
      </div>
      <div className="booking-page-calender">
        <DatePicker
          selected={date}
          onChange={(selectedDate) => {
            selectDate(selectedDate);
          }}
          inline
        />
        <button
          className="button-one booking-page-checkout-btn"
          onClick={() => {
            checkout();
          }}
        >
          Proceed To Checkout
        </button>
      </div>
      <div className="booking-page-timeslot-container">
        <p style={{ textAlign: "center", margin: "0", marginBottom: "20px" }}>
          {date.toDateString()}
        </p>
        <div className="booking-page-time-slots">
          {timeSlots.length > 0 ? (
            timeSlots.map((slot) => {
              return (
                <button
                  key={slot.slot_uuid}
                  value={slot.slot_time}
                  className={`salon-page-time-slot-btn button-two ${
                    selctedTimeSlot === slot.slot_time
                      ? "selected-timeslot"
                      : ""
                  }`}
                  onClick={() => {
                    setSelectedTimeSlot(slot.slot_time);
                  }}
                >
                  {slot.slot_time}
                </button>
              );
            })
          ) : (
            <p style={{ textAlign: "center" }}>No Timeslots</p>
          )}
        </div>
      </div>
    </div>
  );
}
export default BookingPage;
