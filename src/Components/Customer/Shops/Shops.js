import React from "react";
import { useState } from "react";
import HeadPhone from "../Images/HeadPhone.png";
import SearchIcon from "@material-ui/icons/Search";
import "./ShopStyle.css";

function Shops() {
  const data1 = [
    {
      id: 1,
      img: HeadPhone,
      brand: "Dell",
      name: "Dell I7",
      price: 500,
      rating: 2,
      quantity: 1,
    },
    {
      id: 2,
      img: HeadPhone,
      brand: "Apple ",
      name: "Macbook 2020",
      price: 1000,
      quantity: 1,
    },
    {
      id: 3,
      img: HeadPhone,
      brand: "Samsung",
      name: "Samsung Note20 Ultra ",
      price: 30000,
      quantity: 1,
    },

    {
      id: 4,
      img: HeadPhone,
      brand: "JBL",
      name: "Contrller",
      price: 5000,
      quantity: 1,
    },

    {
      id: 5,
      img: HeadPhone,
      brand: "LG",
      name: "LG Smart Tv 4k",
      price: 50000,
    },
    {
      id: 6,
      img: HeadPhone,
      brand: "Watch ",
      name: "G-shock watch waterprof",
      price: 50000,
    },
    {
      id: 7,
      img: HeadPhone,
      brand: "Sony",
      name: "Sony Beat Ah100K",
      price: 50000,
    },

    {
      id: 8,
      img: HeadPhone,
      brand: "Apple",
      name: "Airpods Gen 3",
      price: 2000,
    },
  ];

  const [search, setSearch] = useState("");
  return (
    <div className="container heading ">
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

      <div className="container products ">
        <div className="row text-center justify-content-around">
          {data1

            .filter((person) => {
              if (search == "") {
                return person;
              } else if (
                person.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return person;
              }
            })
            .map((elem) => (
              <div
                key={data1.indexOf(elem)}
                className="heading col-xl-3 col-sm-6 mb-5"
              >
                <img
                  className=" rounded "
                  style={{ width: "10rem", height: "10rem" }}
                  src={`${elem.img}`}
                />
                <p className="brand-name">{`${elem.brand}`}</p>

                <p className="product-name">{`${elem.name}`}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
export default Shops;
