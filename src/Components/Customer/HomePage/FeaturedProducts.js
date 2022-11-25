import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import ReactStars from "react-rating-stars-component";
import { CartProvider, useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import data from "./Data";
import { useParams } from "react-router-dom";
import { useRef } from "react";

function FeaturedProducts() {
  const [value, setValue] = React.useState([]);
  const [product, setProduct] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const { addItem } = useCart();
  const ref = useRef(null);
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

  React.useEffect(function () {
    axios
      .get("http://localhost:4000/shopowners/viewProducts")
      .then((res) => {
        setProduct(res.data);
        // setProduct(prevState => [res.data])
        console.log(res.data);
        // console.log(product.reviews.rating);
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
              <Skeleton variant="rectangular" width={210} height={280} />
            </>
          ) : (
            <div className="container heading2">
              <div className="row text-center justify-content-around ">
                {product

                  // .filter((person) => person.price < 40000)
                  .slice(0, 4)
                  .map((product, index) => (
                    <div key={index} className=" col-xl-3 col-sm-6 mb-5">
                      <Link to={`singleProduct/${product._id}`}>
                        <div className="thumbnail ">
                          <img
                            className="product-image rounded"
                            src={`${product.product_image}`}
                          />
                          <div>
                            <p className="brand-name">{`${product.product_brand}`}</p>
                            <p className="product-name">{`${product.product_name}`}</p>
                            <p className="product-price">{`${product.product_price}`}</p>
                            {product.reviews.map((rat, index) => {
                              <div key={index}>
                                <Rating
                                  name="read-only"
                                  value={rat.rating}
                                  readOnly
                                />
                                <p>{rat.name}</p>;
                              </div>;
                              {
                                console.log(rat.name);
                              }
                            })}
                          </div>
                          {/* <button className="button rounded">Add to Cart</button> */}
                        </div>
                      </Link>

                      {/* <div className="mr-3">
                        <Link to={`singleProduct/${product._id}`}>
                          <Card sx={{ maxWidth: 250 }}>
                            <CardActionArea>
                              <CardMedia
                                component="img"
                                height="140"
                                image={`${product.product_image}`}
                                alt="product image"
                              />
                              <CardContent>
                                <Typography
                                  gutterBottom
                                  variant="h6"
                                  component="div"
                                >
                                  {`${product.product_name}`}
                                </Typography>
                                <p className="brand-name">{`${product.product_brand}`}</p>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  {`${product.product_description}`}
                                </Typography>
                                <p className="product-price">{`${product.product_price}`}</p>
                              </CardContent>
                            </CardActionArea>
                          </Card>
                        </Link>
                      </div> */}
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
