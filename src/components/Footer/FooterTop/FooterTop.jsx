import React from "react";
import "./FooterTop.scss";
import FooterTopLeft from "./FooterTopLeft/FooterTopLeft";
import FooterTopRight from "./FooterTopRight/FooterTopRight";
import Divider from "../../../reusableСomponents/Divider/Divider";

const FooterTop = () => {
  return (
    <section className="footer__top-section">
      <FooterTopLeft />
      <div className="ADG">
      <Divider />
      </div>
   
      <FooterTopRight />
    </section>
  );
};

export default FooterTop;
