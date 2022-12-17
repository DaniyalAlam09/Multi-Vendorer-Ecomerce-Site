import React, { useEffect, useState } from "react";
import HeadPhone from "../Images/HeadPhone.png";
import axios from "axios";
import { Link } from "react-router-dom";

import { Container } from "@material-ui/core";
import hero from "./assets/img/clients/client-1.png";
import hero2 from "./assets/img/clients/client-2.png";
import hero3 from "./assets/img/clients/client-4.png";
import hero4 from "./assets/img/clients/client-3.png";
import hero5 from "./assets/img/clients/client-5.png";
import hero6 from "./assets/img/clients/client-7.png";
import hero7 from "./assets/img/clients/client-8.png";

function Topbrands() {
  const [brands, setBrands] = React.useState([]);
  const getBrand = () => {
    axios
      .get("http://localhost:4000/brand")
      .then((res) => {
        setBrands(res.data.brand);
        console.log(res.data.brand);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(function () {
    getBrand();
  }, []);
  return (
    <div className="heading container">
      <div className="featured-head">
        <h3>Top Brands</h3>
        <Link to="/allbrands" class="link-secondary see-all">
          All Brands
        </Link>
      </div>
      <div className="">
        <div className="row text-center">
          {brands?.slice(0, 4).map((brand) => (
            <div key={brands.indexOf(brand)} className="col-lg-3 col-md-6">
              <div class="clients card block">
                <div class="swiper-slide justify-content-between">
                  <img
                    // src={`http://localhost:4000/${brand.imageUrl}`}
                    src={hero}
                    alt=""
                    // class="product-image"
                    // style={{ width: "100%" }}
                  />

                  {/* <div class="p-4">
                    <p class="mb-0">{`${brand.name}`}</p>
                    <p class="small text-muted">CEO - Consultant</p>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Topbrands;
