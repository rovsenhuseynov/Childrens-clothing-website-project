import React from "react";
import "./ShopTheLookSlider.scss";
import CardSlider from "../../../reusableСomponents/SliderComponent/CardSlider";
import ShopTheLookSliderData from "./ShopTheLookSliderData";

const ShopTheLookSlider = () => {
  return (
    <div className="ShopTheLookSlider">
      <CardSlider slides={ShopTheLookSliderData} />
    </div>
  );
};

export default ShopTheLookSlider;
