import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "@mui/material/Skeleton";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import HeroSection from "../HomePage/HeroSection";
import { styled, alpha } from "@mui/material/styles";
import Hero from "../Images/Hero.png";
import SearchIcon from "@material-ui/icons/Search";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import { slice } from "lodash";
// import TemporaryDrawer from "./Drawer";
import KeyboardDoubleArrowDownSharpIcon from "@mui/icons-material/KeyboardDoubleArrowDownSharp";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Divider } from "@mui/material";

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

function Catgories() {
  const { categoryName } = useParams();
  const [value, setValue] = React.useState([]);
  const [product, setProduct] = React.useState([]);
  const [catagories, setCatagories] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [search, setSearch] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [index, setIndex] = useState(8);
  const initialPosts = slice(product, 0, index);
  const [state, setState] = useState({
    name: "",
    id: "",
    price: "",
  });
  const { _id } = useParams();
  const item = { _id };
  const handleChange = (e) => {
    console.log(item);
  };
  const filterByBrand = (product) => {
    // Avoid filter for empty string
    if (!selectedBrand) {
      return product;
    }

    const filteredProduct = product.filter(
      (pro) => pro.split(" ").indexOf(selectedBrand) !== -1
    );
    return filteredProduct;
  };

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };
  const loadMore = () => {
    setIndex(index + 8);
    console.log(index);
    if (index >= product.length) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  };
  const getCategory = () => {
    axios
      .get("http://localhost:4000/category")
      .then((res) => {
        setCatagories(res.data.categories);
        console.log(res.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(
    function () {
      axios
        .get("http://localhost:4000/shops?category=" + categoryName)
        .then((res) => {
          window.scrollTo(0, 0);
          setProduct(res.data.products);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
      getCategory();
    },
    [categoryName]
  );

  return (
    <div>
      {/* <HeroSection
        Name1={"All Products are available "}
        Name2={"Camera Product"}
        ImageSource="/images/ProductsHero.png"
      /> */}
      <div className="mt-3">
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
        {/* <div
          className="container d-flex justify-content-center mt-4"
          style={{ display: "flex", direction: "row" }}
        >
          {catagories?.map((catagory, index) => {
            return (
              <div
                className="d-flex justify-content-around"
                style={{ display: "flex", direction: "row" }}
              >
                <div key={index} className="">
                  <button className="btn btn-primary signin ml-2">
                    {catagory.name}
                  </button>
                </div>
              </div>
            );
          })}
        </div> */}
        <div className="heading container">
          <h2>{!loading && product.length === 0 && <h1>No Products</h1>}</h2>
          <div>
            {loading ? (
              <>
                <Skeleton variant="rectangular" width={210} height={280} />
              </>
            ) : (
              <div className="container">
                <div className="row">
                  {initialPosts
                    .filter((person) => {
                      if (search == "") {
                        return person;
                      } else if (
                        person.product_name
                          .toLowerCase()
                          .includes(search.toLowerCase())
                      ) {
                        return person;
                      }
                    })
                    .map((product, index) => (
                      <div key={index} class=" col-md-6 col-lg-3">
                        <Link
                          key={index}
                          to={`../singleProduct/${product._id}/${product.owner}`}
                        >
                          <div
                            class="border mb-4 p-3 card-hover"
                            style={{
                              height: "380px",
                              borderRadius: "5px",
                              // backgroundColor: " rgba(236, 235, 235, 0.137)",
                            }}
                          >
                            <div className="text -center">
                              <div></div>
                              <img
                                src={`http://localhost:4000/${product.product_image}`}
                                style={{
                                  height: "200px",
                                  width: "200px",
                                }}
                                class="product-image"
                                alt="Laptop"
                              />
                            </div>

                            <div class="negativemargine">
                              <div class="d-flex justify-content-between">
                                <p class="small">
                                  <a class="text-muted">
                                    {`${product.product_brand}`}
                                  </a>
                                </p>
                                <p class="small text-danger">
                                  <s
                                    style={{ textDecoration: "line-through" }}
                                  >{`${product.product_price}`}</s>
                                </p>
                              </div>
                              <Divider />
                              <div class="d-flex justify-content-between mb-3">
                                <p
                                  className="product-name"
                                  // class="mb-0"
                                >{`${product.product_name}`}</p>
                                <p
                                  className="product-price"
                                  // class="text-dark mb-0"
                                >{`${product.product_price}`}</p>
                              </div>

                              <div class="d-flex justify-content-between">
                                <p class="rating text-muted">
                                  Stoke: {`${product.product_stoke}`}
                                </p>
                                <div class="rating">
                                  {product.reviews
                                    ? product.reviews?.map((rew) => (
                                        <Rating
                                          size="small"
                                          value={rew.rating}
                                          readOnly
                                        />
                                      ))
                                    : "kj"}
                                  {/* {product.reviews.rating ?(
                                  <p>oid</p>)
                                  : <p>dsk</p>} */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                </div>
                <div className="d-grid mt-3 mb-5">
                  {isCompleted ? (
                    <div class="text-center">
                      {" "}
                      <button
                        onClick={loadMore}
                        type="button"
                        className="btn btn-danger disabled"
                      >
                        No More Items
                      </button>
                    </div>
                  ) : (
                    <div class="text-center">
                      <button
                        onClick={loadMore}
                        type="button"
                        class="btn btn-primary signin ml-2"
                      >
                        Load More
                        <KeyboardDoubleArrowDownSharpIcon />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catgories;
