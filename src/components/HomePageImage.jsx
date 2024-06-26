import React from "react";
function BackGroundImage() {
    return (
        <div>
                <div className="background-data-container">
                    <h1 className="backgroung-header">Sharp Style Sharper Service</h1>
                    <p className="background-para">
                        Discover, book, and elevate your grooming experience effortlessly.
                        Your go-to platform for finding and booking trusted salons and
                        barbershops
                    </p>
                    <button className="backgorund-button">BOOK SALON NOW </button>
                </div>

            <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
                <div class="carousel-indicators">
                    <button className="carousel-indicate-one" style={{width:"16px",height:"14px",borderRadius:"50%"}} type="button" data-bs-target="#carouselExampleRide" data-bs-slide-to="0" class="active" aria-current="true" aria-label="slide 1"></button>
                    <button style={{width:"16px",height:"14px",borderRadius:"50%"}} type="button" data-bs-target="#carouselExampleRide" data-bs-slide-to="1" aria-label="slide 2"></button>
                    <button style={{width:"16px",height:"14px",borderRadius:"50%"}} type="button" data-bs-target="#carouselExampleRide" data-bs-slide-to="2" aria-label="slide 3"></button>
                </div>
                <div class="carousel-inner groomer-background-container">
                    <div class="carousel-item active groomer-background-carousel">
                        <img src="https://i.ibb.co/DLCWm4D/20240227-203542-1-1.jpg" class="d-block w-100" alt="..."  className="groomer-background-img"/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://i.ibb.co/DLCWm4D/20240227-203542-1-1.jpg" class="d-block w-100" alt="..." className="groomer-background-img"/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://i.ibb.co/DLCWm4D/20240227-203542-1-1.jpg" class="d-block w-100" alt="..." className="groomer-background-img"/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon homepage-background-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                    <span class="carousel-control-next-icon homepage-background-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>



        </div>
    )
}
export default BackGroundImage;