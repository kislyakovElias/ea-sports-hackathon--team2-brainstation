import React from "react";
import "./AppPage.scss";
import Slider from "../components/slider/Slider";

import ParalaxBottom from "../components/paralaxBottom/ParalaxBottom";
import GreenBox from "../components/greenBox/GreenBox";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import FAQs from "../components/faqs/FAQs";
import ConnectFriends from "../components/connectFriends/ConnectFriends";
import IntroducingPlay from "../components/introducingPlay/IntroducingPlay";
import Discover from "../components/discover/Discover";
const AppPage = () => {
  return (
    <>
      <Header />
      <Slider />
      <IntroducingPlay />
      <GreenBox />
      <Discover />
      <ConnectFriends />
      <div className="paralax">
        <ParalaxBottom />
      </div>
      <FAQs />
      <Footer />
    </>
  );
};

export default AppPage;
