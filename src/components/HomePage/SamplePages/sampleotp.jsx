import React, { useState, useRef, useEffect, useContext } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { verifyOTPAPI } from "../../../api/User_Register_Auth";
import "../../helper/css/login.css";
import { verifyLoginOtpAPI, loginUserAPI } from "../../../api/User_Login_Auth";
import { addToken } from "../../../context/StorageToken";
import { Store, Store2 } from "../../../App";
import { WRONG_OTP, WRONG_OTP_3_TIMES, GeneratingOTP } from "../../../context/ErrorCodes";
import Navbar from "../NavbarComponent";
import "../../helper/css/login.css";

const OTPs = ({ email, AccountType }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [, setisAuth] = useContext(Store);
    const { setsingleSalon } = useContext(Store2);

    const [otp, setOTP] = useState(["", "", "", "", "", ""]);
    const otpBoxesRef = useRef([]);
    const [loading, setLoading] = useState(false);
    const [isIncorrect, setIsIncorrect] = useState(false);
    const [sendLoading, setSendLoading] = useState(false);
    const [showSend, setShowSend] = useState(true);
    const [timer, setTimer] = useState(180);
    const [errorSnack, setErrorSnack] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (index, value) => {
        if (isNaN(value)) return;
        setOTP((prev) => {
            const newOTP = [...prev];
            newOTP[index] = value;
            return newOTP;
        });
        if (value !== "") focusNextBox(index);
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pasteData = e.clipboardData.getData("text/plain").slice(0, 6);
        const newOTP = Array(6).fill("");
        pasteData.split("").forEach((char, index) => {
            newOTP[index] = char;
        });
        setOTP(newOTP);
    };

    const focusNextBox = (index) => {
        if (index < otpBoxesRef.current.length - 1) {
            otpBoxesRef.current[index + 1].focus();
        }
    };

    const focusPrevBox = (index) => {
        if (index > 0) {
            otpBoxesRef.current[index - 1].focus();
        }
    };

    useEffect(() => {
        otpBoxesRef.current[0]?.focus();
    }, []);

    useEffect(() => {
        const otpString = otp.join("");
        if (otpString.length === 6) {
            setLoading(true);
            const fetchAPI = AccountType === "Register" ? verifyOTPAPI : verifyLoginOtpAPI;
            fetchAPI(email, otpString).then(response => {
                if (response.code === 200) {
                    if (AccountType === "Register") {
                        navigate("/Login");
                    } else {
                        addToken(response.data.token);
                        setisAuth(true);
                        setsingleSalon([]);
                        navigate("/");
                    }
                    setIsIncorrect(false);
                } else if (response.code === 400) {
                    if (response.message === WRONG_OTP_3_TIMES) {
                        setErrorMessage(response.message);
                        setErrorSnack(true);
                        setTimer(0);
                        setShowSend(false);
                        setTimeout(() => {
                            setShowSend(true);
                            setIsIncorrect(false);
                        }, 120000);
                    } else {
                        setIsIncorrect(true);
                    }
                }
                setLoading(false);
            });
        }
    }, [otp, AccountType, email, navigate, setisAuth, setsingleSalon]);

    return (
        <div>
            <Navbar />
            <div className="Parent-loginpage-container">
                <div className="Login-form-data-container">
                    <h1>OTP Verification</h1>
                    <p>A 6 digit code has been sent to <Link to="/Register">+91 9256770831</Link></p>
                    <div className="otp-container">
                        {otp.map((value, index) => (
                            <input
                                className="otp-box"
                                key={index}
                                ref={(el) => otpBoxesRef.current[index] = el}
                                type="number"
                                maxLength={1}
                                value={value}
                                onChange={(e) => handleChange(index, e.target.value)}
                                onPaste={handlePaste}
                                onFocus={(e) => e.target.select()}
                                onKeyDown={(e) => {
                                    if (e.key === "Backspace" && value === "") {
                                        focusPrevBox(index);
                                    }
                                }}
                                disabled={loading}
                            />
                        ))}
                    </div>
                    <button onClick={() => setShowSend(false)}>Send Again</button>
                    <p style={{ opacity: isIncorrect ? 1 : 0 }}>Incorrect OTP, please try again.</p>
                </div>
            </div>
        </div>
    );
};

export default OTPs;




// working cdode 
import React, { useState } from "react";
import OtpInput from "../OTPInputfiled";
 import "../../helper/css/login.css";
// import MetaData from "../context/MetaData";
// import { Alert, Snackbar } from "@mui/material";
import { loginUserAPI } from "../../../api/User_Login_Auth";
import OTPTimer from "../../../helper/otptimer";
import {
  GeneratingOTP,
  WRONG_OTP,
  WRONG_OTP_3_TIMES,
} from "../../../context/ErrorCodes";
import Navbar from "../NavbarComponent";

const Otps = (props) => {
  const { email, AccountType } = props;

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
      <div className="info">
      <Navbar />
        <div>
          
          <div className="login">
            <b>OTP</b>
          </div>
          <p>
            OTP not received?{" "}
            {showSend && (
              <span className="register" onClick={sendAgainOTPHandler}>
                Send again
              </span>
            )}
          </p>{" "}
          {/* Prompt to resend OTP */}
        </div>
        <div>
          {/* OTP input component */}
          {sendLoading ? (
            <div className="otp-boxes">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <input
                  className="otp-box"
                  style={{ background: "rgba(123, 123, 123, 0.25)" }}
                  size="1"
                  key={index}
                  type="number"
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
          <p>
            OTP sent on <strong>E-MAIL</strong>, Please check spam too
          </p>
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
        </div>
      </div>

      {/* {successSnack && (
        <Snackbar
          open={successSnack}
          autoHideDuration={6000}
          onClose={() => setsuccessSnack(false)}
        >
          <Alert
            onClose={() => setsuccessSnack(false)}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            {successmessage}
          </Alert>
        </Snackbar>
      )}

      {errorSnack && (
        <Snackbar
          open={errorSnack}
          autoHideDuration={6000}
          onClose={() => seterrorSnack(false)}
        >
          <Alert
            onClose={() => seterrorSnack(false)}
            severity="error"
            variant="filled"
            sx={{ width: "100%" }}
          >
            {errormessage}
          </Alert>
        </Snackbar>
      )} */}
    </>
  );
};

export default Otps;
