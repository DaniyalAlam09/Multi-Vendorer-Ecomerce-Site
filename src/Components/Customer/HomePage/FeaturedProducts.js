import React, { useEffect, useState } from "react";
import HeadPhone from "../Images/HeadPhone.png";
import ReactStars from "react-rating-stars-component";

function FeaturedProducts(newRating) {
  const data = [
    {
      img: HeadPhone,
      brand: "Dell",
      name: "Dell I7",
      price: 50000,
      rating: 2,
    },
    {
      img: HeadPhone,
      brand: "Apple ",
      name: "Macbook 2020",
      price: 50000,
    },
    {
      img: HeadPhone,
      brand: "Samsung",
      name: "Samsung Note20 Ultra ",
      price: 50000,
    },

    {
      img: HeadPhone,
      brand: "JBL",
      name: "Contrller",
      price: 50000,
    },

    {
      img: HeadPhone,
      brand: "LG",
      name: "LG Smart Tv 4k",
      price: 50000,
    },
    {
      img: HeadPhone,
      brand: "Watch ",
      name: "G-shock watch waterprof",
      price: 50000,
    },
    {
      img: HeadPhone,
      brand: "Sony",
      name: "Sony Beat Ah100K",
      price: 50000,
    },

    {
      img: HeadPhone,
      brand: "Apple",
      name: "Airpods Gen 3",
      price: 50000,
    },
  ];
  return (
    <>
      <div className="heading">
        <div className="featured-head">
          <h3>Featured Products</h3>
          <a href="#" class="link-secondary see-all">
            All Offers
          </a>
        </div>
        <div className="container row  products">
          {data.slice(0, 4).map((elem) => (
            <div key={data.indexOf(elem)}>
              <div className="tumbnail">
                <img className="product-image rounded" src={`${elem.img}`} />
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
                  {/* <StarRatings
                    rating={`${elem.rating}`}
                    starDimension="40px"
                    starSpacing="15px"
                  /> */}
                </div>
                {/* <button className="button rounded">Add to Cart</button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FeaturedProducts;
