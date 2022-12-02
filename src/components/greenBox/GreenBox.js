import React from "react";
import "./GreenBox.scss";

export default function GreenBox() {
  return (
    <div className="green">
      <section className="greenBox">
        <div className="greenBox-wrapper">
          <div className="greenBox-title">Get Your Game On</div>
          <div className="greenBox-text">
            <span>
              Discover and download games faster than ever thanks to our
              powerful optimized platform.
            </span>
          </div>
          <div className="greenBox-btn">
            <div className="greenBox-btn-holder">
              <button className="greenBox-btn-insideBtn">
                Download for Windows
              </button>
            </div>
            <div className="greenBox-btn-holder">
              <button className="greenBox-btn-insideBtn">
                Download Origin for Mac
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
