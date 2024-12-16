import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import loginpage_img from "../images/loginpage_img.png";
import "../css/LoginPage.css";
import Swal from 'sweetalert2'
import React from 'react';

import Context from "../../context/axiox";


export default function LoginPage() {
  const [email, setEmail] = useState("");
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


    async function login() {
      try {
        if (checkForm()) {
          const response = await axios.post(`${Context}/user/login/generateOtp`, {
            email: email,
          });
    
          const { code, message } = response.data;
    
          console.log("Loginpage", code);
    
          if (code === 200) {
            Swal.fire({
              text: message || "OTP received on your mail ID.",
              icon: "success",
              customClass: {
                popup: 'availability-popup',
                content: 'availability-content',
              },
              background: 'transparent',
              showConfirmButton: false,
              timer: 1500,
            });
    
            navigate("/otp", { state: { email, event: "login" } });
          } else {
            Swal.fire({
              text: "An unexpected error occurred.",
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
          const { code, message } = error.response.data;
    
          if (code === 404) {
            Swal.fire({
              text: "No User Found. Please sign up first.",
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
    

  function checkForm() {
    if (email.length <= 0) {
      return false;
    } else return true;
  }
  return (
    <div className="login-page">
      <div className="login-page-img-container">
        <img src={loginpage_img} alt="groomer" className="login-page-img" />
      </div>
      <div className="login-page-form-container">
        <form className="login-page-form">
          <h2 className="login-form-title">Login</h2>
          <p className="login-form-para">
            Don’t have an account?{" "}
            <NavLink
              to="/register"
              style={{
                fontWeight: "bold",
                textDecoration: "none",
                color: "#CCBB8E",
              }}
            >
              Register
            </NavLink>
          </p>
          <div className="login-form-field">
            {/* <label
              htmlFor="login-form-email"
              className="login-form-input-label"
            >
              Email
            </label> */}
            <input
              className="login-form-email-input"
              placeholder="Email"
              type="text"
              name="email"
              id="login-form-email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <button
            className="login-form-submit-btn button-one"
            onClick={(event) => {
              event.preventDefault();
              login();
            }}
          >
            Get OTP
          </button>
        </form>
      </div>
    </div>
  );
}
