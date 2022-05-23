import React from "react";
import BusinessStat from "../../shared/BusinessStat";
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

      {/* <Footer/> */}
    </div>
  );
};

export default Home;
