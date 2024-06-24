import React from "react";
function ReasonToUseGroomer() {
    return (
        <div class="d-flex justify-content-around" style={{ gap: "31px" }}>
            <div>
                <div className="Reason-header">
                    <h1 className="groomer-reason-head"  >Reason to Use Groomer</h1>
                    {/* class="w-10 " style={{ color: "white", fontFamily: "Avegas Royale", fontWeight: 500, fontSize: "64px", width: "357px" }} */}
                </div>
                <div className="Groomer-container">
                    <div class="container w-75 ">
                        <div class="row row-cols-2 reason-paras" >
                            <div class="col" >
                                <span><i  style={{ color: "white", fontSize: "25px" }} class="bi bi-emoji-smile smile-emoji"></i></span>
                                <p  class="text-white pt-2 reason-userfriendly" style={{ fontFamily: "Poppins", fontWeight: 500, fontSize: "18px", lineHeight: "18px" }}>User-friendly Interface</p>
                                <p class="pt-2 groomer-reason-para2" style={{ fontFamily: "Poppins", fontWeight: 300, fontSize: "15px", color: "#FFFFFF" }}> Intuitive platform for easy navigation and seamless booking experience.</p>

                            </div>
                            <div class="col">
                                <span>
                                    <i style={{ color: "white", fontSize: "25px" }} class="bi bi-sliders reason-filtersymbol"></i>
                                    <p class="text-white pt-2 groomer-reasonhead2" style={{ fontFamily: "Poppins", fontWeight: 500, fontSize: "18px", lineHeight: "18px" }}>comprehensive search  filters</p>

                                    <p class=" pt-2 groomer-bodypara2" style={{ fontFamily: "Poppins", fontWeight: 300, fontSize: "15px", color: "#FFFFFF" }}> Advanced search options to find salons and barbershops based on location, services offered, ratings, and availability.</p>
                                </span>
                            </div>
                            <div class="col">
                                <span>
                                    <i style={{ color: "white", fontSize: "25px" }} class="bi bi-patch-check groomer-verifiedsymbol"></i>
                                    <p class="text-white pt-2 groomer-headpara3" style={{ fontFamily: "Poppins", fontWeight: 500, fontSize: "18px", lineHeight: "18px" }}>Verified Listings</p>

                                    <p class="pt-2 groomer-bodypara3" style={{ fontFamily: "Poppins", fontWeight: 300, fontSize: "15px", color: "#FFFFFF" }}> .Only registered and vetted salons and barbershops listed on the platform, ensuring quality and reliability.</p>
                                </span>
                            </div>
                            <div class="col">
                                <span>
                                    <i style={{ color: "white", fontSize: "25px" }} class="bi bi-calendar groomer-bookingsymbol"></i>
                                    <p class="text-white pt-2 groomer-headpara4" style={{ fontFamily: "Poppins", fontWeight: 500, fontSize: "18px", lineHeight: "18px" }}>Real-Time Booking</p>

                                    <p class=" pt-2 groomer-bodypara4" style={{ fontFamily: "Poppins", fontWeight: 300, fontSize: "15px", color: "#FFFFFF" }}>Instant appointment scheduling with real-time availability updates, allowing users to book appointments at their convenience.</p>
                                </span>
                            </div>
                            <div class="col">
                                <span>
                                    <i style={{ color: "white", fontSize: "25px" }} class="bi bi-star groomer-ratingsymbol"></i>
                                    <p class="text-white pt-2 groomer-headpara5" style={{ fontFamily: "Poppins", fontWeight: 500, fontSize: "18px", lineHeight: "18px" }}>Rating system</p>

                                    <p class=" pt-2 groomer-bodypara5" style={{ fontFamily: "Poppins", fontWeight: 300, fontSize: "15px", color: "#FFFFFF" }}> Transparent feedback system where users can rate and review their salon experiences</p>
                                </span>
                            </div>
                            <div class="col">
                                <span>
                                    
                                     <i style={{ color: "white", fontSize: "25px" }} class="bi bi-currency-rupee groomer-rupeesymbol"></i>
                          
                                    <p class="text-white pt-2 groomer-headpara6" style={{ fontFamily: "Poppins", fontWeight: 500, fontSize: "18px", lineHeight: "18px" }}>Secure payment options</p>

                                    <p class=" pt-2 groomer-bodypara3" style={{ fontFamily: "Poppins", fontWeight: 300, fontSize: "15px", color: "#FFFFFF" }}>Multiple payment methods for convenient and secure transactions.</p>
                                </span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img width={700} src="https://i.ibb.co/VDfDCNv/groomer-haircut-3.jpg" alt="" className="groomer-reasonimg"/>

                <div>
                    <img className="star-icon" src="https://i.ibb.co/26CyGXH/Star-7.png" alt="" />
                </div>
            </div>


        </div>
    )
}
export default ReasonToUseGroomer;