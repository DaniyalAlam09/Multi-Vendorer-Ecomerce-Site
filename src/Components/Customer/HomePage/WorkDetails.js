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
        <div className="container row text-center justify-content-center">
          <div className="card col-xl-4 col-sm-6 mb-5 block text-center">
            <div className="ship-style">
              <UilTruck className="icons" />
              <h6>Shipping</h6>
              <p>Shop Owners Provide Delivery Options as well.</p>
              <a href="#" class="link-secondary learn-more">
                Learn more
              </a>
            </div>
          </div>
          <div className="card  col-xl-4 col-sm-6 mb-5 block text-center">
            <div className="ship-style">
              <UilTransaction className="icons" />
              <h6>Safe Payment</h6>
              <p>Suport product online all payment Options as well.</p>
              <a href="#" class="link-secondary learn-more">
                Learn more
              </a>
            </div>
          </div>
          <div className="card col-xl-4 col-sm-6 mb-5 block text-center">
            <div className="ship-style">
              <UilHeadphonesAlt className="icons" />
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
