import React from "react";
import "./ConnectFriends.scss";

export default function ConnectFriends() {
  return (
    <section className="connectBox">
      <div className="connectBox-bottom">
        <div className="connectBox-bottom__title">
          <p className="connectBox-bottom__text">Connect with friends</p>
        </div>
        <div className="connectBox-bottom__textbox">
          <p className="connectBox-bottom__textbox__text">
            See what your friends are playing, and play together by linking your
            EA Account with your favourite gaming platforms.
          </p>
        </div>
        <div className="connectBox-bottom__imagebox">
          <div className="connectBox-bottom__imagebox-image image1"></div>
          <div className="connectBox-bottom__imagebox-image image2"></div>
          <div className="connectBox-bottom__imagebox-image image3"></div>
        </div>
      </div>
    </section>
  );
}
