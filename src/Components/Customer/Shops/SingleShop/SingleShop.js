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

import ReactStars from "react-rating-stars-component";
import { CartProvider, useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import "./Style.css";

function SingleShop() {
  let { ShopId, shopName } = useParams();
  const [shop, setShop] = React.useState({});
  const [user, setUser] = useState("");
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
        .get("http://localhost:4000/shopowners/" + ShopId)
        .then((res) => {
          setShop(res.data);
          console.log(ShopId);
          console.log(res.data);
          console.log(shop);
        })
        .catch((err) => {
          console.log(err);
        });
      axios
        .get("http://localhost:4000/shopowners/shopproducts", config)
        // .then((response) => response.json())
        .then((actualData) => {
          console.log(actualData.data.products);
          setUser(actualData.data.products);
          console.log(user);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    [ShopId]
  );

  return (
    <div>
      <HeroSection
        Name1={"Shops"}
        ImageSource={ShopHero}
        className="shopimage"
      />
      <div className="container">
        <div className=" d-flex justify-content-center mb-4 mt-4">
          <h1>{shopName}</h1>
        </div>

        {Object.values(user)?.map((product) => (
          <>
            <Link to={`../singleProduct/${product._id}`}>
              <Card sx={{ maxWidth: 250 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {`${product.product_name}`}
                    </Typography>
                    <p className="brand-name">{`${product.product_brand}`}</p>
                    <Typography variant="body2" color="text.secondary">
                      {`${product.product_description}`}
                    </Typography>
                    <p className="product-price">{`${product.product_price}`}</p>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
}

export default SingleShop;
