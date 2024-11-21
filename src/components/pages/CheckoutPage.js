import { useLocation, useNavigate } from "react-router-dom";
import "../css/CheckoutPage.css";

function CheckoutPage() {
  const { salonData, services, date, timeSlot } = useLocation().state || {};
  let serviceString = "";
  services.forEach((service) => {
    serviceString = serviceString + service.service_name + ", ";
  });
  let servicePriceTotal = 0;
  services.forEach((service) => {
    servicePriceTotal =
      servicePriceTotal + Number(service.service_original_price);
  });

  console.log(date, timeSlot);

  return (
    <div className="checkout-page">
      <div className="chkout-page-section-one">
        <div className="chkout-page-price-details">
          {services.map((service, index) => {
            return (
              <p key={service._id}>
                {service.service_name} {"₹"}
                <span>{service.service_original_price}</span>
              </p>
            );
          })}
          <p>
            GST (18%) <span>{Math.floor(0.18 * servicePriceTotal)}</span>
          </p>
          <hr />
          <p>
            Total <span>{Math.floor(1.18 * servicePriceTotal)}</span>
          </p>
          <hr />
        </div>
        <div className="chkout-page-payment-method">
          <div>
            <div>
              <input type="radio" className="radio-button" />
              <label>creadit/debit card</label>
            </div>
            <div className="credit/debit-card-info-form">
              <div>
                <div className="chkout-page-form-field">
                  <label>Card Number</label>
                  <input type="text" />
                </div>
                <div className="chkout-page-form-field">
                  <label>Expiration Date</label>
                  <input type="text" />
                </div>
              </div>
              <div>
                <div className="chkout-page-form-field">
                  <label>Name of the Card Holder</label>
                  <input type="text" />
                </div>
                <div className="chkout-page-form-field">
                  <label>CVV</label>
                  <input type="text" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div>
            <input type="radio" className="radio-button" />
            <label>UPI</label>
          </div>
        </div>
        <hr />
        <div>
          <div>
            <input type="radio" className="radio-button" />
            <label>Cash</label>
          </div>
        </div>
      </div>
      <div className="chkout-page-section-two">
        <div className="chkout-page-booking-details">
          <h3>Booking Details</h3>
          <p>
            Salon name <span>{salonData.salon_name}</span>
          </p>
          <hr />
          <h4>Date & Time</h4>
          <p>Date {date.toLocaleDateString("en-IN")}</p>
          <p>Time {timeSlot}</p>
          <hr />
          <h4>Services booked</h4>
          {serviceString}
        </div>
      </div>
    </div>
  );
}
export default CheckoutPage;
