import React from "react";
import "./Header.scss";
import Card from "./card/Card";
import HeaderNav from "./HeaderNav/HeaderNav";
import PromoBanner from "../../reusableСomponents/PromoBanner/PromoBanner";
import ComponentButton from "../../reusableСomponents/Button/ComponentButton";

const Header = () => {
  return (
    <div className="header">
      <PromoBanner />
      <HeaderNav />
      <div className="card-wrapper">
        <Card />
      </div>
      <div className="button-wrapper">
        <ComponentButton link="/shop" label="shop now" />
      </div>
    </div>
  );
};

export default Header;
