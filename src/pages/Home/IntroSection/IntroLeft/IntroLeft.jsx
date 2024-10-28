import React from "react";
import intro_img_1 from "../../../../assets/img/intro_section_img/intro_section_img_1.webp";
import intro_img_2 from "../../../../assets/img/intro_section_img/intro_section_img_2.webp";
import intro_img_3 from "../../../../assets/img/intro_section_img/intro_section_img_3.webp";
import "./IntroLeft.scss";

const IntroLeft = () => {
  return (
    <div className="container">
    <section className="intro-left">
      <img
        className="intro-section-img_1"
        src={intro_img_1}
        alt="intro-section-img_1"
      />

      <img
        className="intro-section-img_2"
        src={intro_img_2}
        alt="intro-section-img_2"
      />

      <img
        className="intro-section-img_3"
        src={intro_img_3}
        alt="intro-section-img_3"
      />
      <h4 className="intro-section-text">TreeHouse</h4>
    </section>
    </div>


  );
};

export default IntroLeft;
