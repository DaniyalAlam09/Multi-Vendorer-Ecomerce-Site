import React from "react";
import "./Resposive.css";

function BestDeals() {
  return (
    <div className=" main-bestdeals ">
      <h3>Get Best Deals Now</h3>
      <p>
        Get Our best deals in with speciality price for supoer your activity
      </p>
      <div className="deals bd-highlight">
        <div className="left-deal col-sm rounded float-left">
          <div className="deal-details px-md-16">
            <p className="h5 deal-name">Samsung YOGA</p>
            <p className="deal-year">Top Product 2021</p>
            <p className="price">
              From <span className="price-range"> 820 $ .99</span>
            </p>
          </div>
        </div>
        <div className="col-sm right-deal rounded float-right">
          <div className="rounded right1-deal ">
            <p className="h6 deal-name-right">Samsung YOGA</p>
            <p className="deal-year-right">Top Product 2021</p>
            <p className="price-right">
              From <span className="price-range-right"> 820 $ .99</span>
            </p>
          </div>
          <div className="rounded right2-deal">
            <p className="h6 deal-name-right">Samsung YOGA</p>
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
