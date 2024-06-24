import React from "react";
function HomeSaloon() {

    return (
        <div className="HomeSaloon-container">
        <div>
          <img
            className="HomeSaloon-Image-container"
            src="https://i.ibb.co/0XqMCFM/pexels-nikolaos-dimou-1319459-2.jpg"
            alt=""
          />
         <div>
         <img className="home-sallon-circle" src="https://i.ibb.co/ZW7nC3N/Group-5-1.png" alt="" />
         </div>
        </div>
        <div className="service-content">
          <h1 className="groomer-homeservices" style={{ color: "white",fontFamily:"Avegas Royale",fontSize:'64px',fontWeight:500}}>Home Salon Services</h1>
          <p style={{ color: "white",fontFamily:"Poppins",fontWeight:300,width:"453px",fontSize:"16px" }} className="homeservices-para1">
            {/* {" "} */}
            Indulge in luxury and convenience with our home salon service. Our
            expert stylists bring personalized grooming to your doorstep,
            providing top-notch haircuts and styling in the comfort of your own
            home.
          </p>
          <p style={{ color: "white",fontFamily:"Poppins",fontWeight:300,fontSize:"16px",width:"440px"}} className="homeservices-para2">
            Elevate your self-care routine and book your appointment today for a
            pampering experience without leaving home!
          </p>
          <button class="btn btn-home-saloon">Book Now</button>
        </div>
      </div>
    )

}
export default HomeSaloon;