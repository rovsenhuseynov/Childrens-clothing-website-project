import React from "react";
import "./PromoBanner.scss";

const PromoBanner = () => {
  return (
    <div className="promo-banner">
      <div className="promo-banner__block">
        <div className="promo-banner__element ">
          Get 25% off buying the entire capsule collection
        </div>
        <div className="promo-banner__element vertical-bar"></div>
        <div className="promo-banner__element ">
          Subscribe to us and get 15% off your first order
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
