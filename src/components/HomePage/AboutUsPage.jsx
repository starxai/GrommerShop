import React from "react";
// import Footer from "../Footer";
import about_us_img from "../images/about_us_img.png";
import about_us_img_one from "../images/about_us_img_one.png";
import about_us_img_two from "../images/about_us_img_two.png";
import about_us_img_three from "../images/about_us_img_three.png";
import Carousel from "./Carousel.jsx";
import Footer from "../Footer.jsx";
import "../css/AboutUs.css";

function AboutPage() {
  return (
    <div>
      <div className="about-us-img-container">
        <h2 className="about-us-heading">
          The Story Behind Our Scissors' Symphony
        </h2>
        <img src={about_us_img} alt="groomer" className="about-us-main-img" />
      </div>
      <div className="fancy-card-container container">
        <div className="fancy-card">
          <h2 className="fancy-card-heading-two">what is groomer?</h2>
          <div className="fancy-card-img-conainer">
            <svg
              className="fancy-card-svg"
              width="87"
              height="87"
              viewBox="0 0 87 87"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="38.5" width="8" height="87" fill="white" />
              <rect
                y="48.5"
                width="8"
                height="87"
                transform="rotate(-90 0 48.5)"
                fill="white"
              />
              <rect
                x="9.20508"
                y="16.2764"
                width="8"
                height="87"
                transform="rotate(-45 9.20508 16.2764)"
                fill="white"
              />
              <rect
                width="8"
                height="87"
                transform="matrix(0.707107 0.707107 0.707107 -0.707107 9.20508 70.7236)"
                fill="white"
              />
            </svg>

            <img
              src={about_us_img_one}
              alt="groomer"
              className="fancy-card-img"
            />
          </div>
          <div className="fancy-card-text">
            <h2 className="fancy-card-heading">what is groomer?</h2>
            <p className="fancy-card-para">
              Groomer is revolutionizing India's salon industry by seamlessly
              connecting consumers and service providers through a hassle-free
              mobile app. Our platform simplifies appointment scheduling, making
              personal care routines more efficient and enjoyable.
            </p>
          </div>
        </div>
      </div>
      <div className="fancy-card-container container">
        <div className="fancy-card inverted-fancy-card">
          <h2 className="fancy-card-heading-two">
            What are we trying to achieve?
          </h2>
          <div className="fancy-card-img-conainer inverted-card-img-container">
            <svg
              className="fancy-card-svg inverted-card-svg"
              width="87"
              height="87"
              viewBox="0 0 87 87"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="38.5" width="8" height="87" fill="white" />
              <rect
                y="48.5"
                width="8"
                height="87"
                transform="rotate(-90 0 48.5)"
                fill="white"
              />
              <rect
                x="9.20508"
                y="16.2764"
                width="8"
                height="87"
                transform="rotate(-45 9.20508 16.2764)"
                fill="white"
              />
              <rect
                width="8"
                height="87"
                transform="matrix(0.707107 0.707107 0.707107 -0.707107 9.20508 70.7236)"
                fill="white"
              />
            </svg>

            <img
              src={about_us_img_two}
              alt="groomer"
              className="fancy-card-img"
            />
          </div>
          <div className="fancy-card-text inverted-card-text">
            <h2 className="fancy-card-heading">
              What are we trying to achieve?
            </h2>
            <p className="fancy-card-para">
              We aim to be a resource for salon owners and customers,
              establishing a seamless platform for business growth and a
              hassle-free customer experience. Our mission is to make beauty
              accessible, reliable, and enjoyable for all.
            </p>
          </div>
        </div>
      </div>
      <div className="fancy-card-container container">
        <div className="fancy-card">
          <h2 className="fancy-card-heading-two">Vision of groomer!</h2>
          <div className="fancy-card-img-conainer">
            <svg
              className="fancy-card-svg"
              width="87"
              height="87"
              viewBox="0 0 87 87"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="38.5" width="8" height="87" fill="white" />
              <rect
                y="48.5"
                width="8"
                height="87"
                transform="rotate(-90 0 48.5)"
                fill="white"
              />
              <rect
                x="9.20508"
                y="16.2764"
                width="8"
                height="87"
                transform="rotate(-45 9.20508 16.2764)"
                fill="white"
              />
              <rect
                width="8"
                height="87"
                transform="matrix(0.707107 0.707107 0.707107 -0.707107 9.20508 70.7236)"
                fill="white"
              />
            </svg>

            <img
              src={about_us_img_three}
              alt="groomer"
              className="fancy-card-img"
            />
          </div>
          <div className="fancy-card-text">
            <h2 className="fancy-card-heading">Vision of groomer!</h2>
            <p className="fancy-card-para">
              Our vision is to revolutionise salon bookings in India with
              Groomer, making every salon visit stress-free. Our
              technology-driven solutions aim to broaden salon owners' reach and
              enhance their business. We foresee a future where everyone can
              access beauty services and support local salons easily.
            </p>
          </div>
        </div>
      </div>
      <div className="carousel-container-about-us">
        <h2 className="word-by-founders">A Word By The Founders</h2>
        <Carousel type="reviews">
          {[
            {
              review:
                '"Incredibly welcoming salon with attentive staff and stylish ambiance. My stylist understood my needs perfectly, delivering an exceptional haircut that exceeded expectations. The attention to detail and precision were impressive, leaving me feeling confident and rejuvenated. This salon is a true gem for top-notch grooming services. Highly recommend!"',
              user: "Praveen",
            },
            {
              review:
                '"Incredibly welcoming salon with attentive staff and stylish ambiance. My stylist understood my needs perfectly, delivering an exceptional haircut that exceeded expectations. The attention to detail and precision were impressive, leaving me feeling confident and rejuvenated. This salon is a true gem for top-notch grooming services. Highly recommend!"',
              user: "Praveen",
            },
            {
              review: '"Amazing user experience"',
              user: "Sumanth",
            },
            {
              review:
                '"Incredibly welcoming salon with attentive staff and stylish ambiance. My stylist understood my needs perfectly, delivering an exceptional haircut that exceeded expectations. The attention to detail and precision were impressive, leaving me feeling confident and rejuvenated. This salon is a true gem for top-notch grooming services. Highly recommend!"',
              user: "Praveen",
            },
            {
              review:
                '"Incredibly welcoming salon with attentive staff and stylish ambiance. My stylist understood my needs perfectly, delivering an exceptional haircut that exceeded expectations. The attention to detail and precision were impressive, leaving me feeling confident and rejuvenated. This salon is a true gem for top-notch grooming services. Highly recommend!"',
              user: "Praveen",
            },
          ].map((data, index) => {
            return (
              <div key={index} className="review-home-page">
                <p className="review-text">{data.review}</p>
                <p className="review-user">-{data.user}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
      <Footer />
    </div>
  );
}
export default AboutPage;
