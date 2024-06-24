import React from "react"
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "./NavbarComponent";
function AboutPage() {
    return (
        <div>
           <Navbar></Navbar>
            <div className="About-page-img">
                <div className="about-header">
                    <h1 className="about-header-text" >The Story Behind Our Scissors' Symphony</h1>
                </div>
            </div>
            <div className="img-container-both">
                <div>
                    <img className="presons-img" src="https://i.ibb.co/TK8kTM8/beautiful-woman-purple-sweater-skirt-1.jpg" alt="" />
                    <div class="text-center">
                        <h3 style={{ color: "white", fontStyle:"Poppins"}}>Sumanth  Vartha</h3>
                        <h5 style={{ color: "white" ,fontStyle:'Poppins'}}>Founder and CEO</h5>
                        <p style={{ color: "white",fontStyle:'Poppins',fontWeight:300 }}>Marketeer | Businesswoman</p>
                    </div>
                </div>

                <div class="text-center about-secondimages">
                    <img className="presons-img" src="https://i.ibb.co/HK9kzX5/stylish-handsome-indian-man-tshirt-pastel-wall-1.jpg" alt="" />
                    <div>
                        <h3 style={{ color: "white",fontStyle:'Poppins' }}>Praveen Ruperi</h3>
                        <h5 style={{ color: "white",fontStyle:'Poppins' }}>Co-Founder</h5>
                        <p style={{ color: "white",fontStyle:'Poppins',fontWeight:300 }}>Veteran Hairdresser</p>
                    </div>
                </div>
            </div>
            {/* <center><div className="image-place-holder"></div></center> */}
            <div className="about-carousel">
                <div id="carouselExampleCaptions" class="carousel slide aboutpage-carousel1">
                    <div class="carousel-indicators">
                        <button  style={{height: "13px", width: "13px",borderRadius: "50%"}} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button style={{height: "13px", width: "13px",borderRadius: "50%"}} className="indicate-button" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button style={{height: "13px", width: "13px",borderRadius: "50%"}}  type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active aboutpage-carousel1" style={{height: "585px"}}>

                            <div className="quotation-container aboutpage-carousel1">

                                <div className="quote-symbol">
                                    <center><h1 style={{textAlign:'center',width:"410px",fontFamily:'Avegas Royale',fontSize:"64px"}}>A word By The Founders</h1></center>
                                </div>
                                <div className="quote-data aboutpage-quotedata">
                                    "Incredibly welcoming salon with attentive staff and stylish ambiance. My stylist understood my needs perfectly, delivering an exceptional haircut that exceeded expectations. The attention to detail and precision were impressive, leaving me feeling confident and rejuvenated. This salon is a true gem for top-notch grooming services. Highly recommend!"                            </div>
                                <div className="quote-generator">
                                    - Praveen
                                </div>
                            </div>

                            <div class="carousel-caption d-none d-md-block">
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className="quotation-container">

                                <div className="quote-symbol">
                                <center><h1 style={{textAlign:'center',width:"410px",fontFamily:'Avegas Royale',fontSize:"64px"}}>A word By The Founders</h1></center>
                                </div>
                                <div className="quote-data aboutpage-quotedata">
                                    "Incredibly welcoming salon with attentive staff and stylish ambiance. My stylist understood my needs perfectly, delivering an exceptional haircut that exceeded expectations. The attention to detail and precision were impressive, leaving me feeling confident and rejuvenated. This salon is a true gem for top-notch grooming services. Highly recommend!"                            </div>
                                <div className="quote-generator">
                                    - Praveen
                                </div>
                            </div>

                            <div class="carousel-caption d-none d-md-block">
                            </div>
                        </div>
                        <div class="carousel-item">

                            <div className="quotation-container">
                                <div className="quote-symbol">
                                <center><h1 style={{textAlign:'center',width:"410px",fontFamily:'Avegas Royale',fontSize:"64px"}}>A word By The Founders</h1></center>
                                </div>
                                <div className="quote-data aboutpage-quotedata">
                                    "Incredibly welcoming salon with attentive staff and stylish ambiance. My stylist understood my needs perfectly, delivering an exceptional haircut that exceeded expectations. The attention to detail and precision were impressive, leaving me feeling confident and rejuvenated. This salon is a true gem for top-notch grooming services. Highly recommend!"                            </div>
                                <div className="quote-generator">
                                    - Praveen
                                </div>
                            </div>


                            <div class="carousel-caption d-none d-md-block">
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}
export default AboutPage;