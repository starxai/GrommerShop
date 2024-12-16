import { useState, useRef, useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Store } from "../../App";
import axios from "axios";
import loginpage_img from "../images/loginpage_img.png";
import Swal from 'sweetalert2'
import React from 'react';
import "../css/OtpPage.css";
import Context from "../../context/axiox";

export default function OtpPage() {
  const [OTP, setOTP] = useState(["", "", "", "", "", ""]);
  const otpInputRef = useRef([]);
  const { setisAuth } = useContext(Store);

  
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




  const location = useLocation();
  const { email, event } = location.state || "";
  const authUrl =
    event === "login"
      ? `${Context}/user/login/verification`
      : `${Context}/user/registration/verification`;

  const navigate = useNavigate();
  async function auth() {
    try {
      const {
        data: {
          code,
          data: { token },
        },
      } = await axios.post(authUrl, {
        email: email,
        otp: OTP.join(""),
      });
      if (code === 200 && event === "login") {
        Swal.fire({
                          text: "Logged in successfully",
                          icon: "success",
                          customClass: {
                            popup: 'availability-popup',
                            content: 'availability-content'
                          },
                           background: 'transparent',
                           showConfirmButton: false,
                           timer: 1500
                        });
        setisAuth(token);
        navigate("/");
        localStorage.setItem("salon_user_token", token);
      } else if (code === 200) {
        Swal.fire({
                          text: "Please Login here!",
                          icon: "success",
                          customClass: {
                            popup: 'availability-popup',
                            content: 'availability-content'
                          },
                           background: 'transparent',
                           showConfirmButton: false,
                           timer: 1500
                        });
        navigate("/login");
      }
    } catch (error) {
       Swal.fire({
                    text: "Check Otp Correctly enter on the filed",
                    icon: "error",
                    customClass: {
                      popup: 'availability-popup',
                      content: 'availability-content'
                    },
                     background: 'transparent',
                     showConfirmButton: false,
                     timer: 1500
                  });
    }
  }

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text/plain").trim().slice(0, 6);
    const newOTP = Array(6).fill("");

    for (let i = 0; i < pasteData.length; i++) {
      newOTP[i] = pasteData[i];
    }

    setOTP(newOTP);
  };
  return (
    <div className="otp-page">
      <div className="otp-page-img-container">
        <img src={loginpage_img} alt="groomer" className="otp-page-img" />
      </div>
      <div className="otp-page-form-container">
        <form className="otp-page-form">
          <h2 className="otp-form-title">OTP verification</h2>
          <p className="otp-form-para">
            A 6 digit code has been sent to{" "}
            <NavLink
              to="/login2"
              style={{
                fontWeight: "bold",
                textDecoration: "none",
                color: "#CCBB8E",
              }}
            >
              {email}
            </NavLink>
          </p>
          <div className="otp-form-field">
            {OTP.map((value, index) => {
              return (
                <input
                  key={index}
                  ref={(ref) => {
                    return (otpInputRef.current[index] = ref);
                  }}
                  className="otp-form-input"
                  type="text"
                  name="OTP"
                  size={1}
                  maxLength={1}
                  id="otp-form"
                  onPaste={handlePaste}
                  value={OTP[index]}
                  onChange={(event) => {
                    if (
                      !isNaN(event.target.value) &&
                      event.target.value !== " "
                    ) {
                      setOTP((prevOTP) => {
                        const newOTP = [...prevOTP];
                        newOTP[index] = event.target.value;
                        return newOTP;
                      });
                      if (index + 1 < OTP.length)
                        otpInputRef.current[index + 1].focus();
                    }
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Backspace" && value === "") {
                      setOTP((prevOTP) => {
                        const newOTP = [...prevOTP];
                        newOTP[index - 1] = "";
                        return newOTP;
                      });
                      if (index - 1 >= 0)
                        otpInputRef.current[index - 1].focus();
                    }
                  }}
                />
              );
            })}
          </div>

          <button
            className="otp-form-submit-btn button-one"
            onClick={(event) => {
              event.preventDefault();
              auth();
            }}
          >
            Verify
          </button>
          <p className="otp-form-para">
            Didn’t get the code?{" "}
            <NavLink
              to="/login2"
              style={{
                fontWeight: "bold",
                textDecoration: "none",
                color: "#CCBB8E",
              }}
            >
              Resend
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}
