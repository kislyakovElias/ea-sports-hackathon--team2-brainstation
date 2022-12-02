import React from "react";
import "./ParalaxBottom.scss";
import { Parallax, Background } from "react-parallax";

const ParalaxBottom = () => {
  return (
    <Background>
      <Parallax
        className="paralax_bottom"
        renderLayer={(percentage) => (
          <div
            className="paralax_bottom__img"
            style={{
              position: "absolute",

              right: "0%",
              top: "0%",
              width: percentage * 2200,
              height: percentage * 2000,
            }}
          />
        )}
      >
        <div className="paraBox-wrapper">
          <div className="paraBox-title">Get Your Game On</div>
          <div className="paraBox-text">
            <span>
              Discover and download games faster than ever thanks to our
              powerful optimized platform.
            </span>
          </div>
          <div className="paraBox-btn">
            <div className="paraBox-btn-holder">
              <button className="paraBox-btn-insideBtn">
                Download for Windows
              </button>
            </div>
            <div className="paraBox-btn-holder">
              <button className="paraBox-btn-insideBtn">
                Download Origin for Mac
              </button>
            </div>
          </div>
        </div>
      </Parallax>
    </Background>
  );
};

export default ParalaxBottom;
