import React from "react";
import "./ShopTheLookSlider.scss";
import CardSlider from "../../../reusableСomponents/SliderComponent/CardSlider";
import ShopTheLookSliderData from "./ShopTheLookSliderData";

const ShopTheLookSlider = () => {
  return (
    <div className="ShopTheLookSlider">
      <CardSlider slides={ShopTheLookSliderData}>
        {ShopTheLookSliderData.map((item) => (
          <div className="card" key={item.id}>
            <div className="card-image">
              <img src={item.imageUrl} alt={item.title} />
            </div>
            <div className="card-content">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-size">Размер: {item.size}</p>
              <p className="card-price">{item.price}</p>
            </div>
          </div>
        ))}
      </CardSlider>
    </div>
  );
};

export default ShopTheLookSlider;

