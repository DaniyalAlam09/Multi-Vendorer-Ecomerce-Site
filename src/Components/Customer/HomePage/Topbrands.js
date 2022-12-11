import React, { useEffect, useState } from "react";
import HeadPhone from "../Images/HeadPhone.png";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";

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
        <h3>Featured Brands</h3>
        <Link to="/allbrands" class="link-secondary see-all">
          All Brands
        </Link>
      </div>
      <div className="">
        <div className="row text-center">
          {brands?.slice(0, 4).map((brand) => (
            <div key={brands.indexOf(brand)} className="col-lg-3 col-md-6">
              <div class="card shadow-sm border-0 rounded">
                <div class="d-flex justify-content-between">
                  <img
                    src={`http://localhost:4000/${brand.imageUrl}`}
                    alt=""
                    // class="product-image"
                    style={{ width: "100%" }}
                  />
                  <div class="p-4">
                    <p class="mb-0">{`${brand.name}`}</p>
                    {/* <p class="small text-muted">CEO - Consultant</p> */}
                  </div>
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
