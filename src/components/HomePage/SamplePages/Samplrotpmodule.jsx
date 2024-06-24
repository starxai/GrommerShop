import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../NavbarComponent";
import { verifyLoginOtpAPI } from "../../../api/User_Login_Auth"; // Import your API function

function OTPModule() {
    const [otp, setOtp] = useState(""); // State to hold the OTP input

    const handleVerify = async () => {
        try {
            // Call the API function to verify the OTP
            const response = await verifyLoginOtpAPI(email, otp); // Assuming 'email' is available
            // Handle the response, e.g., redirect to another page upon successful verification
            console.log(response);
        } catch (error) {
            // Handle errors, e.g., display an error message to the user
        }
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
                        <h1 style={{ color: "white", fontSize: "70px" }}>OTP Verification </h1>
                        <p>A 6 digit code has been sent to <Link to="/Register"><span style={{ color: "gold" }}>+91 9256770831</span></Link></p>
                    </div>
                    <div className="otp-container">
                        <input
                            className="Otp-input"
                            type="text"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)} // Update the OTP state on input change
                        />
                    </div>
                    <div className="login-button-container">
                        <button className="btn-Login" onClick={handleVerify}>Verify</button> {/* Call handleVerify on button click */}
                    </div>
                    <div className="resend-code">
                        <p style={{ color: "white" }}>Didn’t get the code? <span style={{ color: "gold" }}>Resend</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OTPModule;
