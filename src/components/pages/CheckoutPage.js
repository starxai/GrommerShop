import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../css/CheckoutPage.css";
import dummyMap from "../images/dummyMap.png";

function CheckoutPage() {
  const { salonData, services, date, timeSlot } = useLocation().state || {};
  const [paymentMethod, setPaymentMethod] = useState("credit/debit-card");
  let serviceString = "";
  services.forEach((service) => {
    serviceString = serviceString + service.service_name + ", ";
  });
  let servicePriceTotal = 0;
  services.forEach((service) => {
    servicePriceTotal =
      servicePriceTotal + Number(service.service_original_price);
  });

  return (
    <div className="checkout-page">
      <div className="chkout-page-section-one">
        <h3>Payment Details</h3>

        <div className="chkout-page-price-details">
          {services.map((service, index) => {
            return (
              <p key={service._id}>
                {service.service_name}
                <span>{"₹" + service.service_original_price}</span>
              </p>
            );
          })}
          <p>
            GST (18%) <span>{"₹" + Math.floor(0.18 * servicePriceTotal)}</span>
          </p>
          <hr
            style={{
              border: "none",
              height: "1px",
              backgroundColor: "#ccbb8e",
            }}
          />
          <p>
            Total <span>{"₹" + Math.floor(1.18 * servicePriceTotal)}</span>
          </p>
          <hr
            style={{
              border: "none",
              height: "1px",
              backgroundColor: "#ccbb8e",
            }}
          />
        </div>
        <div className="chkout-page-payment-method">
          <h3>Payment Method</h3>
          <div style={{ marginBlock: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <input
                type="radio"
                className="radio-button"
                name="paymentMethod"
                value="credit/debit-card"
                checked={paymentMethod === "credit/debit-card"}
                onChange={(event) => {
                  setPaymentMethod("credit/debit-card");
                }}
              />
              <label>creadit/debit card</label>
            </div>
            <div
              style={
                paymentMethod === "credit/debit-card"
                  ? { display: "flex" }
                  : { display: "none" }
              }
              className="creditDebit-card-info"
            >
              <div className="debitcard-form-field-container">
                <div
                  style={{ flexGrow: "1" }}
                  className="chkout-page-form-field"
                >
                  <label>Card Number</label>
                  <input type="text" />
                </div>
                <div className="chkout-page-form-field">
                  <label>Expiration Date</label>
                  <input type="text" />
                </div>
              </div>
              <div className="debitcard-form-field-container">
                <div
                  style={{ flexGrow: "1" }}
                  className="chkout-page-form-field"
                >
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
        <hr
          style={{ border: "none", height: "1px", backgroundColor: "#ccbb8e" }}
        />
        <div style={{ marginBlock: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <input
              type="radio"
              className="radio-button"
              name="paymentMethod"
              value="UPI"
              checked={paymentMethod === "UPI"}
              onChange={(event) => {
                setPaymentMethod("UPI");
              }}
            />
            <label>UPI</label>
          </div>
        </div>
        <hr
          style={{ border: "none", height: "1px", backgroundColor: "#ccbb8e" }}
        />
        <div style={{ marginBlock: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <input
              type="radio"
              className="radio-button"
              name="paymentMethod"
              value="cash"
              checked={paymentMethod === "cash"}
              onChange={(event) => {
                setPaymentMethod("cash");
              }}
            />
            <label>Cash</label>
          </div>
        </div>
        <button className="button-one chkout-page-pay-btn">Pay</button>
      </div>
      <div className="chkout-page-section-two">
        <div className="chkout-page-booking-details">
          <h3>Booking Details</h3>
          <br />
          <p>
            Salon name <span>{salonData.salon_name}</span>
          </p>
          <hr
            style={{
              border: "none",
              height: "1px",
              backgroundColor: "#ccbb8e",
            }}
          />
          <h4>Date & Time</h4>
          <br />
          <p>
            Date <span>{date.toLocaleDateString("en-IN")}</span>
          </p>
          <p>
            Time <span>{timeSlot.slot_time}</span>
          </p>
          <hr
            style={{
              border: "none",
              height: "1px",
              backgroundColor: "#ccbb8e",
            }}
          />
          <h4>Services booked</h4>
          <br />
          <p>{serviceString}</p>
          <hr
            style={{
              border: "none",
              height: "1px",
              backgroundColor: "#ccbb8e",
            }}
          />
          <h4>Location</h4>
          <br></br>
          <p>
            City <span>{salonData.salon_city}</span>
          </p>
          <p>
            Address{" "}
            <span className="chkoutpage-address">
              {salonData.salon_address}
            </span>
          </p>
          <div style={{ width: "100%" }}>
            <img src={dummyMap} alt="groomer" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default CheckoutPage;
