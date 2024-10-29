import React from "react";
import IntroSection from "./IntroSection/IntroSection";
import WhyChooseUs from "./WhyChooseUs/WhyUs";
import CategoryShowcase from "./CategoryShowcase/CategoryShowcase";
import СapsuleСollection from "./СapsuleСollection/СapsuleСollection";
import GetTheLook from "./GetTheLook/GetTheLook";

const Home = () => {
  return (
    <div className="home">
      <IntroSection />
      <WhyChooseUs />
      <CategoryShowcase />
      <СapsuleСollection />
      <GetTheLook/>
    </div>
  );
};

export default Home;
