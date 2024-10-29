import React from "react";
import IntroSection from "./IntroSection/IntroSection";
import WhyChooseUs from "./WhyChooseUs/WhyUs";
import CategoryShowcase from "./CategoryShowcase/CategoryShowcase";
import СapsuleСollection from "./СapsuleСollection/СapsuleСollection";

const Home = () => {
  return (
    <div className="home">
      <IntroSection />
      <WhyChooseUs />
      <CategoryShowcase />
      <СapsuleСollection />
    </div>
  );
};

export default Home;
