import React from "react";
import "./Homepage.css";
import Hero from "../Images/Hero.png";

function OtherHeroSections({ Name1, Name2, ImageSource }) {
  return (
    <div className="hero">
      <div className="container main row d-flex justify-content-around">
        <div className="left rounded col-md-6">
          <div className="h3">
            {" "}
            <span> {Name1}</span>

            <br />
            <span> {Name2} </span>
            {" "}
          </div>

          <p>
            <span>Samsung Galaxy S 20 pro max with camera 40 MP, get</span>
            {" "}

            <br />
            <span>bokeh speciality from samsung s20 pro max</span>
          </p>
        </div>

        <div className=" right rounded col-md-6">
          <img className="img-fluid hero-img" src={ImageSource} />
        </div>
      </div>
    </div>
  );
}

export default OtherHeroSections;
