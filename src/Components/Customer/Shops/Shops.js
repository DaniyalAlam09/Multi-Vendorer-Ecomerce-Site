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

function Shops() {
  const [user, setUser] = useState("");
  useEffect(() => {
    fetch("http://localhost:4000/admins/viewshopowners")
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setUser(actualData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const [search, setSearch] = useState("");
  return (
    <Stack className="container heading " spacing={2}>
      <div className="searchBar-wrap">
        <SearchIcon className="searchBar-icon" />
        <input
          type="text"
          className="form-control "
          placeholder="Search Here"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div class="dropdown ">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">
            Action
          </a>
          <a class="dropdown-item" href="#">
            Another action
          </a>
          <a class="dropdown-item" href="#">
            Something else here
          </a>
        </div>
      </div>

      <div className="container products ">
        <div className="row text-center justify-content-around">
          {Object.values(user)
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
                    className=" rounded "
                    style={{ width: "10rem", height: "10rem" }}
                    src={`${elem.img}`}
                  />
                  <p className="brand-name">Shop no {`${elem.shopNo}`}</p>

                  <p className="product-name">{`${elem.shopName}`}</p>
                </Link>
              </div>
            ))}
        </div>
      </div>
      <Grid display="flex" justifyContent="center" alignItems="center">
        <Pagination
          count={10}
          size="large"
          variant="outlined"
          shape="rounded"
        />
      </Grid>
    </Stack>
  );
}
export default Shops;
