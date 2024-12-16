import { useEffect, useState } from "react";
import get_in_touch from "../images/get_in_touch_img.png";
import { contactUs } from "../../api/Booking_service.js";
import scroll_down from "../../assets/scroll-down.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function GetInTouch() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState([]);

  
  async function sendFeedback() {
    try {
      const { data } = await contactUs(email, name, feedback);
      console.log(data);
      toast.success("Your credentials have been received. We’ll get in touch with you shortly.", {
        theme: "colored"
      })
      
    } catch (error) {
      toast.error("Details entered in not acceptable. Please fill in correct information", {
        theme: "colored"
      })
     
    }
  }

  

  return (
    <>
      
      <div className="get-in-touch container">
         <ToastContainer />
        <h2 className="form-heading-two">Get In Touch With Us</h2>
        <div className="get-in-touch-img-container">
          <img
            className="scroll-down-svg"
            src={scroll_down}
            alt="scroll-down"
          />
          <img src={get_in_touch} alt="groomer" className="get-in-touch-img" />
        </div>
        <form className="get-in-touch-form">
          <h2 className="form-heading-one">Get In Touch With Us</h2>
          <div className="form-fields">
            <input
              className="form-input"
              placeholder="Name"
              value={name}
              onChange={(event) => {
                if (event.target.value.length < 50) setName(event.target.value);
              }}
              style={{ fontStyle: "normal" }}
            ></input>
          </div>
          <div className="form-fields">
            <input
              className="form-input"
              placeholder="Mobile No."
              value={phone}
              onChange={(event) => {
                if (
                  !isNaN(event.target.value) &&
                  event.target.value.length <= 10
                )
                  setPhone(event.target.value);
              }}
              style={{ fontStyle: "normal" }}
            ></input>
          </div>
          <div className="form-fields">
            <input
              className="form-input"
              placeholder="Email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              style={{ fontStyle: "normal" }}
            ></input>
          </div>
          <textarea
            name=""
            id=""
            className="text-area-form"
            rows={4}
            placeholder="Write what you feel like..."
            value={feedback}
            onChange={(event) => {
              setFeedback(event.target.value);
            }}
          ></textarea>
          <button
            className="get-it-touch-submit-btn"
            style={{ cursor: "pointer" }}
            onClick={(event) => {
              event.preventDefault();
              sendFeedback();
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
export default GetInTouch;
