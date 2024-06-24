import React from "react";
// import { Carousel } from 'bootstrap';
import { Carousel } from "react-bootstrap";

function Carouselcomp({ images }) {
  return (
    <>
      {/* <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index} style={{ width: '30%' }}>
            <img className="d-block w-100" src={image.src} alt={image.alt} />
            <Carousel.Caption>
              <h3>{image.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel> */}

      <div className="d-flex justify-content-between">
 
        {images.map((imagear, index) => (
          
          <Carousel key={index} style={{ width: "30%" }}>
            {imagear.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image.src}
                //   alt={image.alt}
                />
                <Carousel.Caption>
                  <h3>{image.caption}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        
          
        ))}
      

      </div>
    </>
  );
}

export default Carouselcomp;