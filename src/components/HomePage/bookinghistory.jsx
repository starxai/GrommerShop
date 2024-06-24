import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import Navbar from './NavbarComponent';
import Context from '../../context/axiox';
import { getToken } from '../../context/StorageToken';

// Sample list for demonstration
const list = [
  {
    bookingid: 'GB126710035',
    salon: 'bounce salon & spa',
    slotdetails: '01:00, 10 May 2023',
    services: 'Hair cut,massage',
    pricing: '320',
    status: 'completed'
  }
];

const Bookinghistory = () => {
  const [appointments, setAppointments] = useState([]);

  const handleAppointment = async () => {
    let headerlist = {
      Authorization: `Bearer ${getToken()}`
    };

    let response = await fetch(`${Context}/user/appointments`, {
      headers: headerlist
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
      <div >
        <Navbar />
      </div>
      <p style={{  fontSize: "64px", fontWeight: "400px", paddingTop: "100px", marginLeft: "400px" ,color:"white"}}>Bookings History</p>
      <div className='titles'>
        <div className='t-1'>
          <h4>Booking Id</h4>
          <h4>Saloon</h4>
        </div>
        <div className='t-2'>
          <h4>Slot Details</h4>
          <h4>Services</h4>
        </div>
        <div className='t-3'>
          <h4 style={{ marginLeft: '20px' }}>Pricing</h4>
          <h4 style={{ marginLeft: '20px' }}>Status</h4>
        </div>
      </div>
      <hr />
      {appointments.length > 0 ? (
        appointments.map((item, index) => (
          <div key={index}>
            <div className='data'>
              <div className='d-1'>
                <p>{item.appointment_booking_id}</p>
                    <p>{item.salon.salon_name}</p>
        
              </div>
              <div className='d-2'>
                <p style={{marginLeft:"200px"}}>{item.appointment_date}{item.appointment_timing}</p>
                {/* Check if services is a string before splitting */}
                { item.appointment_services.map((service, i) => (
                  <p key={i} style={{ backgroundColor: '#474448', padding: '3px' }}>{service.service_name}</p>
                ))}
              </div>
              <div className='d-3'>
                <p style={{ marginLeft: '100px' }}><FontAwesomeIcon icon={faIndianRupeeSign} />{item.appointment_original_price}</p>
                <p style={{ color: item.status === 'cancelled' ? 'red' : 'green' }}>{item.appointment_payment_status}</p>
                <FontAwesomeIcon icon={faCaretDown} />
              </div>
            </div>
            <hr style={{ marginTop: '20px' }} />
          </div>
        ))
      ) : (
        <p>No appointments found</p>
      )}
    </div>
  );
}

export default Bookinghistory;
