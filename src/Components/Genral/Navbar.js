import React from "react";
import { UilShoppingBag, UilHeart, UilSearch } from "@iconscout/react-unicons";
import "./Style.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import Navbar from './Navbar';
import { Component } from "react";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = React.useState({});
  const handleLogout = () => {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    axios
      .get("http://localhost:4000/users/logout", config)
      .then((response) => {
        console.log(response.data);
        navigate("../../account");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  React.useEffect(function () {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    axios
      .get("http://localhost:4000/users/user", config)
      .then((res) => {
        setUser(res.data.user);
        console.log(res.data.user);
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div classNameName="navbar container">
      <nav className="navbar navbar-expand-lg navbar-light ovm">
        {/* <a className="navbar-brand" href="#">
          OVM
        </a> */}
        <Link to="/" className="navbar-brand">
          <img src="/images/logo.jpg" alt="" width="100" height="40" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarText">
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
              <Link to="/contact" className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
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
            <UilSearch className="icons" />
          </Link>
          <Link to="/cart">
            <UilShoppingBag className="icons" />
          </Link>
          {/* <span>{size}</span> */}
          <UilHeart className="icons" />
        </div>

        {user ? (
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle btn btn-primary signin ml-2"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {user.firstName}
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link to="user" type="submit">
                <button class="">Profile</button>
              </Link>{" "}
              <br />
              {/* <Link to="/logout" type="submit" class=""> */}
              <button class="" onClick={handleLogout}>
                Logout
              </button>
              {/* </Link> */}
            </div>
          </div>
        ) : (
          <Link to="/account" type="submit">
            <button class="btn btn-primary signin ml-2">Sign IN</button>
          </Link>
        )}

        {/* } */}
        {/* <Link to="/userDetails" type="submit">
            <button class="btn btn-primary signin">{this.state.userData.fname}</button>
          </Link>
          <Link to="/logout" type="submit">
            <button class="btn btn-primary signin">Logout</button>
          </Link> */}
      </nav>
    </div>
  );
};

export default Navbar;
