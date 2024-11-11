import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faIndianRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "./NavbarComponent";
import Context from "../../context/axiox";
import { getToken } from "../../context/StorageToken";

// Sample list for demonstration
const list = [
  {
    bookingid: "GB126710035",
    salon: "bounce salon & spa",
    slotdetails: "01:00, 10 May 2023",
    services: "Hair cut,massage",
    pricing: "320",
    status: "completed",
  },
];

const Bookinghistory = () => {
  const [appointments, setAppointments] = useState([]);

  const handleAppointment = async () => {
    let headerlist = {
      Authorization: `Bearer ${getToken()}`,
    };

    let response = await fetch(`${Context}/user/appointments`, {
      headers: headerlist,
    });

    let data = await response.json();

    if (data.code === 200) {
      setAppointments(data.data.appointments || []);
    }
  };

  useEffect(() => {
    handleAppointment();
  }, []);

  useEffect(() => {
    console.log(appointments);
  }, [appointments]);

  return (
    <div>
      <div>{/* <Navbar /> */}</div>
      <p
        className="bookinghistorypage-heading"
        style={{
          fontSize: "64px",
          fontWeight: "400",
          paddingTop: "100px",
          marginLeft: "550px",
          color: "white",
        }}
      >
        Bookings History
      </p>
      <div className="titles">
        <div className="t-1">
          <h4>Booking Id</h4>
          <h4>Saloon</h4>
        </div>
        <div className="t-2">
          <h4>Slot Details</h4>
          <h4>Services</h4>
        </div>
        <div className="t-3">
          <h4 style={{ marginLeft: "0px" }}>Pricing</h4>
          <h4 style={{ marginLeft: "20px" }}>Status</h4>
        </div>
      </div>
      <hr />
      {appointments.length > 0 ? (
        appointments.map((item, index) => (
          <div key={index}>
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item booking-history-accordtionmain">
                <h2 class="accordion-header " id={item.appointment_uuid}>
                  <button
                    class="accordion-button collapsed booking-history-accordtionmain"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={"#flush-" + item.appointment_booking_id}
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    <div className="d-1">
                      <p className="bookinghistory-accordtion-id">
                        {item.appointment_booking_id}
                      </p>
                      <p className="bookinghist">{item.salon.salon_name}</p>
                    </div>

                    <div className="d-2">
                      <p style={{ marginLeft: "170px" }}>
                        {item.appointment_date}
                        {item.appointment_timing}
                      </p>
                      <div className="bookinghistory-servicemain">
                        {item.appointment_services.map((service, i) => (
                          <p
                            className="bookinghistory-services"
                            key={i}
                            style={{
                              backgroundColor: "#474448",
                              padding: "px",
                            }}
                          >
                            {service.service_name}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="d-3">
                      <p
                        className="bookinghistory-price"
                        style={{ marginLeft: "270px" }}
                      >
                        {" "}
                        <FontAwesomeIcon icon={faIndianRupeeSign} />{" "}
                        {item.appointment_original_price}
                      </p>
                      <p
                        className="bookinghistory-appointmentstatus"
                        style={{
                          marginLeft: "50px",
                          color: item.status === "cancelled" ? "red" : "green",
                        }}
                      >
                        {item.appointment_payment_status}
                      </p>
                    </div>
                  </button>
                </h2>
                <div
                  id={"flush-" + item.appointment_booking_id}
                  class="accordion-collapse collapse"
                  aria-labelledby={"flush-" + item.appointment_uuid}
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <button>Cancelled</button>
                  </div>
                </div>
              </div>

              {/*
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>*/}
            </div>

            {/*     <div className='data'>
              <div className='d-1'>
                <p>{item.appointment_booking_id}</p>
                    <p>{item.salon.salon_name}</p>
        
              </div>
              <div className='d-2'>
                <p style={{marginLeft:"200px"}}>{item.appointment_date}{item.appointment_timing}</p>
       
                { item.appointment_services.map((service, i) => (
                  <p key={i} style={{ backgroundColor: '#474448', padding: '3px' }}>{service.service_name}</p>
                ))}
              </div>
              <div className='d-3'>
                <p style={{ marginLeft: '100px' }}><FontAwesomeIcon icon={faIndianRupeeSign} />{item.appointment_original_price}</p>
                <p style={{ color: item.status === 'cancelled' ? 'red' : 'green' }}>{item.appointment_payment_status}</p>
                <FontAwesomeIcon icon={faCaretDown} />
              </div>
            </div>*/}
            <hr style={{ marginTop: "20px" }} />
          </div>
        ))
      ) : (
        <p>No appointments found</p>
      )}
    </div>
  );
};

export default Bookinghistory;
