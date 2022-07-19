import React from "react";
import "./Homepage.css";
import Hero from "../Images/Hero.png";

function HeroSection() {
  return (
    <div className="hero">
      <div className="main">
        <div className="left rounded float-left">
          <h1>
            {" "}
            <span> Introducing New Samsung </span>
            <span> Camera Product </span>{" "}
          </h1>
          <p>
            <span>Samsung Galaxy S 20 pro max with camera 40 MP, get</span> <br/>
            <span>bokeh speciality from samsung s20 pro max</span>
          </p>
          <button className="btn btn-primary shop" type="">
            Shop now
          </button>
        </div>
        <div className="right rounded float-right">
          <img  src={Hero} />
          
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
