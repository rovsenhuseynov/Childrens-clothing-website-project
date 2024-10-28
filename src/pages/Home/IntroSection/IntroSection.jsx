import React from "react";
import "./IntroSection.scss";
import IntroRight from "./IntroRight/IntroRight";
import IntroLeft from "./IntroLeft/IntroLeft";

const IntroSection = () => {
  return (
    <div className="intro-section">
      {/* <div className="container"> */}
        <div className="intro-content">
          <IntroLeft />
          <IntroRight />
        </div>
      </div>
    // </div>
  );
};

export default IntroSection;
