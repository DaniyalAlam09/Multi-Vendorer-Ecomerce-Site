import React, { useEffect, useState } from "react";
import { UilShoppingBag, UilHeart, UilSearch } from "@iconscout/react-unicons";
import "./Style.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import Navbar from './Navbar';
import { Component } from "react";
import axios from "axios";
import { useCart } from "react-use-cart";
import SearchIcon from "@material-ui/icons/Search";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: " rgba(218, 216, 216, 0.26)",
  "&:hover": {
    backgroundColor: "rgba(218, 216, 216, 0.26)",
    // width: "80%",
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "100%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "27ch",
      },
    },
  },
}));

const Navbar = () => {
  const navigate = useNavigate();
  const { isEmpty, totalItems } = useCart();
  const [user, setUser] = React.useState([]);
  const [search, setSearch] = useState("");

  const handleLogout = () => {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    setUser([]);
    axios
      .get("http://localhost:4000/users/logout", config)
      .then((response) => {
        navigate("../../account");
        navigate(0);
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
      })
      .catch((err) => {
        console.log(err.response.data);
        setUser([]);
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
          {/* <Box> */}
          {/* <Toolbar> */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </Search>
          {/* </Toolbar> */}
          {/* </Box> */}
        </form>
        <div className="icon">
          <Link to="/search">
            <UilSearch className="icons" />
          </Link>
          <Link to="/cart">
            <UilShoppingBag className="icons" />
            {!isEmpty && (
              <span
                style={{ position: "relative", left: "-21px", top: "-18px" }}
              >
                {totalItems}
              </span>
            )}
            <span style={{ marginLeft: !isEmpty ? "-13px" : 0 }}></span>
          </Link>
          {/* <span>{size}</span> */}
          <UilHeart className="icons" />
        </div>
        {user?.firstName && (
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
              <Link to="user/customer-dashboard" type="submit">
                <button class="">Profile</button>
              </Link>
              <br />
              {/* <Link to="/logout" type="submit" class=""> */}
              <button class="" onClick={handleLogout}>
                Logout
              </button>
              {/* </Link> */}
            </div>
          </div>
        )}
        {!user?.firstName && (
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
