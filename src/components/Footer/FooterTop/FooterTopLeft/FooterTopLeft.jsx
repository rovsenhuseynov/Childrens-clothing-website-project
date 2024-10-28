import React from "react";
import "./FooterTopLeft.scss";
import Logo from "../../../../reusableСomponents/Logo/Logo";
import EmailInput from "../../../../reusableСomponents/EmailInput/EmailInput";
import top_stars from "../../../../assets/img/Footer_img/stars_1.png"

const FooterTopLeft = () => (
  <section className="footer__top-left">
    
    <div className="top-left__logo-wrapper">
      <Logo />
    </div>
    <img className="top-left__stars" src={top_stars} alt="" />
    <div className="top-left__email-input">
      <EmailInput
        label="Subscribe to our mailing list and get 15% off your first order"
        placeholder="Enter your email"
      />
    </div>
  </section>
);

export default FooterTopLeft;
