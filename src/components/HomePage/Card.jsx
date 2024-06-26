import React from "react";


function Card() {

    return (

        <div className="card-main">
            <div className='card_container'>

                <div className='content_and_cards'>
                    <h1 className="card_heading">Get The Best Groomer In The City</h1>
                    <div className="slider-btn-container">

                        <span className="slider-btn">
                            <i class="bi bi-arrow-left-circle"></i>
                        </span>

                        <span className="slider-btn">
                            <i class="bi bi-arrow-right-circle"></i>
                        </span>
                    </div>



                    <div className="parent-card-container">
                        <div class="cards-container " >
                            <div className="cards-positions-container groomercards-maincards">

                                {/* <img className="card-img-container" src="https://i.ibb.co/s2ZsK8J/lindsay-cash-Md-Dha-Fsn-CQ-unsplash-2-1.jpg" alt="" /> */}

                                {/* <section class="sli-container">
                                    <div class="slider-wrapper">
                                        <div class="slider">



                                            <div id="carouselExampleDark" class="carousel carousel-dark slide">
                                                <ol class="carousel-indicators">
                                                    <li style={{ height: "9px", width: "11px", backgroundColor: "#fff", borderRadius: "50%" }} data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></li>
                                                    <li style={{ height: "9px", width: "11px", backgroundColor: "#fff", borderRadius: "50%" }} data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></li>
                                                    <li style={{ height: "9px", width: "11px", backgroundColor: "#fff", borderRadius: "50%" }} data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></li>
                                                </ol>
                                                <div class="carousel-inner" style={{ width: '300px' }}>
                                                    <div class="carousel-item active" data-bs-interval="10000">
                                                        <img id="slide-1" width={200} src="https://i.ibb.co/s2ZsK8J/lindsay-cash-Md-Dha-Fsn-CQ-unsplash-2-1.jpg" class="d-block w-100" alt="..." />
                                                        <div class="carousel-caption d-none d-md-block">

                                                        </div>
                                                    </div>
                                                    <div class="carousel-item" data-bs-interval="2000">
                                                        <img id="slide-2" width={200} src="https://i.ibb.co/s2ZsK8J/lindsay-cash-Md-Dha-Fsn-CQ-unsplash-2-1.jpg" class="d-block w-100" alt="..." />
                                                        <div class="carousel-caption d-none d-md-block">

                                                        </div>
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img id="slide-3" width={200} src="https://i.ibb.co/s2ZsK8J/lindsay-cash-Md-Dha-Fsn-CQ-unsplash-2-1.jpg" class="d-block w-100" alt="..." />
                                                        <div class="carousel-caption d-none d-md-block">

                                                        </div>
                                                    </div>
                                                </div>
                                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Previous</span>
                                                </button>
                                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Next</span>
                                                </button>
                                            </div>




                                        </div>
                                        <div class="slider-nav">
                                            <a href="slide-1"></a>
                                            <a href="slide-2"></a>
                                            <a href="slide-3"></a>

                                        </div>
                                    </div>

                                </section> */}

                                



                                <div id="carouselExampleDark" class="carousel carousel-dark slide">
                                    <ol class="carousel-indicators homepage-groomercards-indicators">
                                        <li style={{height: "9px",width: "11px",backgroundColor: "#fff",borderRadius: "50%"}} data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></li>
                                        <li style={{height: "9px",width: "11px",backgroundColor: "#fff",borderRadius: "50%"}} data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></li>
                                        <li style={{height: "9px",width: "11px",backgroundColor: "#fff",borderRadius: "50%"}} data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></li>
                                    </ol>
                                    <div class="carousel-inner" style={{ width: '276px' }}>
                                        <div class="carousel-item active" data-bs-interval="10000">
                                            <img width={200} src="https://i.ibb.co/s2ZsK8J/lindsay-cash-Md-Dha-Fsn-CQ-unsplash-2-1.jpg" class="d-block w-100" alt="..." className="groomer-card1"/>
                                            <div class="carousel-caption d-none d-md-block">
                                             
                                            </div>
                                        </div>
                                        <div class="carousel-item" data-bs-interval="2000">
                                            <img width={200} src="https://i.ibb.co/s2ZsK8J/lindsay-cash-Md-Dha-Fsn-CQ-unsplash-2-1.jpg" class="d-block w-100" alt="..." className="groomer-card1"/>
                                            <div class="carousel-caption d-none d-md-block">
                                             
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <img width={200} src="https://i.ibb.co/s2ZsK8J/lindsay-cash-Md-Dha-Fsn-CQ-unsplash-2-1.jpg" class="d-block w-100" alt="..." className="groomer-card1"/>
                                            <div class="carousel-caption d-none d-md-block">
                                            
                                            </div>
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev groomer-arrowprev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon groomer-arrrowprev" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next groomer-arrownext" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                        <span class="carousel-control-next-icon " aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div> 





                                <span className="heart-icon"><i style={{ color: "white", fontSize: "20px" }} class="bi bi-heart"></i></span>
                                <span className="location-icon groomer-mainpagecards-locationicon"><i style={{ color: "white" }} class="bi bi-geo-alt-fill"></i>Gachibowli, 800 m away</span>
                            </div>
                            <div className="card-position">
                                <div class="card-body groomer-mainpage-cardbody">
                                    <h5 style={{ color: "white" }} class="card-title">Bubbles</h5>
                                    <p style={{ color: "white" }} class="card-text">spa | manis & pedis | facials</p>
                                    <p style={{ color: "white" }}>₹ 240 / person  <span ><i   style={{ color: "white", float: "right", fontSize: "26px" }} class="bi bi-arrow-right-circle"></i></span></p>
                                </div>
                            </div>
                        </div>



                        <div class="cards-container groomer-cardcontainer2" >
                            <div className="cards-positions-container groomercards-maincards">
                                {/* <img className="card-img-container" src="https://i.ibb.co/gTK2BGR/pexels-cottonbro-studio-3993472-1.jpg" alt="" /> */}


                                <div id="carouselExampleIndicators homepage-groomercards-indicators" class="carousel slide">
                                    <div class="carousel-indicators homepage-groomercards-indicators">
                                        <button style={{ height: "9px", width: "11px", backgroundColor: "#fff", borderRadius: "50%" }} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button style={{ height: "9px", width: "11px", backgroundColor: "#fff", borderRadius: "50%" }} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button style={{ height: "9px", width: "11px", backgroundColor: "#fff", borderRadius: "50%" }} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div class="carousel-inner homepage-carousel-secondcards" style={{ width: '276px' }}>
                                        <div class="carousel-item active homepage-carousel-secondcards">
                                            <img src="https://i.ibb.co/gTK2BGR/pexels-cottonbro-studio-3993472-1.jpg" class="d-block w-100" alt="..."  className="groomer-card1"/>
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://i.ibb.co/gTK2BGR/pexels-cottonbro-studio-3993472-1.jpg" class="d-block w-100" alt="..." className="groomer-card1"/>
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://i.ibb.co/gTK2BGR/pexels-cottonbro-studio-3993472-1.jpg" class="d-block w-100" alt="..." className="groomer-card1"/>
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev groomer-arrowprev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev"    >
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next groomer-arrowprev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>


                                <span className="heart-icon"><i style={{ color: "white", fontSize: "20px" }} class="bi bi-heart"></i></span>
                                <span className="location-icon groomer-mainpagecards-locationicon"><i style={{ color: "white" }} class="bi bi-geo-alt-fill"></i>Banjara Hills, 1.3 km away</span>
                            </div>
                            <div className="card-position">
                                <div class="card-body groomer-mainpage-cardbody">
                                    <h5 style={{ color: "white" }} class="card-title">Bounce Salon & Spa</h5>
                                    <p style={{ color: "white" }} class="card-text">haircut | hairwash | spa </p>
                                    <p style={{ color: "white" }}>₹ 320 / person <span><i style={{ color: "white", float: "right", fontSize: "26px" }} class="bi bi-arrow-right-circle"></i></span></p>
                                </div>
                            </div>
                        </div>



                        <div class="cards-container homepage-groomer-thirdpage" >
                            <div className="cards-positions-container" >
                                {/* <img className="card-img-container" src="https://i.ibb.co/h9P0Tnf/pexels-thgusstavo-santana-2775269-1.jpg" alt="" /> */}


                                <div id="carouselExample" class="carousel slide">
                                <div class="carousel-indicators homepage-groomercards-indicators">
                                        <button style={{ height: "9px", width: "11px", backgroundColor: "#fff", borderRadius: "50%" }} type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button style={{ height: "9px", width: "11px", backgroundColor: "#fff", borderRadius: "50%" }} type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button style={{ height: "9px", width: "11px", backgroundColor: "#fff", borderRadius: "50%" }} type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div class="carousel-inner cardcarousellitem" style={{ width: '276px' }}>
                                        <div class="carousel-item active cardcarousellitem">
                                            <img src="https://i.ibb.co/h9P0Tnf/pexels-thgusstavo-santana-2775269-1.jpg" class="d-block w-100" alt="..." className="groomer-card1"/>
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://i.ibb.co/h9P0Tnf/pexels-thgusstavo-santana-2775269-1.jpg" class="d-block w-100" alt="..." className="groomer-card1"/>
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://i.ibb.co/h9P0Tnf/pexels-thgusstavo-santana-2775269-1.jpg" class="d-block w-100" alt="..."  className="groomer-card1"/>
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev grooomer-arrowprev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next groomer-arrrownext" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>

                               
                                <span className="heart-icon"><i style={{ color: "white", fontSize: "20px" }} class="bi bi-heart"></i></span>
                                <span className="location-icon"><i style={{ color: "white" }} class="bi bi-geo-alt-fill"></i>Kukatpally, 2.4 km away</span>

                            </div>
                            <div className="card-position ">
                                <div class="card-body ">
                                    <h5 style={{ color: "white" }} class="card-title">Envi Salon & Spa</h5>
                                    <p style={{ color: "white" }} class="card-text">haircut | manicure | body massage</p>
                                    <p style={{ color: "white" }}>₹ 360 / person<span><i style={{ color: "white", float: "right", fontSize: "26px" }} class="bi bi-arrow-right-circle"></i></span></p>
                                </div>
                            </div>
                        </div>



                        <div class="cards-container homepage-groomer-thirdpage" >
                            <div className="cards-positions-container">
                                {/* <img className="card-img-container" src="https://i.ibb.co/sPtr8YY/jeppe-monster-T-g-TN3-Po9-RQ-unsplash-1-3.jpg" alt="" /> */}


                                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner cardcarousellitem" style={{ width: '276px' }}>
                                        <div class="carousel-indicators">
                                            <button style={{ height: "9px", width: "11px", backgroundColor: "#fff", borderRadius: "50%" }} type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                            <button style={{ height: "9px", width: "11px", backgroundColor: "#fff", borderRadius: "50%" }} type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                            <button style={{ height: "9px", width: "11px", backgroundColor: "#fff", borderRadius: "50%" }} type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                        </div>
                                        <div class="carousel-item active">
                                            <img class="d-block w-100" src="https://i.ibb.co/sPtr8YY/jeppe-monster-T-g-TN3-Po9-RQ-unsplash-1-3.jpg" alt="First slide"   className="groomer-card1"/>
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src="https://i.ibb.co/sPtr8YY/jeppe-monster-T-g-TN3-Po9-RQ-unsplash-1-3.jpg" alt="Second slide"  className="groomer-card1" />
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src="https://i.ibb.co/sPtr8YY/jeppe-monster-T-g-TN3-Po9-RQ-unsplash-1-3.jpg" alt="Third slide"  className="groomer-card1" />
                                        </div>

                                    </div>

                                    <button class="carousel-control-prev grooomer-arrowprev" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon " aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next groomer-arrrownext" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>



                                <span className="heart-icon"><i style={{ color: "white", fontSize: "20px" }} class="bi bi-heart"></i></span>
                                <span className="location-icon"><i style={{ color: "white" }} class="bi bi-geo-alt-fill"></i>Banjara Hills, 1.8 km away</span>
                            </div>
                            <div className="card-position">
                                <div class="card-body">
                                    <h5 style={{ color: "white" }} class="card-title">Hadeed’s</h5>
                                    <p style={{ color: "white" }} class="card-text">hairstyling | makeup | spa </p>
                                    <p style={{ color: "white" }}>₹ 450 / person  <span><i style={{ color: "white", float: "right", fontSize: "26px" }} class="bi bi-arrow-right-circle"></i></span></p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div style={{ textAlign: 'center', paddingTop: "80px" }}>
                        <button className="btn-more-groomer" >More Groomer</button>
                    </div>


                </div>
            </div>


        </div>

    )
}
export default Card;