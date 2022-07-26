import React from "react";
import { UilEnvelopeAlt } from "@iconscout/react-unicons";

function Subscribe() {
  return (
    <div className="container heading">
      <div className="row">
      <div className="container col-md-6 ">
        <h3>Don’t miss our update.</h3>
        <h3>Subscribe us for more info </h3>
      </div>
      <div className="container col-md-6 ">
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
