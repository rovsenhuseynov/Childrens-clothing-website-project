import React from "react";
import { NavLink } from "react-router-dom";
import logo_img from "../../assets/img/Logo/logo_leaf.svg";
import "./Logo.scss";

function Logo() {
  return (
    <div className="logo">
      <div className="header-nav__logo">
        <NavLink to="/">
          <img src={logo_img} alt="logo" className="header-nav__img" />
        </NavLink>
        <h5 className="header-nav__context">TreeHouse</h5>
      </div>
    </div>
  );
}

export default Logo;
