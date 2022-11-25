import React from "react";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Style.css";

function List() {
  const [product, setProduct] = React.useState([]);
  React.useEffect(function () {
    axios
      .get("http://localhost:4000/shopowners/viewProducts")
      .then((res) => {
        setProduct(res.data);
        // setProduct(prevState => [res.data])
        console.log(res.data);
        // console.log(product.reviews.rating);
        console.log(product);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="list-wrap row text-center justify-content-around ">
      {product.map((product, index) => (
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
                    {/* <Rating name="read-only" value={rat.rating} readOnly /> */}
                    <p>{rat.name}</p>;
                  </div>;
                  {
                    console.log(rat.name);
                  }
                })}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default List;
