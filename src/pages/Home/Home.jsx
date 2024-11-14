import React from "react";
import IntroSection from "./IntroSection/IntroSection";
import WhyChooseUs from "./WhyChooseUs/WhyUs";
import CategoryShowcase from "./CategoryShowcase/CategoryShowcase";
import СapsuleСollection from "./СapsuleСollection/СapsuleСollection";
import GetTheLook from "./GetTheLook/GetTheLook";
import ShopTheLookSlider from "./ShopTheLookSlider/ShopTheLookSlider";


const Home = () => {
  return (
    <div className="home">
      <IntroSection />
      <WhyChooseUs />
      <CategoryShowcase />
      <СapsuleСollection />
      <GetTheLook />
      <ShopTheLookSlider/>
    </div>
  );
};

export default Home;
