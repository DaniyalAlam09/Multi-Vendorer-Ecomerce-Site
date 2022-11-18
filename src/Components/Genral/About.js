import React from "react";
import About1 from "./Images/About1.svg";
import About2 from "./Images/About2.svg";
import About3 from "./Images/About3.svg";
import {
  UilFacebook,
  UilTwitter,
  UilInstagram,
} from "@iconscout/react-unicons";
import Navbar from "./Navbar";

function About() {
  return (
    <div>
      {/* <Navbar/> */}
      <div class="hero">
        <div class="container py-5">
          <div class="row h-100 align-items-center py-5">
            <div class="col-lg-6">
              <h2 class="display-6">About us</h2>
              <p class="lead text-muted mb-0">
                'The trouble is, you think you have time'. Jack Kornfield
              </p>
              <p class="lead text-muted">
                <a href="https://bootstrapious.com/snippets" class="">
                  <u>Contact Us</u>
                </a>
              </p>
            </div>
            <div class="col-lg-6 d-none d-lg-block">
              <img src={About1} alt="" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white py-5">
        <div class="container py-5">
          <div class="row align-items-center mb-5">
            <div class="col-lg-6 order-2 order-lg-1">
              <i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
              <h3 class="font-weight-light">Lorem ipsum </h3>
              <p class="font-italic text-muted mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#" class="button btn btn-light px-5 ">
                Learn More
              </a>
            </div>
            <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <img src={About2} alt="" class="img-fluid mb-4 mb-lg-0" />
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-5 px-5 mx-auto">
              <img src={About3} alt="" class="img-fluid mb-4 mb-lg-0" />
            </div>
            <div class="col-lg-6">
              <i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
              <h3 class="font-weight-light">Lorem ipsum</h3>
              <p class="font-italic text-muted mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button class="button btn btn-light px-5 rounded-pill shadow-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-light py-5">
        <div class="container py-5">
          <div class="row mb-4">
            <div class="col-lg-5">
              <h3 class="display-6 ">Our team</h3>
              <p class="font-italic text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div class="row text-center justify-content-around">
            <div class="col-xl-3 col-sm-6 mb-5">
              <div class="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src=""
                  alt=""
                  width="100"
                  class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 class="mb-0">Daniyal Alam</h5>
                <span class="small text-uppercase text-muted">
                  Web Developer
                </span>
                <ul class="social mb-0 list-inline mt-4">
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <UilFacebook className="icons" />
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <UilInstagram className="icons" />
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <UilTwitter className="icons" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-xl-3 col-sm-6 mb-5">
              <div class="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src=""
                  alt=""
                  width="100"
                  class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 class="mb-0">Rooma Saher</h5>
                <span class="small text-uppercase text-muted">CEO</span>
                <ul class="social mb-0 list-inline mt-4">
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <UilFacebook className="icons" />
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <UilInstagram className="icons" />
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <UilTwitter className="icons" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-xl-3 col-sm-6 mb-5">
              <div class="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src=""
                  alt=""
                  width="100"
                  class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 class="mb-0">Habib Ahmed Khan</h5>
                <span class="small text-uppercase text-muted">
                  Tour Arrange
                </span>
                <ul class="social mb-0 list-inline mt-4">
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <UilFacebook className="icons" />
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <UilInstagram className="icons" />
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link">
                      <UilTwitter className="icons" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
