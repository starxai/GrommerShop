import React from "react";
import { useState } from "react";
import Navbar from "./NavbarComponent";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUserAPI } from "../../api/User_Login_Auth";
import { Link } from "react-router-dom";
import OTPPage from "../HomePage/OTPpage";
import OTPPages from "./SamplePages/SampleOtpPage";
import "../css/LoginPage.css";

function Login() {
  let location = useLocation();
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setloading] = useState(false);
  const [errorsnack, seterrorsnack] = useState(false);
  const [errormessage, seterrormessage] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [isRegistered, setisRegistered] = useState(false);

  const redirectFunc = () => {
    let redirect = location.search.replace("?redirect=", "");
    if (redirect) {
      navigate(`/register?redirect=${redirect}`);
    } else {
      navigate("/register");
    }
  };

  // TODO : login submit handler function
  const loginCheckSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    if (email === "") {
      seterrorsnack(true);
      seterrormessage("Fields should not be empty");
      setloading(false);
      return;
    }
    let response = await loginUserAPI(email);
    let code = response.code;
    if (code === 406) {
      seterrorsnack(true);
      seterrormessage("Enter the Valid Email");
      setloading(false);
      return;
    }
    if (code === 404) {
      seterrorsnack(true);
      seterrormessage(response.message);
      setloading(false);
      return;
    }
    if (code !== 200) {
      seterrorsnack(true);
      seterrormessage(response.message || "An error occurred");
      setloading(false);
    } else {
      setisRegistered(true);
      setloading(false);
      navigate(`/otp?email=${email}`, {
        state: { email: email, AccountType: "login" },
      });
    }
    // if (code === 200) {
    //   setisRegistered(true);
    //   setloading(false);
    // }
  };

  // const loginCheckSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   if (email === "") {
  //     setErrorSnack(true);
  //     setErrorMessage("Fields should not be empty");
  //     setLoading(false);
  //     return;
  //   }
  //   let response = await loginUserAPI(email);
  //   if (response.code !== 200) {
  //     setErrorSnack(true);
  //     setErrorMessage(response.message || "An error occurred");
  //     setLoading(false);
  //   } else {
  //     // Assume response indicates OTP is sent successfully
  //     setOtpSent(true);
  //     setLoading(false);
  //     navigate(`/otp?email=${email}`); // Redirect to OTP page with email as a query param
  //   }
  // };

  // if (otpSent) {
  //   // Optionally, you could use a direct component render method here instead of redirect if it's part of the same SPA flow
  //   return <OTPPage email={email} AccountType="login" />;
  // }
  // if (code === 200) {
  //   setloading(false);
  //   navigate(`/otp?email=${email}`, { state: { email: email, AccountType: "login" } });
  // }
  return (
    <div>
      {/* <Navbar /> */}
      <div className="Parent-loginpage-container">
        <div className="login-maincontainer">
          <img
            className="login-image"
            src="https://i.ibb.co/Yh9jF7g/20240227-203542-1-4.jpg"
            alt=""
          />
        </div>
        <div className="Login-form-data-container">
          <div>
            <h1
              style={{
                color: "white",
                fontSize: "70px",
                fontFamily: "Avegas Royale",
              }}
            >
              Login
            </h1>
            <p style={{ fontFamily: "Poppins" }}>
              Don’t have an account?{" "}
              <Link to="/Register">
                <span style={{ color: "#CCBB8E", fontFamily: "Poppins" }}>
                  Register
                </span>
              </Link>
            </p>
          </div>
          <div>
            {!isRegistered && (
              <form onSubmit={loginCheckSubmit}>
                <input
                  type="email"
                  className="Login-input"
                  placeholder="Enter Your Email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <br />
                <div className="login-button-container">
                  <button
                    className="btn-Login"
                    type="submit"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Get OTP
                  </button>
                </div>
              </form>
            )}
            {/* {isRegistered && <OTPPage  email={email} AccountType="login" />} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
