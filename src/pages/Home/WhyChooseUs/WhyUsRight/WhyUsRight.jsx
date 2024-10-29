import React from "react";
import "./WhyUsRight.scss";
import left_images_1 from "../../../../assets/img/intro_section_img/WhyUsRight_img.webp";
import left_images_1_small from "../../../../assets/img/intro_section_img/WhyUsRight_img-2.webp";
import RightTextBlock from "./RightTextBlock/RightTextBlock";

const WhyUsRight = () => {
  return (
    <div className="why-us__right">
      <RightTextBlock />
      <section className="why-us__right-images">
        <picture>
          <source media="(max-width: 1024px)" srcSet={left_images_1_small} />
          <img
            className="why-us__right-image"
            src={left_images_1}
            alt="intro-section-img_1"
          />
        </picture>
      </section>
    </div>
  );
};

export default WhyUsRight;
