import React from "react";
function GroomerCard() {
  return (
    <div className="groomer-card">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row d-flex homepage-groomercards-maindiv">
          <div class="card card_1 col-10 col-md-6 col-lg-3 col-xl-2">
            <h1 style={{fontFamily:"Avegas Royale",fontSize:"60px",fontWeight:500,width:"500px"}} className="groomer-h1">What Is Groomer?</h1>
            <img
              src="https://i.ibb.co/Ykpmr7x/Adobe-Stock-687240535-1.jpg"
              class="card-img1"
              alt="..."
             />
            <div class="card-body-groomer">
              <i class="card-text mt-5" style={{fontFamily:"Poppins",fontWeight:200,fontSize:'20px'}}>
                Crafting tailored styles with precision, passion, and unparalleled
                expertise daily.
              </i>
            </div>
          </div>
          <div class="card card_2 col-12 col-md-4 col-lg-6 col-xl-4 groomer-3cardsdisplay">
            <img
              src="https://i.ibb.co/9hTwnjb/pexels-nikolaos-dimou-1319459-1.jpg" class="card-img2"
              alt="..." className="card-img-2"
            />
          </div>
          <div class="card card_3 col-2 col-md-2 col-lg-3 col-xl-1">
            <img
              src="https://i.ibb.co/xzvcdBY/jeppe-monster-Ccj-IK1h5j-Rk-unsplash-1.jpg" class="card-img3"
              alt="..."
            />
            <div class="card-second-body-groomer" >
              <i class="card-text mt-5" style={{fontFamily:"Poppins",fontWeight:200,fontSize:'20px'}} className="goomer-3cards-para" >
                Complete your grooming routine with our platform connecting you to
                top-notch salons and barbershops.
              </i>
            </div>
          </div>
        </div>


      </div>
     <button className="btn-about-us">About us</button>
    </div>
  )
}
export default GroomerCard;