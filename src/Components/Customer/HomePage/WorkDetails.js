import React from "react";
import {
  UilTruck,
  UilTransaction,
  UilHeadphonesAlt,
} from "@iconscout/react-unicons";

function WorkDetails() {
  return (
    <div className=" main-bestdeals">
      <h3>How Its works</h3>
      <div className="container divider">
        <div className="shipping">
          <UilTruck className="icons" />
          <div className="ship-style">
            <h6>Shipping</h6>
            <p>
              Shop Owners Provide Delivery <br /> Options as well.
            </p>
            <a href="#" class="link-secondary learn-more">
              Learn more
            </a>
          </div>
        </div>
        <div className="shipping">
          <UilTransaction className="icons" />
          <div className="ship-style">
            <h6>Safe Payment</h6>
            <p>Suport product online all payment Options as well.</p>
            <a href="#" class="link-secondary learn-more">
              Learn more
            </a>
          </div>
        </div>
        <div className="shipping">
          <UilHeadphonesAlt className="icons" />
          <div className="ship-style">
            <h6>Take Virtual Tour</h6>
            <p>
              Shop Owners Provide Delivery <br /> Options as well.
            </p>
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
