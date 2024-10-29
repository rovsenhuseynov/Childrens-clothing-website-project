import React from "react";
import "./RightTextBlock.scss";

const RightTextBlock = () => {
  return (
    <section className="why-us__right-text-block">
      <div className="why-us__right-details">
        <div className="why-us__right-detail">
          <div className="why-us__right-detail-title">
            <h3 className="why-us__right-detail-title-number">3</h3>
            <h3 className="why-us__right-detail-title-text">
              The highest quality
            </h3>
          </div>

          <p className="why-us__right-detail-description">
            We use only he highest quality sustainable fabrics, including
            GOTS-certified organic cotton and OEKO-TEX STANDARD 100 linen, to
            ensure your child's delicate skin is cared for.
          </p>
        </div>

        <div className="why-us__right-detail">
          <div className="why-us__right-detail-title">
            <h3 className="why-us__right-detail-title-number">4</h3>
            <h3 className="why-us__right-detail-title-text">
              woman owned brand
            </h3>
          </div>

          <p className="why-us__right-detail-description">
            When you choose us, you're supporting an ethical and sustainable
            small business owned by a woman. We don't just talk the talk, we
            walk the walk.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RightTextBlock;
