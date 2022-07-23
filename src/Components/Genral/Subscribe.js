import React from "react";
import { UilEnvelopeAlt } from "@iconscout/react-unicons";

function Subscribe() {
  return (
    <div className="container row subscribe-main">
      <div className="col-md-6 subscribe-left">
        <h3>Don’t miss our update.</h3>
        <h3>Subscribe us for more info </h3>
      </div>
      <div className="col-md-6 subscribe-right">
        <div className="input-group mail">
          <UilEnvelopeAlt className="email-icon"/>
          <input
            type="text"
            className="form-control "
            placeholder="Enter your email address"
            aria-label="Recipient's username"
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
  );
}

export default Subscribe;
