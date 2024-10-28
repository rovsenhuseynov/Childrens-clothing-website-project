import React from "react";
import "./PaymentMethods.scss";
import pay_pal from "../../../assets/img/Footer_img/Pay_pal.svg";
import visa from "../../../assets/img/Footer_img/Visa_9c1.svg";
import gPay from "../../../assets/img/Footer_img/G_Pay.svg";
import applePay from "../../../assets/img/Footer_img/Apple_Pay.svg";
import shopPal from "../../../assets/img/Footer_img/Shop-Pay-Logo-Vector.svg";

import footer_img1 from "../../../assets/img/Footer_img/maple_leaf_1.png";
import footer_img2 from "../../../assets/img/Footer_img/oak_leaf_11.png";

const PaymentMethods = () => {
  return (
    <div className="payment-methods__block">
      <img src={footer_img1} alt="" className="payment-methods__img1 " />

      <div className="block__elements-inner">
        <div className="payment-methods__title-block">
          <h5>Payment methods</h5>
        </div>

        <div className="payment-methods__elements">
          <img src={pay_pal} alt="PayPal" className="elements__pay-pal-img" />
          <img src={visa} alt="Visa" className="elements__visa-img" />
          <img src={gPay} alt="Google Pay" className="elements__gPay-img" />
          <img
            src={applePay}
            alt="Apple Pay"
            className="elements__apple-pay-img"
          />
          <img
            src={shopPal}
            alt="Shop Pay"
            className="elements__shop-pay-img"
          />
        </div>
      </div>

      <img src={footer_img2} alt="" className="payment-methods__img2 " />
    </div>
  );
};

export default PaymentMethods;
