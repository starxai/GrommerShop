import { useEffect, useState, useRef } from "react";
import "../css/Carousel.css";

export default function Carousel({ children: slides, type = "image slider" }) {
  const [pos, setPos] = useState(0);
  const imageSliderRef = useRef(null);
  const totalSlides = slides.length - 2;
  function next() {
    if (pos === totalSlides) {
      imageSliderRef.current.style.transition = "transform 600ms ease-in-out";
      setPos(pos + 1);
      setTimeout(() => {
        imageSliderRef.current.style.transition = "none";
        setPos(1);
      }, 700);
      return;
    }
    imageSliderRef.current.style.transition = "transform 600ms ease-in-out";
    setPos(pos + 1);
  }
  function previous() {
    if (pos === 1) {
      imageSliderRef.current.style.transition = "transform 600ms ease-in-out";
      setPos(pos - 1);
      setTimeout(() => {
        imageSliderRef.current.style.transition = "none";
        setPos(totalSlides);
      }, 700);
      return;
    }
    imageSliderRef.current.style.transition = "transform 600ms ease-in-out";
    setPos(pos - 1);
  }

  useEffect(() => {
    let autoScroll;
    let timeout;
    if (imageSliderRef.current) {
      autoScroll = setInterval(() => {
        setPos((prevPos) => {
          if (prevPos === totalSlides) {
            imageSliderRef.current.style.transition =
              "transform 600ms ease-in-out";
            timeout = setTimeout(() => {
              if (imageSliderRef.current) {
                imageSliderRef.current.style.transition = "none";
              }
              setPos(1);
            }, 700);
            return prevPos + 1;
          } else {
            imageSliderRef.current.style.transition =
              "transform 600ms ease-in-out";
            return prevPos + 1;
          }
        });
      }, 4000);
    }
    return () => {
      clearInterval(autoScroll);
      clearTimeout(timeout);
    };
  }, [totalSlides]);

  return (
    <div className="carousel">
      <div
        ref={imageSliderRef}
        className="image-slider"
        style={{ transform: `translate(-${pos * 100}%)` }}
      >
        {slides}
      </div>
      {/* <button className="carousel-button carousel-right-btn" onClick={next}>
        <TbSquareRoundedChevronRightFilled size={40} />
      </button>
      <button className="carousel-button carousel-left-btn" onClick={previous}>
        <TbSquareRoundedChevronLeftFilled size={40} />
      </button> */}
      <div className="carousel-indicator-container">
        {Array(totalSlides)
          .fill(null)
          .map((_, index) => {
            return (
              <button
                className="carousel-indicators"
                onClick={() => {
                  imageSliderRef.current.style.transition =
                    "transform 600ms ease-in-out";
                  setPos(index + 1);
                }}
                style={
                  pos === index + 1
                    ? type === "image slider"
                      ? {
                          backgroundColor: "#ccbb8e",
                        }
                      : { backgroundColor: "black" }
                    : {
                        backgroundColor: "rgb(255,255,255,0.75)",
                      }
                }
                key={index}
              ></button>
            );
          })}
      </div>
    </div>
  );
}
