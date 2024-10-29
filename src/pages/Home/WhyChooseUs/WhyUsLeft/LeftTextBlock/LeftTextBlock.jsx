import React from "react";
import "./LeftTextBlock.scss";

const LeftTextBlock = () => {
  return (
    <div className="why-us__left-text-block">
      <p className="why-us__left-heading">Our care</p>

      <h2 className="why-us__left-title-parts">
        <span className="why-us__left-title-part left-title-part-1 ">
          We prioritize
        </span>
        <span className="why-us__left-title-part left-title-part-2 ">
          your peace of mind.
        </span>
      </h2>

      <div className="why-us__left-details">
        <div className="why-us__left-detail">
          <div className="why-us__left-detail-title">
            <h3 className="why-us__left-detail-title-number">1</h3>
            <h3 className="why-us__left-detail-title-text">Saving your time</h3>
          </div>

          <p className="why-us__left-detail-description">
            Each item in our collection seamlessly matches the next. Invest in a
            few pieces or the entire line for a season's worth of clothing
            options, designed to last and be loved by others once your little
            one has grown.
          </p>
        </div>

        <div className="why-us__left-detail">
          <div className="why-us__left-detail-title">
            <h3 className="why-us__left-detail-title-number">2</h3>
            <h3 className="why-us__left-detail-title-text">
              Ethical manufacturing
            </h3>
          </div>

          <p className="why-us__left-detail-description">
            Our commitment to ethical production isn’t just rhetoric. We place
            the welfare of workers and the environment at the forefront of our
            decision making. Always.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftTextBlock;
