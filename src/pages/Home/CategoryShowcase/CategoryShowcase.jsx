import React from "react";
import "./CategoryShowcase.scss";
import { NavLink } from "react-router-dom";
import HeroSlider from "./ShowcaseSlider/ShowcaseSlider";

;

const CategoryShowcase = () => {
  return (
    <section className="category-showcase">
      <div className="category-showcase__intro">
        <p className="category-showcase__tagline">let’s make shopping</p>
        <h2 className="category-showcase__title">What are you looking for?</h2>
      </div>

      <div className="category-showcase__image-slider">
        <HeroSlider/>
      </div>

      <div className="category-showcase__links">
        <ul className="category-links">
          <li className="category-link-item">
            <NavLink to="/ourTeam" >Tops</NavLink>
          </li>
          <li className="category-link-item">
            <NavLink href="/bottoms">Bottoms</NavLink>
          </li>
          <li className="category-link-item">
            <NavLink href="/roompers">Roompers</NavLink>
          </li>
          <li className="category-link-item">
            <NavLink href="/hats">Hats</NavLink>
          </li>
          <li className="category-link-item">
            <NavLink href="/all-collection">All Collection</NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CategoryShowcase;
