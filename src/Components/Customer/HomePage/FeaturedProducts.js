import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

import ReactStars from "react-rating-stars-component";
import { CartProvider, useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import data from "./Data";
import { useParams } from "react-router-dom";

function FeaturedProducts() {
  const [value, setValue] = React.useState(2);
  const [product, setProduct] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(function () {
    axios
      .get("http://localhost:4000/shopowners/viewProducts")
      .then((res) => {
        setProduct(res.data);
        // setProduct(prevState => [res.data])
        console.log(res.data);
        console.log(product);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="heading container ">
      <div className="featured-head">
        <h3>Featured Products</h3>
        <a href="#" class="link-secondary see-all">
          All Offers
        </a>
      </div>
      <div className="heading container">
        <h2>{!loading && product.length === 0 && <h1>No Products</h1>}</h2>
        <div>
          {loading ? (
            <>
              <Skeleton variant="rectangular" width={210} height={40} />
              <Skeleton variant="rectangular" width={210} height={40} mt={10} />
              <Skeleton variant="rectangular" width={210} height={40} mt={10} />
            </>
          ) : (
            <div className="container heading2">
              <div className="row text-center justify-content-around">
                {product
                  // .filter((person) => person.price < 40000)
                  .slice(0, 4)
                  .map((product) => (
                    <div className="col-xl-3 col-sm-6 mb-5">
                      <div className="thumbnail ">
                        <div
                          className="bg-image hover-zoom"
                          style={{ maxWidth: "22rem" }}
                        >
                          <Link to={`singleProduct/${product._id}`}>
                            <img
                              className="product-image rounded "
                              src={`${product.img}`}
                            />
                          </Link>
                        </div>

                        <div>
                          <p className="brand-name">{`${product.product_brand}`}</p>
                          <Link to={`singleProduct/${product._id}`}>
                            <p className="product-name">{`${product.product_name}`}</p>
                          </Link>

                          <div className="row ">
                            <p className="product-price">{`${product.product_price}`}</p>
                            <div className="rate">
                              <Typography component="legend"></Typography>
                              <Rating
                                size="small"
                                name="read-only"
                                value={value}
                                readOnly
                              />
                            </div>
                          </div>
                        </div>
                        <button className="btn button addcart">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
