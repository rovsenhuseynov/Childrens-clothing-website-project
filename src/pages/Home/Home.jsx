import React from "react";
import IntroSection from "./IntroSection/IntroSection";
import WhyChooseUs from "./WhyChooseUs/WhyUs";
import CategoryShowcase from "./CategoryShowcase/CategoryShowcase";

const Home = () => {
  return (
    <div className="home">
      <IntroSection />
      <WhyChooseUs />
      <CategoryShowcase />
    </div>
  );
};

export default Home;
