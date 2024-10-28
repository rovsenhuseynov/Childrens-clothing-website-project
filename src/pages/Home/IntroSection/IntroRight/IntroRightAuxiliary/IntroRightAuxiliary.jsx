import React from "react";
import "./IntroRightAuxiliary.scss";
import Oak_leaf from "../../../../../assets/img/oak_leaf/oak_leaf1.webp";

function IntroRightAuxiliary() {
  return (
    <div className="intro-right__auxiliary">
      <img
        src={Oak_leaf}
        alt="Oak leaf"
        className="intro-right__auxiliary-img"
      />
    </div>
  );
}

export default IntroRightAuxiliary;
