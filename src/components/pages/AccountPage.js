import { useState, useEffect } from "react";
import account_landscape_img from "../images/account_page_img_landscape.jpg";
import account_portrait_img from "../images/account_page_img_portrait.png";
import profile_pic from "../images/profile.svg";
import Footer from "../Footer";
import "../css/AccountPage.css";

function AccountPage() {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  return (
    <div className="account-page">
      <div className="accound-page-img-container">
        <picture className="acoount-page-picture">
          <source media="(min-width: 650px)" srcSet={account_landscape_img} />
          <img
            src={account_portrait_img}
            alt="groomer"
            className="account-page-img"
          />
        </picture>
        <div className="account-page-profile-pic-container">
          <img
            src={profile_pic}
            alt="groomer"
            className="account-page-profile-img"
          />
        </div>
      </div>
      <div className="account-page-form-container">
        <form className="account-page-form">
          <div className="account-form-double-field">
            <div className="account-form-field">
              <label htmlFor="account-form-fname">First Name</label>
              <input
                className="account-form-input"
                type="text"
                name="fname"
                id="account-form-fname"
                value={fName}
                onChange={(event) => {
                  setFname(event.target.value);
                }}
              />
            </div>
            <div className="account-form-field">
              <label htmlFor="account-form-lname">Last Name</label>
              <input
                className="account-form-input"
                type="text"
                name="lname"
                id="account-form-lname"
                value={lName}
                onChange={(event) => {
                  setLname(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="account-form-field">
            <label htmlFor="account-form-email">Email</label>
            <input
              className="account-form-input"
              type="email"
              name="email"
              id="account-form-email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className="account-form-field">
            <label htmlFor="account-form-phoneNum">Phone</label>
            <input
              className="account-form-input"
              type="text"
              name="phoneNum"
              id="account-form-phoneNum"
              value={phoneNum}
              onChange={(event) => {
                setPhoneNum(event.target.value);
              }}
            />
          </div>
          <div className="account-form-field">
            <label htmlFor="account-form-address">Address</label>
            <textarea
              value={address}
              onChange={(event) => {
                setAddress(event.target.value);
              }}
              name="address"
              id="account-form-address"
              className="account-form-textarea"
              rows={4}
            />
          </div>

          <div className="account-form-double-field">
            <div className="account-form-field">
              <label htmlFor="account-form-fname">City</label>
              <input
                className="account-form-input"
                type="text"
                name="city"
                id="account-form-city"
                value={city}
                onChange={(event) => {
                  setCity(event.target.value);
                }}
              />
            </div>
            <div className="account-form-field">
              <label htmlFor="account-form-lname">State</label>
              <input
                className="account-form-input"
                type="text"
                name="state"
                id="account-form-state"
                value={state}
                onChange={(event) => {
                  setState(event.target.value);
                }}
              />
            </div>
          </div>
          <button className="button-one account-form-sub-btn">
            Update Changes
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
export default AccountPage;
