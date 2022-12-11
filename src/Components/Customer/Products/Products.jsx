import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "@mui/material/Skeleton";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import OtherHeroSections from "../HomePage/OtherHeroSections";
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
import TemporaryDrawer from "./Drawer";
import KeyboardDoubleArrowDownSharpIcon from "@mui/icons-material/KeyboardDoubleArrowDownSharp";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Divider } from "@mui/material";
import "./styles.css";
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
        width: "60ch",
      },
    },
  },
}));

function Products() {
  const [value, setValue] = React.useState([]);
  const [product, setProduct] = React.useState([]);
  const [reviews, setReviews] = React.useState([]);
  const [catagories, setCatagories] = React.useState([]);
  const [brands, setBrands] = React.useState([]);
  const [searchCatagories, setSearchCatagories] = React.useState("");
  const [searchBrand, setSearchBrand] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [search, setSearch] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [index, setIndex] = useState(9);
  const initialPosts = slice(product, 0, index);
  const [state, setState] = useState({
    name: "",
    id: "",
    price: "",
  });
  const { _id } = useParams();
  const item = { _id };

  const loadMore = () => {
    setIndex(index + 9);

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
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getBrands = () => {
    axios
      .get("http://localhost:4000/brand")
      .then((res) => {
        setBrands(res.data.brand);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const catagoryFilter = () => {
    axios
      .get("http://localhost:4000/shops?category=" + searchCatagories)
      .then((res) => {
        setProduct(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const allProduct = () => {
    axios
      .get("http://localhost:4000/shopowners/viewProducts")
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // const bestFilter = reviews?.filter((filterdata) => {
  //   return filterdata.rating === 5;
  // });
  // const filterGood = () => {
  //   setProduct(bestFilter);
  // };
  const Rating4 = () => {
    product.reviews.filter((person) => (person.rating = 4));
    // product.map((item, index) => {
    //   let person = item?.reviews.filter((person) => (person.rating = 4));
    setProduct(product?.reviews?.filter((person) => (person.rating = 4)));
    // console.log(person);
    // });
    // product.reviews.rating[0] == 4;
  };
  console.log(Rating4);
  // const filterGood = product?.filter((filterdata) => {
  //   setProduct(filterdata.reviews.rating[0] == 1);
  // });
  // console.log(filterGood);

  // let filterGood = () => {
  //   const good = product.filter((auto) => auto.reviews.comment == "Good One");
  // const fordAutos = autoData.filter( (auto) => auto.title.includes("Ford"));

  //   setProduct(good);
  // };
  // console.log(filterGood);
  React.useEffect(
    function () {
      axios
        .get("http://localhost:4000/shopowners/viewProducts")
        .then((res) => {
          setProduct(res.data);
          setReviews(res.data.reviews);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.response.data);
        });

      getCategory();
      getBrands();
      catagoryFilter();
    },

    [searchCatagories]
  );

  return (
    <>
      {/* <HeroSection /> */}
      <OtherHeroSections
        Name1={"All Products are available "}
        Name2={"Tech Products"}
        ImageSource="/images/ProductsHero.png"
      />
      <div class="container">
        <div class="row">
          <aside class="col-md-3">
            <div class="border mb-4 p-3 mt-5">
              <div>
                <button
                  onClick={allProduct}
                  class="btn btn-danger mb-2"
                  style={{ width: "70%" }}
                >
                  CLear All Filters
                </button>
                {/* <button
                  onClick={Rating4}
                  class="btn btn-danger mb-2"
                  style={{ width: "70%" }}
                >
                  best
                </button> */}
              </div>
              <article class="filter-group">
                <header class="card-header">
                  <a
                    href="#"
                    data-toggle="collapse"
                    data-target="#collapse_1"
                    aria-expanded="true"
                    class=""
                  >
                    {/* <ExpandMoreIcon size="small" /> */}
                    <h6 class="title">Catagories</h6>
                  </a>
                </header>
                <div
                  class="filter-content collapse show"
                  id="collapse_1"
                  // style=""
                >
                  <div class="card-body">
                    {catagories?.map((catagory, index) => {
                      return (
                        <div
                        // className="d-flex justify-content-around"
                        // style={{ display: "flex", direction: "row" }}
                        >
                          <div key={index} className="">
                            <button
                              onClick={() => setSearchCatagories(catagory.name)}
                              className="btn btn-primary signin mt-2"
                              style={{ width: "80%" }}
                            >
                              {catagory.name}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </article>
              <article class="filter-group">
                <header class="card-header">
                  <a
                    href="#"
                    data-toggle="collapse"
                    data-target="#collapse_2"
                    aria-expanded="true"
                    class=""
                  >
                    <i class="icon-control fa fa-chevron-down"></i>
                    <h6 class="title">Brands </h6>
                  </a>
                </header>
                <div
                  class="filter-content collapse show"
                  id="collapse_2"
                  // style=""
                >
                  <div class="card-body">
                    {brands?.map((brands, index) => {
                      return (
                        <div
                        // className="d-flex justify-content-around"
                        // style={{ display: "flex", direction: "row" }}
                        >
                          <div key={index} className="">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                                name="brand"
                              />
                              <label
                                class="form-check-label"
                                for="flexCheckChecked"
                              >
                                {brands.name}
                              </label>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </article>
              <article class="filter-group">
                <header class="card-header">
                  <a
                    href="#"
                    data-toggle="collapse"
                    data-target="#collapse_3"
                    aria-expanded="true"
                    class=""
                  >
                    <i class="icon-control fa fa-chevron-down"></i>
                    <h6 class="title">Price range </h6>
                  </a>
                </header>
                <div
                  class="filter-content collapse show"
                  id="collapse_3"
                  // style=""
                >
                  <div class="card-body">
                    <input
                      type="range"
                      class="custom-range"
                      min="0"
                      max="10000"
                      name=""
                    />
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label>Min</label>
                        <input
                          class="form-control"
                          placeholder="RS.0"
                          type="number"
                        />
                      </div>
                      <div class="form-group text-right col-md-6">
                        <label>Max</label>
                        <input
                          class="form-control"
                          placeholder="RS. 1,0000"
                          type="number"
                        />
                      </div>
                    </div>
                    <button class="btn btn-block btn-primary signin">
                      Apply
                    </button>
                  </div>
                </div>
              </article>
            </div>
          </aside>
          <main class="col-md-9 mt-2">
            <header class="border-bottom mb-4 pb-3">
              <div class="form-inline">
                <span class="mr-md-auto">{product.length} Items found </span>
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
            </header>

            <div className="heading container">
              <h2>
                {!loading && product.length === 0 && <h1>No Products</h1>}
              </h2>
              <div>
                {loading ? (
                  <div className="d-flex justify-content-around">
                    <div>
                      <Skeleton
                        variant="rectangular"
                        width={210}
                        height={200}
                      />
                      <Box sx={{ pt: 0.5 }}>
                        <Skeleton width={210} />
                        <Skeleton width={210} />
                      </Box>
                    </div>
                    <div>
                      <Skeleton
                        variant="rectangular"
                        width={210}
                        height={200}
                      />
                      <Box sx={{ pt: 0.5 }}>
                        <Skeleton width={210} />
                        <Skeleton width={210} />
                      </Box>
                    </div>
                    <div>
                      <Skeleton
                        variant="rectangular"
                        width={210}
                        height={200}
                      />
                      <Box sx={{ pt: 0.5 }}>
                        <Skeleton width={210} />
                        <Skeleton width={210} />
                      </Box>
                    </div>
                    <div>
                      <Skeleton
                        variant="rectangular"
                        width={210}
                        height={200}
                      />
                      <Box sx={{ pt: 0.5 }}>
                        <Skeleton width={210} />
                        <Skeleton width={210} />
                      </Box>
                    </div>
                  </div>
                ) : (
                  <section>
                    <div class="container">
                      <div class="row">
                        {/* <div class=" col-md-6 col-lg-4 mb-4 mb-md-0"> */}
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
                            <div key={index} class=" col-md-6 col-lg-4">
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
                                          style={{
                                            textDecoration: "line-through",
                                          }}
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
                        {/* </div> */}
                      </div>
                    </div>
                  </section>
                )}
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
                      {/* <KeyboardDoubleArrowDownSharpIcon /> */}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Products;
