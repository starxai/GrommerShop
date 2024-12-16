import { useState } from "react";
import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import loginpage_img from "../images/loginpage_img.png";
import Swal from 'sweetalert2'
import "../css/RegisterPage.css";
import Context from "../../context/axiox";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [terms, SetTerms] = useState(false);
  const navigate = useNavigate();

  // style compnents for aler massage
  React.useEffect(() => {
    const styles = `
      .availability-popup {
        background: rgba(0, 0, 0, 0.9) !important;
        padding: 20px !important;
        color: white !important;
      }

      .availability-content {
        background: transparent !important;
        padding: 0 !important;
      }

     
      // .swal2-close {
      //   color: white !important;
      //   font-size: 24px !important;
      // }

      // .swal2-title {
      //   color: white !important;
      //   font-size: 20px !important;
      //   font-weight: normal !important;
      //   margin-bottom: 20px !important;
      // }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  async function register() {
    try {
      console.log("registerPage", checkForm());
      if (checkForm()) {
        // const [firstName, ...lastNameParts] = fullName.trim().split(" ");
        // const lastName = lastNameParts.join(" ");
  
        const response = await axios.post(`${Context}/user/registration`, {
          email: email,
          // first_name: firstName,
          // last_name: lastName || "",
          full_name: fullName,
          mobile: phoneNum,
        });
  
        const { code, message } = response.data;
  
        if (code === 201) {
          Swal.fire({
            text: "OTP received on your mail ID",
            icon: "success",
            customClass: {
              popup: 'availability-popup',
              content: 'availability-content',
            },
            background: 'transparent',
            showConfirmButton: false,
            timer: 1500,
          });
  
          const otp = await getOtp();
          if (otp) {
            navigate("/otp", { state: { email, event: "register" } });
          }
        } else if (code === 409) {
          Swal.fire({
            text: "User is already registered.",
            icon: "warning",
            customClass: {
              popup: 'availability-popup',
              content: 'availability-content',
            },
            background: 'transparent',
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            text: message || "An unexpected error occurred.",
            icon: "error",
            customClass: {
              popup: 'availability-popup',
              content: 'availability-content',
            },
            background: 'transparent',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    } catch (error) {
      if (error.response) {
        const { message } = error.response.data;
        Swal.fire({
          text: message || "An unexpected error occurred.",
          icon: "error",
          customClass: {
            popup: 'availability-popup',
            content: 'availability-content',
          },
          background: 'transparent',
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          text: "Network error or server is unreachable.",
          icon: "error",
          customClass: {
            popup: 'availability-popup',
            content: 'availability-content',
          },
          background: 'transparent',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  }
  
  

  async function getOtp() {
    try {
      const {
        data: { code },
      } = await axios.post(
        `${Context}/user/registration/generateOtp`,
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
            {/* <label
              htmlFor="register-form-name"
              className="register-form-input-label"
            >
              Full Name
            </label> */}
            <input
              className="register-form-input"
              placeholder="Full Name"
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
            {/* <label
              htmlFor="register-form-email"
              className="register-form-input-label"
            >
              Email
            </label> */}
            <input
              className="register-form-input"
              placeholder="Email"
              type="email"
              name="email"
              id="register-form-email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className="register-form-field">
            {/* <label
              htmlFor="register-form-phone-number"
              className="register-form-input-label"
            >
              Phone No.
            </label> */}
            <input
              className="register-form-input"
              placeholder="Mobile No."
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
            <label className="terms-label">
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
