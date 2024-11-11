import React, { useState } from "react";
import OtpInput from "./OTPInputfiled";
import "../../helper/css/login.css";
import { useLocation } from "react-router-dom"; // Import useLocation
// import MetaData from "../context/MetaData";
// import { Alert, Snackbar } from "@mui/material";
import { loginUserAPI } from "../../api/User_Login_Auth";
import OTPTimer from "../../helper/otptimer";
import {
  GeneratingOTP,
  WRONG_OTP,
  WRONG_OTP_3_TIMES,
} from "../../context/ErrorCodes";
import Navbar from "./NavbarComponent";
import "../css/RegisterPage.css";

const Otp = () => {
  const location = useLocation(); // Use the useLocation hook
  const { email, AccountType } = location.state || {
    email: "",
    AccountType: "login",
  }; // Default values if state is not available

  //const { email, AccountType } = props;
  console.log(email);
  console.log(AccountType);

  // State variable to track whether the entered OTP is incorrect
  const [isincorrect, setIsIncorrect] = useState(false);
  const [sendLoading, setsendLoading] = useState(false);
  const [showSend, setshowSend] = useState(true);
  const [successSnack, setsuccessSnack] = useState(false);
  const [successmessage, setsuccessmessage] = useState(
    "otp send success fully"
  );
  const [errorSnack, seterrorSnack] = useState(false);
  const [errormessage, seterrormessage] = useState("");
  const [timer, setTimer] = useState(180);

  const sendAgainOTPHandler = async () => {
    setsendLoading(true);
    setshowSend(false);
    let response = null;
    if (AccountType === "login") {
      response = await loginUserAPI(email);
      if (response.code === 200 && response.message === GeneratingOTP) {
        setsendLoading(false);
        setshowSend(true);
        setsuccessmessage(response.message);
        setsuccessSnack(true);
        setTimer(180);
      }
      // ! otp wrong entered
      if (response.code === 400 && response.message === WRONG_OTP) {
        seterrormessage(response.message);
        seterrorSnack(true);
        setshowSend(false);
        setshowSend(true);
      }

      // ! if it otp enter wrong for 3 times
      if (response.code === 400 && response.message === WRONG_OTP_3_TIMES) {
        seterrormessage(response.message);
        seterrorSnack(true);
        setTimer(0);
        setshowSend(false);
        setTimeout(() => {
          setshowSend(true);
        }, 120000);
      }
    }

    if (AccountType === "register") {
      alert("not implemented");
    }
  };

  const handleTimeout = () => {
    setsendLoading(true);
    seterrormessage("OTP is expired now. Please generate New OTP");
    seterrorSnack(true);
  };

  return (
    <>
      <div>
        {/* <Navbar/> */}
        <div className="Parent-loginpage-container">
          <div>
            <img
              className="login-image"
              src="https://i.ibb.co/Yh9jF7g/20240227-203542-1-4.jpg"
              alt=""
            />
          </div>
          <div className="Login-form-data-container">
            <div>
              <h1 style={{ color: "white", fontSize: "70px" }}>
                OTP Verification{" "}
              </h1>
              <p>
                A 6 digit code has been sent to
                {/* <Link to="/Register"> */}
                <span style={{ color: "gold" }}>+91 9256770831</span>
                {/* </Link> */}
              </p>
            </div>

            {/* OTP container */}

            {sendLoading ? (
              <div className="otp-boxes">
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <input
                    className="otp-box"
                    style={{ background: "rgba(123, 123, 123, 0.25)" }}
                    size="1"
                    key={index}
                    type="text"
                    maxLength={1}
                    readOnly={true}
                    disabled={true}
                  />
                ))}
              </div>
            ) : (
              <OtpInput
                isincorrect={isincorrect}
                setIsIncorrect={setIsIncorrect}
                email={email}
                AccountType={AccountType}
                setTimer={setTimer}
                setshowSend={setshowSend}
                setsendLoading={setsendLoading}
                seterrorSnack={seterrorSnack}
                seterrormessage={seterrormessage}
              />
            )}
            <br />
            {/* Timer module */}
            <OTPTimer
              expirationTime={180}
              onTimeout={handleTimeout}
              timer={timer}
              setTimer={setTimer}
            />
            {/* Error message for incorrect OTP */}
            <div
              style={{
                fontSize: "15px",
                color: "red",
                marginTop: "5px",
                opacity: isincorrect ? "1" : "0",
              }}
            >
              The entered OTP is incorrect. Please try again
            </div>

            {/* Call handleVerify on button click */}
            <div className="login-button-container">
              <button
                className="btn-Login"
                //onClick={handleVerify}
              >
                Verify
              </button>
            </div>
            <div className="resend-code">
              <p style={{ color: "white" }}>
                Didn’t get the code?{" "}
                {showSend && (
                  <span className="register" onClick={sendAgainOTPHandler}>
                    Resend
                  </span>
                )}
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp;
