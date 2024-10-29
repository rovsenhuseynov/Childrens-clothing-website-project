import React from "react";
import better_img from "../../../assets/img/baby_shopping_1.png";
import "./GetTheLook.scss";


const GetTheLook = () => {
  return (
    <div className="getTheLook">
      <section className="getTheLook__buy-better">
        <img className="getTheLook__img" src={better_img} alt="Buy Better" />
        <h2 className="getTheLook__text">
          Buy less, <span className="restructuring-part">buy better</span>
        </h2>
      </section>
    </div>
  );
};

export default GetTheLook;
