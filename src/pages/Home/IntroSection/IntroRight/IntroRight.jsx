import React from "react";
import "./IntroRight.scss";
import ComponentButton from "../../../../reusableСomponents/Button/ComponentButton";
import IntroRightAuxiliary from "./IntroRightAuxiliary/IntroRightAuxiliary";
import stars_img from "../../../../assets/img/Footer_img/stars_2.svg"

const IntroRight = () => {
  return (
    <section className="intro-right">
      <div className="intro-right__wrapper">
        <img className="intro-right__stars" src={stars_img} alt="stars_img" />
        <h5 className="intro-right__heading-secondary">welcome</h5>

        <h2 className="intro-right__heading-primary">
          <span className="intro-right__heading-primary-part">Hi, meet</span>
          <span className="intro-right__heading-primary-part">TreeHouse.</span>
        </h2>

        <p className="intro-right__description">
          Mindfully crafted gender-neutral children's clothing focused on your
          little one and designed with great care for our planet and the people
          on it.
        </p>

        <ComponentButton
          link="/#"
          label="READ MORE"
          color="rgba(0, 0, 0, 0.05)"
          textColor="#111"
        />
      </div>

      <div className="intro-right__auxiliary-wrapper">
        <IntroRightAuxiliary />
      </div>
    </section>
  );
};

export default IntroRight;
