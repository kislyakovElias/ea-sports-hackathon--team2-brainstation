import React from "react";
import "./Header.scss";
import logo from "../../assets/logo/logo.jpg";
import threedots from "../../assets/icons/menu-dots.svg";
import downArrow from "../../assets/icons/arrow.svg";
import eaLogo from "../../assets/icons/EA.png";
import profile from "../../assets/icons/Profile.png";
import qmark from "../../assets/icons/Qmark.png";
export default function Header() {
  return (
    <>
      <section className="header">
        <div className="header-top">
          <div className="header-top__logo">
            <img className="header-top__logo-img" src={profile} alt="ea-logo" />
            <img className="header-top__logo-img" src={qmark} alt="ea-logo" />
            <img className="header-top__logo-img" src={eaLogo} alt="ea-logo" />
          </div>
        </div>
        <div className="header-down">
          <img
            className="header__threedots"
            src={threedots}
            alt="ea-three-dots"
          />
          <img className="header-logo" src={logo} alt="ea-logo" />

          <ul className="header-list-wrapper">
            <li className="header-list">EA APP</li>
            <img className="header__arrow" src={downArrow} alt="ea-arrow" />
            <li className="header-list">Games</li>
            <img className="header__arrow" src={downArrow} alt="ea-arrow" />
            <li className="header-list">More Experiences</li>
            <img className="header__arrow" src={downArrow} alt="ea-arrow" />
            <li className="header-list">About</li>
            <img className="header__arrow" src={downArrow} alt="ea-arrow" />
            <a href="#faq">
              <li className="header-list">FAQs</li>
            </a>
          </ul>
        </div>
      </section>
    </>
  );
}
