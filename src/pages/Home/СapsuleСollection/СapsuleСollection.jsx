import React from "react";
import "./СapsuleСollection.scss";
import collection_image from "../../../assets/img/СapsuleСollection_Img/capsule-collection__image.webp";
import firework_icon from "../../../assets/img/svg/firework/firework_4/firework_4.png.svg";
import ComponentButton from "../../../reusableСomponents/Button/ComponentButton";
import collection_image_1 from "../../../assets/img/СapsuleСollection_Img/collection-right__element-img.webp";

const СapsuleСollection = () => {
  return (
    <div className="capsule-collection">
      <section className="collection-left">
        <div className="collection-left__wrapper-top">
          <img
            className="collection-left__firework-icon"
            src={firework_icon}
            alt="firework-icon"
          />
          <h2 className="collection-left__title">25% off</h2>

          <p className="collection-left__text">
            Save yourself the headache of endless shopping with our Capsule
            Collection. Buy all 14 pieces, save 25%, and enjoy endless outfit
            options, dressing your littles in no time!
          </p>
          <div className="collection-left__firework-button--shop">
            <ComponentButton link="/#" label="READ MORE" />
          </div>
        </div>

        <img
          className="collection-left__img"
          src={collection_image}
          alt="collection_image"
        />
      </section>

      <section className="collection-right">
        <img
          className="collection-right__img"
          src={collection_image_1}
          alt="collection_image"
        />

        <div className="collection-right__card">
          <div className="collection-right__card-context">
            <h2 className="collection-right__title">Style</h2>
            <img className="collection-right__card-firework" src="" alt="" />
            <p className="collection-right__text">
              The entire collection has a gender-neutral style and every item
              matches perfectly with the next.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default СapsuleСollection;
