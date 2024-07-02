import React from "react";
function ProductCard() {
    return (
        <div >
            <h1 className="groomer-products" style={{ color: "white", textAlign: "center", paddingTop: "20px" ,
            fontFamily:"Avegas Royale",fontWeight:"700px",fontSize:"64px",marginTop:"150px",
            lineHeight:"64px",letterSpacing:"-4%" }}>Our Bestsellers</h1>
            
            <div className="product-arrow-buttons">
    
            <span className="slider-btn">
                <i class="bi bi-arrow-left-circle"></i>
                </span>

                <span className="slider-btn">
                <i class="bi bi-arrow-right-circle"></i>
                 </span>
            </div>
            <div >

                
                <div className="product-saloon-container">

                    <div className="product-card" >
                        <div className="cards-positions-container productcard-cardspostion" >
                        <img width={276} src="https://i.ibb.co/z5GSkLx/lindsay-cash-Md-Dha-Fsn-CQ-unsplash-2.jpg" alt="..." className="groomer-card1"/>
                        <span className="heart-icon"><i style={{ color: "white", fontSize: "20px" }} class="bi bi-heart"></i></span>
                        <span className="location-icon product-locationicons">Concern :Dry hair</span>
                        </div>
                        <div className="card-position">
                        <div class="card-body cardsposition-body">
                            <p className="product-name-data" >Keune Shampoo</p> <p className="product-rating-data" >4/5<span className="product-rating-icon"><i  style={{ color: "white",fontSize:"14px" }} class="bi bi-star-fill"></i></span></p>
                            <h1 style={{ color: "white",fontSize:"20px" }} className="product-price">₹ 400</h1>
                            <button className="shop-button">Shop Now </button>
                        </div>
                        </div>
                    </div>


                    <div className="product-card" >
                        <div className="cards-positions-container productcard-cardspostion" >
                        <img width={276} src="https://i.ibb.co/cwLDDhH/lindsay-cash-Md-Dha-Fsn-CQ-unsplash-2-2.jpg" alt="..."  className="groomer-card1"/>
                        <span className="heart-icon"><i style={{ color: "white", fontSize: "20px" }} class="bi bi-heart"></i></span>
                        <span className="location-icon product-locationicons">Concern :Dry hair</span>
                        </div>
                       <div className="card-position">
                        <div class="card-body cardsposition-body">
                            <p className="product-name-data" >WellaCondioner </p> <p className="product-rating-data">4.2/5<span  className="product-rating-icon"><i style={{ color: "white",fontSize:"14px" }} class="bi bi-star-fill"></i></span></p>
                            <h1 className="product-price" style={{ color: "white",fontSize:"20px" }}>₹ 560</h1>
                            <button className="shop-button">Shop Now </button>
                        </div>
                        </div>

                    </div>


                    <div className="product-card groomerhomepage-card3" >
                        <div className="cards-positions-container productcard-cardspostion">
                        <img width={276} src="https://i.ibb.co/DQDhD65/lindsay-cash-Md-Dha-Fsn-CQ-unsplash-2-3.jpg" alt="..."   className="groomer-card1"/>
                        <span className="heart-icon"><i style={{ color: "white", fontSize: "20px" }} class="bi bi-heart"></i></span>
                        <span className="location-icon">Concern :Patchy beard</span>
                        </div>
                        <div className="card-position">
                        <div class="card-body cardsposition-body">
                            <p className="product-name-data">Shea Moisture oil</p> <p className="product-rating-data">4/5<span  className="product-rating-icon"><i style={{ color: "white",fontSize:"14px" }} class="bi bi-star-fill"></i></span></p>
                            <h1 style={{ color: "white",fontSize:"20px" }}>₹ 320</h1>
                            <button className="shop-button">Shop Now </button>
                        </div>
                        </div>
                    </div>



                    <div>
                        <div className="product-card groomerhomepage-card3" >
                            <div className=" cards-positions-container productcard-cardspostion3">
                            <img width={276} src="https://i.ibb.co/DQDhD65/lindsay-cash-Md-Dha-Fsn-CQ-unsplash-2-3.jpg" alt="..."   className="groomer-card1"/>
                            <span className="heart-icon"><i style={{ color: "white", fontSize: "20px" }} class="bi bi-heart"></i></span>
                          <span className="location-icon product-locationicons">Concern :Dry hair</span>
                          </div>
                           <div className="card-position ">
                            <div class="card-body cardsposition-body">
                                <p className="product-name-data">Olivient hair oil</p> <p className="product-rating-data">4/5<span  className="product-rating-icon"><i style={{ color: "white",fontSize:"14px" }} class="bi bi-star-fill"></i></span></p>
                                <h1 style={{ color: "white",fontSize:"20px" }}>₹ 350</h1>
                                <button className="shop-button">Shop Now </button>
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div>





                </div>
            </div>

            <center style={{paddingTop:"100px"}}>
                <button className="more-products-button">More products</button>
            </center>
        </div>
    )
}
export default ProductCard;