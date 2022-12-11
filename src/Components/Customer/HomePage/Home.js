import React from "react";
import Navbar from "../../Genral/Navbar";
import BestDeals from "./BestDeals";
import HeroSection from "./HeroSection";
import WorkDetails from "./WorkDetails";
import FeaturedProducts from "./FeaturedProducts";
import Subscribe from "../../Genral/Subscribe";
import HotCollection from "./HotCollection";
import FeaturedCatagories from "./FeaturedCatagories";

import Hero from "../Images/Hero.png";
import Topbrands from "./Topbrands";

function Home() {
  return (
    <div>
      {/* <Navbar /> */}

      <HeroSection
        Name1={"Introducing New Samsung "}
        Name2={"Camera Product"}
        ImageSource={Hero}
      />
      <BestDeals />
      <WorkDetails />
      <FeaturedProducts />
      <FeaturedCatagories />
      <HotCollection />
      <Topbrands />
      <Subscribe />
    </div>
  );
}

export default Home;
