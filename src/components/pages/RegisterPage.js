import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import loginpage_img from "../images/loginpage_img.png";

import "../css/RegisterPage2.css";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [terms, SetTerms] = useState(false);
  const navigate = useNavigate();

  async function register() {
    try {
      console.log("registerPage", checkForm());
      if (checkForm()) {
        const {
          data: { code },
        } = await axios.post("http://127.0.0.1:8000/user/registration", {
          email: email,
          full_name: fullName,
          mobile: phoneNum,
        });
        if (code === 201) {
          const otp = await getOtp();
          if (otp) {
            navigate("/otp", { state: { email, event: "register" } });
          }
        }
      }
    } catch (error) {}
  }

  async function getOtp() {
    try {
      const {
        data: { code },
      } = await axios.post(
        "http://127.0.0.1:8000/user/registration/generateOtp",
        {
          email: email,
        }
      );
      if (code === 200) {
        return true;
      }
    } catch (error) {}
  }
  function checkForm() {
    console.log(fullName, email, phoneNum, terms);
    if (fullName.length <= 0) {
      return false;
    } else if (email.length <= 0) {
      return false;
    } else if (phoneNum.length <= 0) {
      return false;
    } else if (!terms) {
      return false;
    } else return true;
  }
  return (
    <div className="register-page">
      <div className="register-page-img-container">
        <img src={loginpage_img} alt="groomer" className="register-page-img" />
      </div>
      <div className="register-page-form-container">
        <form className="register-page-form">
          <h2 className="register-form-title">Register</h2>
          <p className="register-form-para">
            Already have an account?{" "}
            <NavLink
              to="/login"
              style={{
                fontWeight: "bold",
                textDecoration: "none",
                color: "#CCBB8E",
              }}
            >
              Login
            </NavLink>
          </p>
          <div className="register-form-field">
            <label
              htmlFor="register-form-name"
              className="register-form-input-label"
            >
              Full Name
            </label>
            <input
              className="register-form-input"
              type="text"
              name="full-name"
              id="register-form-name"
              value={fullName}
              onChange={(event) => {
                setFullName(event.target.value);
              }}
            />
          </div>
          <div className="register-form-field">
            <label
              htmlFor="register-form-email"
              className="register-form-input-label"
            >
              Email
            </label>
            <input
              className="register-form-input"
              type="text"
              name="email"
              id="register-form-email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className="register-form-field">
            <label
              htmlFor="register-form-phone-number"
              className="register-form-input-label"
            >
              Phone No.
            </label>
            <input
              className="register-form-input"
              type="text"
              name="phone-number"
              id="register-form-phone-number"
              value={phoneNum}
              onChange={(event) => {
                setPhoneNum(event.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="checkbox"
              value={terms}
              onChange={(event) => {
                SetTerms(true);
              }}
            />{" "}
            <label>
              I accept the terms and conditions, including the privacy
            </label>
          </div>
          <button
            className="register-form-submit-btn button-one"
            onClick={(event) => {
              event.preventDefault();
              register();
            }}
          >
            Get OTP
          </button>
        </form>
      </div>
    </div>
  );
}
