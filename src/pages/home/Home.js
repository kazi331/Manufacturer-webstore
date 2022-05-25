import React from "react";
import BusinessStat from "../../shared/BusinessStat";
import Contact from "./Contact";
import FeaturedProducts from "./FeaturedProducts";
import Reviews from "./Reviews";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedProducts />
      <BusinessStat />
      <Reviews />
      <Contact/>
    </div>
  );
};

export default Home;
