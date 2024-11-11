import React from "react";
function NewCard() {
  return (
    <div>
      <div className="content_and_cards">
        <h1 className="card_heading">Get The Best Groomer In The City</h1>

        <div id="carouselExampleIndicators" class="carousel slide ">
          {/* <div className="slider-btns">
                      
                        <button style={{ color: "#fff" }} class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button style={{ color: "#fff" }} class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div> */}
          <div className="slide-carousel-button">
            <button
              style={{ color: "#fff", zIndex: 300 }}
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                style={{
                  border: "1px solid yellow",
                  position: "relative",
                  bottom: "289px",
                  fontSize: "30px",
                }}
                class="bi bi-arrow-left-circle"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              style={{ color: "#fff", zIndex: 300 }}
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                style={{
                  border: "1px solid yellow",
                  position: "relative",
                  bottom: "289px",
                  fontSize: "30px",
                }}
                class="bi bi-arrow-right-circle"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          {/* <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div> */}
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="d-flex ">
                <div class="cards-container">
                  <div className="cards-positions-container">
                    {/* <img className="card-img-container" src="https://i.ibb.co/gTK2BGR/pexels-cottonbro-studio-3993472-1.jpg" alt="" /> */}

                    <span className="heart-icon">
                      <i
                        style={{ color: "white", fontSize: "20px" }}
                        class="bi bi-heart"
                      ></i>
                    </span>
                    <span className="location-icon">
                      <i
                        style={{ color: "white" }}
                        class="bi bi-geo-alt-fill"
                      ></i>
                      Banjara Hills, 1.3 km away
                    </span>
                  </div>
                  <div className="card-position">
                    <div class="card-body">
                      <h5 style={{ color: "white" }} class="card-title">
                        Bounce Salon & Spa
                      </h5>
                      <p style={{ color: "white" }} class="card-text">
                        haircut | hairwash | spa{" "}
                      </p>
                      <p style={{ color: "white" }}>
                        ₹ 320 / person{" "}
                        <span>
                          <i
                            style={{
                              color: "white",
                              float: "right",
                              fontSize: "26px",
                            }}
                            class="bi bi-arrow-right-circle"
                          ></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="cards-container">
                  <div className="cards-positions-container">
                    <img
                      className="card-img-container"
                      src="https://i.ibb.co/gTK2BGR/pexels-cottonbro-studio-3993472-1.jpg"
                      alt=""
                    />
                    <span className="heart-icon">
                      <i
                        style={{ color: "white", fontSize: "20px" }}
                        class="bi bi-heart"
                      ></i>
                    </span>
                    <span className="location-icon">
                      <i
                        style={{ color: "white" }}
                        class="bi bi-geo-alt-fill"
                      ></i>
                      Banjara Hills, 1.3 km away
                    </span>
                  </div>
                  <div className="card-position">
                    <div class="card-body">
                      <h5 style={{ color: "white" }} class="card-title">
                        Bounce Salon & Spa
                      </h5>
                      <p style={{ color: "white" }} class="card-text">
                        haircut | hairwash | spa{" "}
                      </p>
                      <p style={{ color: "white" }}>
                        ₹ 320 / person{" "}
                        <span>
                          <i
                            style={{
                              color: "white",
                              float: "right",
                              fontSize: "26px",
                            }}
                            class="bi bi-arrow-right-circle"
                          ></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="cards-container">
                  <div className="cards-positions-container">
                    <img
                      className="card-img-container"
                      src="https://i.ibb.co/gTK2BGR/pexels-cottonbro-studio-3993472-1.jpg"
                      alt=""
                    />
                    <span className="heart-icon">
                      <i
                        style={{ color: "white", fontSize: "20px" }}
                        class="bi bi-heart"
                      ></i>
                    </span>
                    <span className="location-icon">
                      <i
                        style={{ color: "white" }}
                        class="bi bi-geo-alt-fill"
                      ></i>
                      Banjara Hills, 1.3 km away
                    </span>
                  </div>
                  <div className="card-position">
                    <div class="card-body">
                      <h5 style={{ color: "white" }} class="card-title">
                        Bounce Salon & Spa
                      </h5>
                      <p style={{ color: "white" }} class="card-text">
                        haircut | hairwash | spa{" "}
                      </p>
                      <p style={{ color: "white" }}>
                        ₹ 320 / person{" "}
                        <span>
                          <i
                            style={{
                              color: "white",
                              float: "right",
                              fontSize: "26px",
                            }}
                            class="bi bi-arrow-right-circle"
                          ></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="cards-container">
                  <div className="cards-positions-container">
                    <img
                      className="card-img-container"
                      src="https://i.ibb.co/gTK2BGR/pexels-cottonbro-studio-3993472-1.jpg"
                      alt=""
                    />
                    <span className="heart-icon">
                      <i
                        style={{ color: "white", fontSize: "20px" }}
                        class="bi bi-heart"
                      ></i>
                    </span>
                    <span className="location-icon">
                      <i
                        style={{ color: "white" }}
                        class="bi bi-geo-alt-fill"
                      ></i>
                      Banjara Hills, 1.3 km away
                    </span>
                  </div>
                  <div className="card-position">
                    <div class="card-body">
                      <h5 style={{ color: "white" }} class="card-title">
                        Bounce Salon & Spa
                      </h5>
                      <p style={{ color: "white" }} class="card-text">
                        haircut | hairwash | spa{" "}
                      </p>
                      <p style={{ color: "white" }}>
                        ₹ 320 / person{" "}
                        <span>
                          <i
                            style={{
                              color: "white",
                              float: "right",
                              fontSize: "26px",
                            }}
                            class="bi bi-arrow-right-circle"
                          ></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="d-flex">
                <div class="cards-container">
                  <div className="cards-positions-container">
                    <img
                      className="card-img-container"
                      src="https://i.ibb.co/s2ZsK8J/lindsay-cash-Md-Dha-Fsn-CQ-unsplash-2-1.jpg"
                      alt=""
                    />
                    <span className="heart-icon">
                      <i
                        style={{ color: "white", fontSize: "20px" }}
                        class="bi bi-heart"
                      ></i>
                    </span>
                    <span className="location-icon">
                      <i
                        style={{ color: "white" }}
                        class="bi bi-geo-alt-fill"
                      ></i>
                      Gachibowli, 800 m away
                    </span>
                  </div>
                  <div className="card-position">
                    <div class="card-body">
                      <h5 style={{ color: "white" }} class="card-title">
                        Bubbles
                      </h5>
                      <p style={{ color: "white" }} class="card-text">
                        spa | manis & pedis | facials
                      </p>
                      <p style={{ color: "white" }}>
                        ₹ 240 / person{" "}
                        <span>
                          <i
                            style={{
                              color: "white",
                              float: "right",
                              fontSize: "26px",
                            }}
                            class="bi bi-arrow-right-circle"
                          ></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="cards-container">
                  <div className="cards-positions-container">
                    <img
                      className="card-img-container"
                      src="https://i.ibb.co/s2ZsK8J/lindsay-cash-Md-Dha-Fsn-CQ-unsplash-2-1.jpg"
                      alt=""
                    />
                    <span className="heart-icon">
                      <i
                        style={{ color: "white", fontSize: "20px" }}
                        class="bi bi-heart"
                      ></i>
                    </span>
                    <span className="location-icon">
                      <i
                        style={{ color: "white" }}
                        class="bi bi-geo-alt-fill"
                      ></i>
                      Gachibowli, 800 m away
                    </span>
                  </div>
                  <div className="card-position">
                    <div class="card-body">
                      <h5 style={{ color: "white" }} class="card-title">
                        Bubbles
                      </h5>
                      <p style={{ color: "white" }} class="card-text">
                        spa | manis & pedis | facials
                      </p>
                      <p style={{ color: "white" }}>
                        ₹ 240 / person{" "}
                        <span>
                          <i
                            style={{
                              color: "white",
                              float: "right",
                              fontSize: "26px",
                            }}
                            class="bi bi-arrow-right-circle"
                          ></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="cards-container">
                  <div className="cards-positions-container">
                    <img
                      className="card-img-container"
                      src="https://i.ibb.co/s2ZsK8J/lindsay-cash-Md-Dha-Fsn-CQ-unsplash-2-1.jpg"
                      alt=""
                    />
                    <span className="heart-icon">
                      <i
                        style={{ color: "white", fontSize: "20px" }}
                        class="bi bi-heart"
                      ></i>
                    </span>
                    <span className="location-icon">
                      <i
                        style={{ color: "white" }}
                        class="bi bi-geo-alt-fill"
                      ></i>
                      Gachibowli, 800 m away
                    </span>
                  </div>
                  <div className="card-position">
                    <div class="card-body">
                      <h5 style={{ color: "white" }} class="card-title">
                        Bubbles
                      </h5>
                      <p style={{ color: "white" }} class="card-text">
                        spa | manis & pedis | facials
                      </p>
                      <p style={{ color: "white" }}>
                        ₹ 240 / person{" "}
                        <span>
                          <i
                            style={{
                              color: "white",
                              float: "right",
                              fontSize: "26px",
                            }}
                            class="bi bi-arrow-right-circle"
                          ></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="cards-container">
                  <div className="cards-positions-container">
                    <img
                      className="card-img-container"
                      src="https://i.ibb.co/s2ZsK8J/lindsay-cash-Md-Dha-Fsn-CQ-unsplash-2-1.jpg"
                      alt=""
                    />
                    <span className="heart-icon">
                      <i
                        style={{ color: "white", fontSize: "20px" }}
                        class="bi bi-heart"
                      ></i>
                    </span>
                    <span className="location-icon">
                      <i
                        style={{ color: "white" }}
                        class="bi bi-geo-alt-fill"
                      ></i>
                      Gachibowli, 800 m away
                    </span>
                  </div>
                  <div className="card-position">
                    <div class="card-body">
                      <h5 style={{ color: "white" }} class="card-title">
                        Bubbles
                      </h5>
                      <p style={{ color: "white" }} class="card-text">
                        spa | manis & pedis | facials
                      </p>
                      <p style={{ color: "white" }}>
                        ₹ 240 / person{" "}
                        <span>
                          <i
                            style={{
                              color: "white",
                              float: "right",
                              fontSize: "26px",
                            }}
                            class="bi bi-arrow-right-circle"
                          ></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              {/* <img width={700} src="..." class="d-block w-100" alt="..."/> */}

              <div class="d-flex">
                <div class="cards-container">
                  <div className="cards-positions-container">
                    {/* <img className="card-img-container" src="https://i.ibb.co/sPtr8YY/jeppe-monster-T-g-TN3-Po9-RQ-unsplash-1-3.jpg" alt="" /> */}

                    <div
                      id="carouselExampleDark"
                      class="carousel carousel-dark slide"
                    >
                      <div class="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target="#carouselExampleDark"
                          data-bs-slide-to="0"
                          class="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleDark"
                          data-bs-slide-to="1"
                          aria-label="Slide 2"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleDark"
                          data-bs-slide-to="2"
                          aria-label="Slide 3"
                        ></button>
                      </div>
                      <div class="carousel-inner">
                        <div
                          class="carousel-item active"
                          data-bs-interval="10000"
                        >
                          <img src="..." class="d-block w-100" alt="..." />
                          <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>
                              Some representative placeholder content for the
                              first slide.
                            </p>
                          </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                          <img src="..." class="d-block w-100" alt="..." />
                          <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>
                              Some representative placeholder content for the
                              second slide.
                            </p>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <img src="..." class="d-block w-100" alt="..." />
                          <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>
                              Some representative placeholder content for the
                              third slide.
                            </p>
                          </div>
                        </div>
                      </div>
                      <button
                        class="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide="prev"
                      >
                        <span
                          class="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button
                        class="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide="next"
                      >
                        <span
                          class="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                    </div>

                    <span className="heart-icon">
                      <i
                        style={{ color: "white", fontSize: "20px" }}
                        class="bi bi-heart"
                      ></i>
                    </span>
                    <span className="location-icon">
                      <i
                        style={{ color: "white" }}
                        class="bi bi-geo-alt-fill"
                      ></i>
                      Banjara Hills, 1.8 km away
                    </span>
                  </div>
                  <div className="card-position">
                    <div class="card-body">
                      <h5 style={{ color: "white" }} class="card-title">
                        Hadeed’s
                      </h5>
                      <p style={{ color: "white" }} class="card-text">
                        hairstyling | makeup | spa{" "}
                      </p>
                      <p style={{ color: "white" }}>
                        ₹ 450 / person{" "}
                        <span>
                          <i
                            style={{
                              color: "white",
                              float: "right",
                              fontSize: "26px",
                            }}
                            class="bi bi-arrow-right-circle"
                          ></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="cards-container">
                  <div className="cards-positions-container">
                    <img
                      className="card-img-container"
                      src="https://i.ibb.co/sPtr8YY/jeppe-monster-T-g-TN3-Po9-RQ-unsplash-1-3.jpg"
                      alt=""
                    />
                    <span className="heart-icon">
                      <i
                        style={{ color: "white", fontSize: "20px" }}
                        class="bi bi-heart"
                      ></i>
                    </span>
                    <span className="location-icon">
                      <i
                        style={{ color: "white" }}
                        class="bi bi-geo-alt-fill"
                      ></i>
                      Banjara Hills, 1.8 km away
                    </span>
                  </div>
                  <div className="card-position">
                    <div class="card-body">
                      <h5 style={{ color: "white" }} class="card-title">
                        Hadeed’s
                      </h5>
                      <p style={{ color: "white" }} class="card-text">
                        hairstyling | makeup | spa{" "}
                      </p>
                      <p style={{ color: "white" }}>
                        ₹ 450 / person{" "}
                        <span>
                          <i
                            style={{
                              color: "white",
                              float: "right",
                              fontSize: "26px",
                            }}
                            class="bi bi-arrow-right-circle"
                          ></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="cards-container">
                  <div className="cards-positions-container">
                    <img
                      className="card-img-container"
                      src="https://i.ibb.co/sPtr8YY/jeppe-monster-T-g-TN3-Po9-RQ-unsplash-1-3.jpg"
                      alt=""
                    />
                    <span className="heart-icon">
                      <i
                        style={{ color: "white", fontSize: "20px" }}
                        class="bi bi-heart"
                      ></i>
                    </span>
                    <span className="location-icon">
                      <i
                        style={{ color: "white" }}
                        class="bi bi-geo-alt-fill"
                      ></i>
                      Banjara Hills, 1.8 km away
                    </span>
                  </div>
                  <div className="card-position">
                    <div class="card-body">
                      <h5 style={{ color: "white" }} class="card-title">
                        Hadeed’s
                      </h5>
                      <p style={{ color: "white" }} class="card-text">
                        hairstyling | makeup | spa{" "}
                      </p>
                      <p style={{ color: "white" }}>
                        ₹ 450 / person{" "}
                        <span>
                          <i
                            style={{
                              color: "white",
                              float: "right",
                              fontSize: "26px",
                            }}
                            class="bi bi-arrow-right-circle"
                          ></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="cards-container">
                  <div className="cards-positions-container">
                    <img
                      className="card-img-container"
                      src="https://i.ibb.co/sPtr8YY/jeppe-monster-T-g-TN3-Po9-RQ-unsplash-1-3.jpg"
                      alt=""
                    />
                    <span className="heart-icon">
                      <i
                        style={{ color: "white", fontSize: "20px" }}
                        class="bi bi-heart"
                      ></i>
                    </span>
                    <span className="location-icon">
                      <i
                        style={{ color: "white" }}
                        class="bi bi-geo-alt-fill"
                      ></i>
                      Banjara Hills, 1.8 km away
                    </span>
                  </div>
                  <div className="card-position">
                    <div class="card-body">
                      <h5 style={{ color: "white" }} class="card-title">
                        Hadeed’s
                      </h5>
                      <p style={{ color: "white" }} class="card-text">
                        hairstyling | makeup | spa{" "}
                      </p>
                      <p style={{ color: "white" }}>
                        ₹ 450 / person{" "}
                        <span>
                          <i
                            style={{
                              color: "white",
                              float: "right",
                              fontSize: "26px",
                            }}
                            class="bi bi-arrow-right-circle"
                          ></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NewCard;
