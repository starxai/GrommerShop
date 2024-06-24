import React, { useState } from "react";
import { Link } from "react-router-dom";
import OtpInput from "../OTPInputfiled";
import Navbar from "../NavbarComponent";
import OTPTimer from "../../../helper/otptimer";
import { loginUserAPI } from "../../../api/User_Login_Auth";
// import "../../helper/css/login.css";
import {
    GeneratingOTP,
    WRONG_OTP,
    WRONG_OTP_3_TIMES,
  } from "../../../context/ErrorCodes";

const Otp = (props) => {
    const { email, AccountType } = props;
    const [isincorrect, setIsIncorrect] = useState(false);
    const [sendLoading, setsendLoading] = useState(false);
    const [showSend, setshowSend] = useState(true);
    const [successSnack, setsuccessSnack] = useState(false);
    const [successmessage, setsuccessmessage] = useState("otp send successfully");
    const [errorSnack, seterrorSnack] = useState(false);
    const [errormessage, seterrormessage] = useState("");
    const [timer, setTimer] = useState(180);

    const sendAgainOTPHandler = async () => {
        setsendLoading(true);
        setshowSend(false);
        let response = null;

        if (AccountType === "login") {
            response = await loginUserAPI(email);
            if (response.code === 200) {
                setsendLoading(false);
                setshowSend(true);
                setsuccessmessage(response.message);
                setsuccessSnack(true);
                setTimer(180);
            } else if (response.code === 400) {
                seterrormessage(response.message);
                seterrorSnack(true);
                setshowSend(true);
                if (response.message === WRONG_OTP_3_TIMES) {
                    setTimer(0);
                    setTimeout(() => {
                        setshowSend(true);
                    }, 120000);
                }
            }
        } else if (AccountType === "register") {
            alert("not implemented");
        }
    };

    const handleTimeout = () => {
        setsendLoading(true);
        seterrormessage("OTP is expired now. Please generate New OTP");
        seterrorSnack(true);
    };

    return (
        <div>
            <Navbar />
            <div className="Parent-loginpage-container">
                <div>
                    <img className="login-image" src="https://i.ibb.co/Yh9jF7g/20240227-203542-1-4.jpg" alt="" />
                </div>
                <div className="Login-form-data-container">
                    <div>
                        <h1 style={{ color: "white", fontSize: "70px", fontFamily:"Avegas Royale" }}>OTP Verification</h1>
                        <p style={{ fontFamily: "Poppins" }}>A 6 digit code has been sent to <Link to="/Register"><span style={{ color: "#CCBB8E" }}>+91 9256770831</span></Link></p>
                    </div>
                    <div className="otp-container">
                        {sendLoading ? (
                            <div className="otp-boxes">
                                {[1, 2, 3, 4, 5, 6].map((index) => (
                                    <input 
                                     className="otp-box" 
                                     style={{ background: "rgba(123, 123, 123, 0.25)" }} 
                                     size="1" key={index} 
                                     type="number" 
                                     maxLength={1} r
                                     eadOnly={true} 
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
                    </div>
                    <p>OTP sent on <strong>E-MAIL</strong>, Please check spam too</p>
                    <OTPTimer 
                     expirationTime={180} 
                     onTimeout={handleTimeout} 
                     timer={timer} 
                     etTimer={setTimer} 
                     />
                    <div style={{ fontSize: "15px", color: "red", marginTop: "5px", opacity: isincorrect ? "1" : "0" }}>
                        The entered OTP is incorrect. Please try again
                    </div>
                    <div className="resend-code">
                        <p style={{ color: "white", fontFamily: "Poppins" }}>
                            Didn’t get the code?{" "}
                            {showSend && (
                                <span className="register" onClick={sendAgainOTPHandler}>
                                    Send again
                                </span>
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Otp;
