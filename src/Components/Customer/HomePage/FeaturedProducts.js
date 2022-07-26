import React, { useEffect, useState } from "react";
import HeadPhone from "../Images/HeadPhone.png";
import ReactStars from "react-rating-stars-component";
import { CartProvider, useCart } from "react-use-cart";

function FeaturedProducts(newRating) {
  const { addItem } = useCart();
  const data = [
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
      id: 9,
      img: HeadPhone,
      brand: "Apple",
      name: "Airpods Gen 3",
      price: 2000,
    },
  ];
  return (
    <>
      <div className="heading container">
        <div className="featured-head">
          <h3>Featured Products</h3>
          <a href="#" class="link-secondary see-all">
            All Offers
          </a>
        </div>
        <div className="container heading2">
          <div className="row text-center justify-content-around">
            {data
              .filter((person) => person.price < 40000)
              .slice(0, 4)
              .map((elem) => (
                <div
                  key={data.indexOf(elem)}
                  className="col-xl-3 col-sm-6 mb-5"
                >
                  <div className="thumbnail ">
                    <div
                      className="bg-image hover-zoom"
                      style={{ maxWidth: "22rem" }}
                    >
                      <img
                        className="product-image rounded "
                        src={`${elem.img}`}
                      />
                    </div>

                    <div>
                      <p className="brand-name">{`${elem.brand}`}</p>
                      <p className="product-name">{`${elem.name}`}</p>
                      <div className="row ">
                        <p className="product-price">{`${elem.price}`}</p>
                        <div className="rate">
                          <ReactStars
                            className=""
                            count={5}
                            size={15}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedProducts;
