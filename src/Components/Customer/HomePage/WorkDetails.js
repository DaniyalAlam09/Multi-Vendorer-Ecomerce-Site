import React from "react";
import {
  UilTruck,
  UilTransaction,
  UilHeadphonesAlt,
  UilUserCircle,
} from "@iconscout/react-unicons";

function WorkDetails() {
  return (
    <div className="">
      <div className="heading container pt-4">
        <h3>How Its works</h3>
        <div className="container heading2 row text-center justify-content-center">
          <div className="col-xl-4 col-sm-6 mb-5 block">
            <UilTruck className="icons" />
            <div className="ship-style">
              <h6>Shipping</h6>
              <p>Shop Owners Provide Delivery Options as well.</p>
              <a href="#" class="link-secondary learn-more">
                Learn more
              </a>
            </div>
          </div>
          <div className=" col-xl-4 col-sm-6 mb-5 block">
            <UilTransaction className="icons" />
            <div className="ship-style">
              <h6>Safe Payment</h6>
              <p>Suport product online all payment Options as well.</p>
              <a href="#" class="link-secondary learn-more">
                Learn more
              </a>
            </div>
          </div>
          <div className="col-xl-4 col-sm-6 mb-5 block">
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
    </div>
  );
}

export default WorkDetails;
