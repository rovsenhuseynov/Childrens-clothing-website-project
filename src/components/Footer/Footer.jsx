import React from "react";
import "./Footer.scss";
import FooterBottom from "./FooterBottom/FooterBottom";
import FooterTop from "./FooterTop/FooterTop";
import PaymentMethods from "./PaymentMethods/PaymentMethods";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__inner-container">
        <div className="footer__top-wrapper">
          <FooterTop />
        </div>

        <PaymentMethods />

        <div className="footer__bottom-wrapper">
          <FooterBottom />
        </div>
      </div>
    </div>
  );
};

export default Footer;
