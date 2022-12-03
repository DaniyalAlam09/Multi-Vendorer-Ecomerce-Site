import React, { useEffect, useState } from "react";
import HeadPhone from "../Images/HeadPhone.png";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";

function FeaturedCatagories() {
  const [catagories, setCatagories] = React.useState([]);
  const getCategory = () => {
    axios
      .get("http://localhost:4000/category")
      .then((res) => {
        setCatagories(res.data.categories);
        console.log(res.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(function () {
    getCategory();
  }, []);
  return (
    <div className="heading container">
      <div className="featured-head">
        <h3>Featured Catagories</h3>
        <Link to="/allcatagories" class="link-secondary see-all">
          All Catagories
        </Link>
      </div>
      <div className="">
        <div className="row text-center">
          {catagories?.slice(0, 4).map((categorey) => (
            <div
              key={catagories.indexOf(categorey)}
              className="col-lg-3 col-md-6"
            >
              <div class="card shadow-sm border-0 rounded">
                <div class="">
                  <img
                    src={`http://localhost:4000/${categorey.imageUrl}`}
                    alt=""
                    class="product-image"
                  />
                  <div class="p-4">
                    <p class="mb-0">{`${categorey.name}`}</p>
                    {/* <p class="small text-muted">CEO - Consultant</p> */}
                    <Link to="/allcatagories" class="small-link">
                      Shop now
                    </Link>
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

export default FeaturedCatagories;
