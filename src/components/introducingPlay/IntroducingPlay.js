import React from "react";
import "./IntroducingPlay.scss";

export default function IntroducingPlay() {
  return (
    <section className="introducingBox">
      <div className="introducingBox-bottom">
        <div className="introducingBox-bottom__title">
          <p className="introducingBox-bottom__text">Introducing</p>
        </div>
        <div className="introducingBox-bottom__picbox">
          <div className="introducingBox-bottom__picbox__pic"></div>
        </div>
        <div className="introducingBox-btn">
          <div className="introducingBoxbtn-holder">
            <button className="introducingBox-btn-insideBtn">
              Download for Windows
            </button>
          </div>
          <div className="introducingBox-btn-holder">
            <button className="introducingBox-btn-insideBtn">
              Download Origin for Mac
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
