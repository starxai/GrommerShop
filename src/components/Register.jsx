import { useState } from "react";
import OTPField from "../components/HomePage/OTPpage";
import { Link, useNavigate, NavLink, useLocation } from "react-router-dom";
import Navbar from "./HomePage/NavbarComponent";
// import * as Yup from "yup"
import { useFormik } from "formik";
import { registerUserAPI, generateOtpPAPI } from "../api/User_Register_Auth";

function RegisterFormPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileNumberRegistered, setIsMobileNumberRegistered] =
    useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [userDetails, setuserDetails] = useState({
    full_name: "",
    email: "",
    mobile: "",
  });
  const [terms_condition, setterms_condition] = useState(false);
  const [loading, setloading] = useState(false);
  const [errorsnack, seterrorsnack] = useState(false);
  const [errormessage, seterrormessage] = useState("");
  const changeHanlder = (e) => {
    setuserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  /// rediect function
  const redirectFunc = () => {
    let redirect = location.search.replace("?redirect=", "");
    if (redirect) {
      navigate(`/login?redirect=${redirect}`);
    } else {
      navigate("/login");
    }
  };

  // user create function
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    let check = Object.values(userDetails);
    if (check.some((item) => item === "")) {
      seterrormessage("fileds should not be empty");
      seterrorsnack(true);
      return;
    } else if (!terms_condition) {
      seterrormessage("please accept the terms and condition policies");
      seterrorsnack(true);
      return;
    }

    let response = await registerUserAPI(userDetails);

    let resCode = response.code;
    if (resCode === 409) {
      setIsMobileNumberRegistered(true);
      seterrormessage(response.message);
      seterrorsnack(true);
    } else if (resCode === 406) {
      seterrormessage(response.message);
      seterrorsnack(true);
    }

    if (resCode === 201) {
      setIsMobileNumberRegistered(false);
      setloading(true);
      let otpResponse = await generateOtpPAPI(userDetails.email);
      if (otpResponse.code === 200) {
        setIsRegistered(true);
        setloading(false);
      }
    }
  };

  return (
    <div>
      {/* {
                console.log(registerForm)
            } */}
      {/* <Navbar></Navbar> */}
      <div className="register-Form-Container">
        <div className="registerpage-maincontainer">
          <img
            className="Register-image"
            src="https://i.ibb.co/Yh9jF7g/20240227-203542-1-4.jpg"
            alt=""
          />
        </div>

        <div className="Register-data-container">
          <div>
            <h1
              style={{
                color: "white",
                fontSize: "80px",
                fontFamily: "Avegas Royale",
              }}
              className="header-registername"
            >
              Register{" "}
            </h1>
            <p style={{ color: "white", fontFamily: "Poppins" }}>
              Already have an account?{" "}
              <Link to="/Login">
                <span style={{ color: " #CCBB8E" }}>Login</span>
              </Link>
            </p>
          </div>

          <div className="registerpage-formtag">
            {!isRegistered && (
              <form
                action=""
                onSubmit={handleRegisterSubmit}
                className="registerpage-formtag"
              >
                <input
                  className="input-register-form"
                  placeholder="Fullname"
                  type="text"
                  id="mobileNumber"
                  name="full_name"
                  value={userDetails.full_name}
                  onChange={changeHanlder}
                />
                <br />
                {/* <div>
                                <b style={{color:"red"}}> {userDetails.errors.full_name}</b>
                            </div> */}
                <input
                  type="email"
                  className="input-register-form"
                  placeholder="Email"
                  id="mobileNumber"
                  name="email"
                  value={userDetails.email}
                  onChange={changeHanlder}
                />
                <br />
                {/* <div>
                                <b style={{color:"red"}}> {userDetails.errors.email}</b>
                            </div> */}
                <input
                  className="input-register-form"
                  placeholder="Mobile"
                  type="text"
                  id="mobileNumber"
                  name="mobile"
                  value={userDetails.mobile}
                  onChange={changeHanlder}
                />
                <br />
                {/* <div>
                                <b style={{color:"red"}}> {userDetails.errors.mobileno}</b>
                            </div> */}

                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    style={{ border: "1px solid gold" }}
                    onChange={(e) => setterms_condition(e.target.checked)}
                  />
                  <span style={{ fontFamily: "Poppins" }}>
                    I accept the terms and conditions, including the privacy
                  </span>{" "}
                  <br />
                </div>
                <button
                  type="submit"
                  className="btn-register"
                  style={{ fontFamily: "Poppins" }}
                >
                  {" "}
                  Register
                </button>
              </form>
            )}
            {isRegistered && (
              <OTPField email={userDetails.email} AccountType="register" />
            )}
          </div>

          {/* <ul>
                        {
                          registerData.map((data)=>{
                            return (
                                <div>
                                    <li>{data.fullname}</li>
                                </div>
                            )
                          })
                        }
                    </ul> */}
        </div>
      </div>
    </div>
  );
}
export default RegisterFormPage;
