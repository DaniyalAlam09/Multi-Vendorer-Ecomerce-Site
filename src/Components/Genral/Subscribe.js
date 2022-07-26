import React from "react";
import { UilEnvelopeAlt } from "@iconscout/react-unicons";

function Subscribe() {
  return (
    <div className="container heading">
      <div className="row  justify-content-around">
      <div className="containercol-xl-6 col-sm-6 mb-5 ">
        <h3>Don’t miss our update.</h3>
        <h3>Subscribe us for more info </h3>
      </div>
      <div className="container col-xl-6 col-sm-6 mb-5 ">
        <div className="input-group mail">
          <UilEnvelopeAlt className="email-icon" />
          <input
            type="text"
            className="form-control "
            placeholder="Enter your email address"
            aria-label="email"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button className="start" type="button">
              Get Started
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Subscribe;
