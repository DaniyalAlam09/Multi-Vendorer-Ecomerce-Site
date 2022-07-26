import React from "react";
import {
  UilTruck,
  UilTransaction,
  UilHeadphonesAlt,
} from "@iconscout/react-unicons";

function WorkDetails() {
  return (
    <div className="heading container ">
      <h3>How Its works</h3>
      <div className="container heading2 row text-center justify-content-center">
        <div className="col-xl-3 col-sm-6 mb-5">
          <UilTruck className="icons" />
          <div className="ship-style">
            <h6>Shipping</h6>
            <p>Shop Owners Provide Delivery Options as well.</p>
            <a href="#" class="link-secondary learn-more">
              Learn more
            </a>
          </div>
        </div>
        <div className=" col-xl-3 col-sm-6 mb-5">
          <UilTransaction className="icons" />
          <div className="ship-style">
            <h6>Safe Payment</h6>
            <p>Suport product online all payment Options as well.</p>
            <a href="#" class="link-secondary learn-more">
              Learn more
            </a>
          </div>
        </div>
        <div className="ccol-xl-3 col-sm-6 mb-5">
          <UilHeadphonesAlt className="icons" />
          <div className="ship-style">
            <h6>Take Virtual Tour</h6>
            <p>Shop Owners Provide Delivery Options as well.</p>
            <a href="#" class="link-secondary learn-more">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkDetails;
