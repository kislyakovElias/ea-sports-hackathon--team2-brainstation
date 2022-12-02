import React from "react";
import "./Slider.scss";

const Slider = () => {
  return (
    <>
      <div className="slider">
        <div className="slider__slide">
          <div className="slider__slide__picture img1"></div>
        </div>
        <div className="slider__slide">
          <div className="slider__slide__picture img2"></div>
        </div>
        <div className="slider__slide">
          <div className="slider__slide__picture img3"></div>
        </div>
        <div className="slider__slide">
          <div className="slider__slide__picture img4"></div>
        </div>
        <div className="slider__slide">
          <div className="slider__slide__picture img5"></div>
        </div>
        <div className="slider__slide">
          <div className="slider__slide__picture img6"></div>
        </div>
      </div>
    </>
  );
};

export default Slider;
