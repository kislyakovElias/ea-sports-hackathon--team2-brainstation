import React from "react";
import "./ParalaxTop.scss";
import { Parallax, Background } from "react-parallax";

const ParalaxTop = () => {
  return (
    <Parallax
      className="paralax_top"
      renderLayer={(percentage) => (
        <div
          className="paralax_top__img"
          style={{
            position: "absolute",

            right: "00%",
            top: "0%",
            width: percentage * 2200,
            height: percentage * 2000,
          }}
        />
      )}
    ></Parallax>
  );
};

export default ParalaxTop;
