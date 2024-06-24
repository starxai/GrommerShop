import React from "react";
function Quotations() {
    return (
        <div>

            <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                    <button style={{ height: "9px", width: "11px", backgroundColor: "#fff", borderRadius: "50%" }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button style={{ height: "9px", width: "11px", backgroundColor: "#fff", borderRadius: "50%" }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button style={{ height: "9px", width: "11px", backgroundColor: "#fff", borderRadius: "50%" }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">

                        <div className="quotation-place-container">

                            <div className="quote-symbol">
                                <i class="bi bi-quote h1"></i>
                            </div>
                            <div className="quote-data">
                                "Incredibly welcoming salon with attentive staff and stylish ambiance. My stylist understood my needs perfectly, delivering an exceptional haircut that exceeded expectations. The attention to detail and precision were impressive, leaving me feeling confident and rejuvenated. This salon is a true gem for top-notch grooming services. Highly recommend!"
                            </div>
                            <div className="quote-generator">
                                - Marques Brownlee
                            </div>
                        </div>

                        <div class="carousel-caption d-none d-md-block">
                        </div>
                    </div>
                    <div class="carousel-item">


                        <div className="quotation-place-container">

                            <div className="quote-symbol">
                                <i class="bi bi-quote h1"></i>
                            </div>
                            <div className="quote-data">
                                "Incredibly welcoming salon with attentive staff and stylish ambiance. My stylist understood my needs perfectly, delivering an exceptional haircut that exceeded expectations. The attention to detail and precision were impressive, leaving me feeling confident and rejuvenated. This salon is a true gem for top-notch grooming services. Highly recommend!"
                            </div>
                            <div className="quote-generator">
                                - Marques Brownlee
                            </div>
                        </div>

                        <div class="carousel-caption d-none d-md-block">
                        </div>
                    </div>
                    <div class="carousel-item">

                        <div className="quotation-place-container">

                            <div className="quote-symbol">
                                <i class="bi bi-quote h1"></i>
                            </div>
                            <div className="quote-data">
                                "Incredibly welcoming salon with attentive staff and stylish ambiance. My stylist understood my needs perfectly, delivering an exceptional haircut that exceeded expectations. The attention to detail and precision were impressive, leaving me feeling confident and rejuvenated. This salon is a true gem for top-notch grooming services. Highly recommend!"
                            </div>
                            <div className="quote-generator">
                                - Marques Brownlee
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
    )
}
export default Quotations;