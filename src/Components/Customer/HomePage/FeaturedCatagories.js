import React, { useEffect, useState } from "react";
import HeadPhone from "../Images/HeadPhone.png";
import axios from "axios";
import { Link } from "react-router-dom";

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
      <div className="heading2">
        <div className="row text-center justify-content-start">
          {catagories?.map((categorey) => (
            <div
              key={catagories.indexOf(categorey)}
              className=" col-xl-3 col-sm-6 mb-5"
            >
              <div className="catagory-style row thumbnail d-flex justify-content-around">
                <div>
                  <h6 className="catagory">{`${categorey.name}`}</h6>
                  {/* <p className="qty">{`${categorey.qty}`}</p> */}
                  <Link to="/allcatagories" class="">
                    Shop now+
                  </Link>
                </div>
                <div className="empty"></div>
                <img
                  className="catagory-image"
                  src={`http://localhost:4000/${categorey.imageUrl}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedCatagories;
