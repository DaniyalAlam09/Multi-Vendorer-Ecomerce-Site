import React from "react";
import Navbar from "../../Genral/Navbar";
import HeroSection from "../HomePage/HeroSection";
import ShopHero from "./Images/ShopHero.png";
import Shops from "./Shops";

function ShopsPage() {
  return (
    <div>
      {/* <Navbar /> */}
      <HeroSection Name1={"Shops"} ImageSource={ShopHero} />
      <Shops />
    </div>
  );
}

export default ShopsPage;
