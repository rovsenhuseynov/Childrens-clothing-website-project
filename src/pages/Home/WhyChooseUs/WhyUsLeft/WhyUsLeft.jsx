import React from "react";
import "./WhyUsLeft";
import "./WhyUsLeft.scss";
import left_images_1 from "../../../../assets/img/WhyChooseUs_Image_Folder/left_images_1.webp";
import intro_img_3a from "../../../../assets/img/intro_section_img/image_2.webp";
import LeftTextBlock from "./LeftTextBlock/LeftTextBlock";

const WhyUsLeft = () => {
  return (
    <div className="why-us__left">
      <LeftTextBlock />

      <section className="why-us-left-images">
        <img
          className="why-us__left-image-1"
          src={left_images_1}
          alt="intro-section-img_1"
        />
        <img
          className="why-us__left-image-3"
          src={intro_img_3a}
          alt="intro-section-img_3"
        />
        <h4 className="why-us__left-text">TreeHouse</h4>
      </section>
    </div>
  );
};

export default WhyUsLeft;
