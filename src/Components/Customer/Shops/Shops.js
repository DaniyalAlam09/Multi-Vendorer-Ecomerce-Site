// import React from "react";
// import { useState } from "react";
import HeadPhone from "../Images/HeadPhone.png";
import SearchIcon from "@material-ui/icons/Search";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ShopStyle.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";
import { slice } from "lodash";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
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
function Shops() {
  const [user, setUser] = useState("");
  const [index, setIndex] = useState(8);
  const [isCompleted, setIsCompleted] = useState(false);
  const [search, setSearch] = useState("");
  const initialPosts = slice(user, 0, index);
  useEffect(() => {
    fetch("http://localhost:4000/admins/viewshopowners")
      .then((response) => response.json())
      .then((actualData) => {
        window.scrollTo(0, 0);
        setUser(actualData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const loadMore = () => {
    setIndex(index + 8);
    if (index >= user.length) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  };
  const sortAlpha = () => {
    console.log(initialPosts.sort((a, b) => a.shopName - b.shopName));
    setUser(initialPosts.sort((a, b) => a.shopName - b.shopName));
  };
  return (
    <Stack className="container heading " spacing={2}>
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
      <div className=" container d-flex flex-row-reverse">
        <select className="col-md-2 flex-row-reverse">
          <option value="">Choose...</option>
          <option onClick={sortAlpha} value="Alphabets">
            Alphabet
          </option>
        </select>
      </div>
      <div className="container products ">
        <div className="row text-center justify-content-start">
          {Object.values(initialPosts)
            // .slice(0, 8)

            .filter((person) => {
              if (search == "") {
                return person;
              } else if (
                person.shopName.toLowerCase().includes(search.toLowerCase())
              ) {
                return person;
              }
            })
            .map((elem) => (
              <div
                key={user.indexOf(elem)}
                className="heading col-xl-3 col-sm-6 mb-5"
              >
                <Link to={`/singleshop/${elem._id}/${elem.shopName}`}>
                  <img
                    className=" rounded product-image"
                    style={{
                      width: "10rem",
                      height: "10rem",
                      objectFit: "contain",
                    }}
                    src={`http://localhost:4000${elem.shopImage}`}
                  />
                  <p className="brand-name">Shop no {`${elem.shopNo}`}</p>

                  <p className="product-name">{`${elem.shopName}`}</p>
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
                {/* <KeyboardDoubleArrowDownSharpIcon /> */}
              </button>
            </div>
          )}
        </div>
      </div>
    </Stack>
  );
}
export default Shops;
