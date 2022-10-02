import React from "react";
import { UilShoppingBag, UilHeart, UilSearch } from "@iconscout/react-unicons";
import "./Style.css";
import {Link} from "react-router-dom";

function Navbar({size}) {
  return (
    <div classNameName="navbar container">
      <nav className="navbar navbar-expand-lg navbar-light ovm">
        {/* <a className="navbar-brand" href="#">
          OVM
        </a> */}
        <Link to="/" className="navbar-brand" >
        <img src="/images/logo.jpg" alt="" width="100" height="40"/>
        
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse menu"
          id="navbarSupportedContent  "
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Catagories
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Mobiles
                </a>
                <a className="dropdown-item" href="#">
                  Laptops
                </a>

              </div>
            </li>
            <li className="nav-item">
              <Link to="products" className="nav-link">
                Special Price <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/shops" className="nav-link">
                Shops
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Virtual Tour
              </a>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" >
                Contact Us
              </Link>
            </li>
          </ul>
          <form className="form-inline">
            <input
              className="form-control "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <div className="icon">
            <Link to="/search">
            <UilSearch className="icons" /></Link>
            <Link to="/cart">
            <UilShoppingBag className="icons" /></Link>
            <span>{size}</span>
            <UilHeart className="icons" />
          </div>
          <Link to="/account"  type="submit">
            <button class="btn btn-primary signin">
            Sign-in
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
