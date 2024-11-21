import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import loginpage_img from "../images/loginpage_img.png";
import "../css/LoginPage2.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  async function login() {
    try {
      if (checkForm()) {
        const {
          data: { code },
        } = await axios.post("http://127.0.0.1:8000/user/login/generateOtp", {
          email: email,
        });
        console.log("Loginpage", code);
        if (code === 200) {
          navigate("/otp", { state: { email, event: "login" } });
        }
      }
    } catch (error) {}
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
            <label
              htmlFor="login-form-email"
              className="login-form-input-label"
            >
              Email
            </label>
            <input
              className="login-form-email-input"
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
