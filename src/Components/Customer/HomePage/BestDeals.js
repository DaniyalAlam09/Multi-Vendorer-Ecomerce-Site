import React from "react";
import "./Resposive.css";

function BestDeals() {
  return (
    <div className="container heading">
      <h3>Get Best Deals Now</h3>
      <p>
        Get Our best deals in with speciality price for supoer your activity
      </p>
      <div className="row justify-content-around">
        <div className="left-deal rounded col-xl-6 col-sm-12 mb-12 ">
          <div className="deal-details rounded px-md-16">
            <p className="h3 deal-name">Samsung YOGA</p>
            <p className="deal-year">Top Product 2021</p>
            <p className="price">
              From <span className="price-range"> 820 $ .99</span>
            </p>
          </div>
        </div>
        <div className="right-deal rounded col-xl-5 col-sm-12 mb-12 ">
          <div className="rounded right1-deal col-xl-12 col-sm-12 mb-6">
            <p className="h5 deal-name-right">Samsung YOGA</p>
            <p className="deal-year-right">Top Product 2021</p>
            <p className="price-right">
              From <span className="price-range-right"> 820 $ .99</span>
            </p>
          </div>
          <div className="rounded right2-deal col-xl-12 col-sm-12 mb">
            <p className="h5 deal-name-right">Samsung YOGA</p>
            <p className="deal-year-right">Top Product 2021</p>
            <p className="price-right">
              From <span className="price-range-right"> 820 $ .99</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestDeals;
