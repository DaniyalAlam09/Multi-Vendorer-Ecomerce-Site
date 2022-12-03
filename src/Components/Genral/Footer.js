import React from "react";
import {
  UilFacebook,
  UilTwitter,
  UilYoutube,
  UilInstagram,
  UilGithub,
} from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div class="hero pt-4">
      <div className="container footer-style">
        <div className="row justify-content-around">
          <div className="col-xl-3 col-sm-12 mb-3">
            <h5>Accessoriespace</h5>
            <p className="footer-info">
              This is the usefull template from Sebo. You can buy this on our
              website, UI8 and also our Creativemarket.
            </p>
            <UilFacebook className="icons" />
            <UilInstagram className="icons" />
            <UilTwitter className="icons" />
            <UilYoutube className="icons" />
            <UilGithub className="icons" />
          </div>
          <div className="col-md-2 ">
            <h6>Product</h6>
            <p className="footer-info">Features</p>
            <p className="footer-info">Enterpise</p>
            <p className="footer-info">Security</p>
            <p className="footer-info">Customer Stories</p>
            <p className="footer-info">Pricing</p>
            <p className="footer-info">Demo</p>
          </div>
          <div className="col-md-2">
            <h6>Teams</h6>
            <p className="footer-info">Engineering</p>
            <p className="footer-info">Financial Services</p>
            <p className="footer-info">Sales</p>
            <p className="footer-info">Customer Support</p>
            <p className="footer-info">Human Resources</p>
            <p className="footer-info">Media</p>
          </div>
          <div className="col-md-2">
            <h6>Company</h6>
            <p className="footer-info">About Us</p>
            <p className="footer-info">Leadership</p>
            <p className="footer-info">News</p>
            <p className="footer-info">Media Kit</p>
            <p className="footer-info">Career</p>
            <p className="footer-info">Documentation</p>
          </div>
          <div className="col-md-2 ">
            <h6>Address</h6>
            <p className="footer-info">
              Gg. Sadewa No.RT 03, Druwo, Bangunharjo, Kec. Sewon, Bantul,
              Daerah Istimewa Yogyakarta 55188
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
