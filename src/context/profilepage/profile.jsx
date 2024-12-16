import React, { useState, useRef } from "react";
import img2 from "../../components/images/Frame 409.jpg";
function Profile() {
  const [img, setimg] = useState();

  const handleimageclick2 = (event) => {
    const file = event.target.files;

    setimg(event.target.files[0]);
  };
  return (
    <div style={{ height: "2000px" }}>
      <div className="profile-div">
        <div style={{ paddingTop: "300px", paddingLeft: "600px" }}>
          {/* <label for="input-file" className="lable-img">Image</label> */}
          {img ? (
            <img src={URL.createObjectURL(img)} className="profile-pic" />
          ) : (
            <img src={img} className="profile-pic" />
          )}
          <label for="first-img">
            <img
              src={img2}
              style={{
                height: "38px",
                width: "38px",
                borderRadius: "50%",
                marginTop: "150px",
                position: "relative",
                right: "45px",
              }}
            />{" "}
          </label>
          <input
            type="file"
            accept="image/jpeg, image/png, image/jpg"
            onChange={handleimageclick2}
            className="profilepic-input"
            id="first-img"
          />
        </div>
      </div>

      <div style={{ marginLeft: "275px", marginTop: "200px" }}>
        <p className="first-name">First Name </p>
        <input className="profile-page-input1" />
        <p className="last-name">Lastname</p>
        <input className="profile-page-input2" />
        <p className="email">Email</p>
        <input className="profile-page-email" />
        <p className="contact-number">Contact Number</p>
        <input className="profile-page-contactnumber" />
        <p className="adress">Address</p>
        <input className="profile-page-adress" />
        <p className="city">City</p>
        <input className="profile-page-city" />
        <div className="state-container">
          <p className="state">State</p>
          <select className="profile-page-dropdown">
            <option>Andhra pradesh</option>
            <option>Hyderabad</option>
          </select>
        </div>
      </div>
      <button className="profile-btn">Update changes</button>
    </div>
  );
}
export default Profile;
