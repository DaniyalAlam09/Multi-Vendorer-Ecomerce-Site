import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import HeroSection from "../../HomePage/HeroSection";
import ShopHero from "../../Images/ShopHero.png";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { slice } from "lodash";

import ReactStars from "react-rating-stars-component";
import { CartProvider, useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import "./Style.css";

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
      width: "50ch",
      "&:focus": {
        width: "70ch",
      },
    },
  },
}));

function SingleShop() {
  let { shopId, shopName } = useParams();
  let params = useParams();
  const [shop, setShop] = React.useState({});
  const [user, setUser] = useState({});
  const [search, setSearch] = useState("");
  const [loading, setLoading] = React.useState(true);
  const [index, setIndex] = useState(8);
  const initialPosts = slice(user, 0, index);
  // console.log(params);
  React.useEffect(
    function () {
      const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        withCredentials: true,
      };
      axios
        .get("http://localhost:4000/shopowners/" + shopId)
        .then((res) => {
          setShop(res.data);
          console.log(shopId);
          console.log(res.data);
          console.log(shop);
        })
        .catch((err) => {
          console.log(err);
        });
      axios
        .get("http://localhost:4000/shopowners/shopproducts/" + shopId)
        .then((actualData) => {
          console.log(actualData.data.products);
          setUser(actualData.data.products);
          console.log(user);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    [shopId]
  );
  console.log(user._id);

  return (
    <div>
      <HeroSection
        Name1={"Shops"}
        ImageSource={ShopHero}
        className="shopimage"
      />
      <div className="container">
        <div className=" d-flex justify-content-center mb-5 mt-5">
          <h1>{shopName}</h1>
          {/* <h1>{ShopId}</h1> */}
        </div>
        <div class=" container d-flex justify-content-center">
          <div className="">
            <Box>
              <Toolbar>
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
              </Toolbar>
            </Box>
          </div>
        </div>
        <div className="text-center mt-5">
          <h2>
            {!loading && user.length === 0 && (
              <h5>
                No Products in List <SentimentVeryDissatisfiedIcon />{" "}
                <SentimentVeryDissatisfiedIcon />
              </h5>
            )}
          </h2>
        </div>
        <div className="row text-center d-flex justify-content-start mt-5">
          {Object.values(initialPosts)
            .filter((person) => {
              if (search == "") {
                return person;
              } else if (
                person.product_name.toLowerCase().includes(search.toLowerCase())
              ) {
                return person;
              }
            })
            ?.map((product, index) => (
              <div key={index} className=" col-xl-3 col-sm-6 mb-5">
                <Link to={`../singleProduct/${product._id}`}>
                  <div className="thumbnail ">
                    <img
                      className="product-image rounded"
                      src={`http://localhost:4000/${product.product_image}`}
                    />
                    <div>
                      <p className="brand-name">{`${product.product_brand}`}</p>
                      <p className="product-name">{`${product.product_name}`}</p>
                      <p className="product-price">{`${product.product_price}`}</p>
                      <p className="product-price">
                        {product.reviews ? (
                          product.reviews?.map((rew) => (
                            <Rating value={rew.rating} readOnly />
                          ))
                        ) : (
                          <Rating value={null} name="read-only" />
                        )}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default SingleShop;
