import React from "react";
import "./WhyUs.scss";
import WhyUsRight from "./WhyUsRight/WhyUsRight";
import WhyUsLeft from "./WhyUsLeft/WhyUsLeft";

const WhyChooseUs = () => {
  return (
    <div className="why-us">
      <div className="container">
        <div className="why-us__content">
          <WhyUsLeft />
          <WhyUsRight />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
