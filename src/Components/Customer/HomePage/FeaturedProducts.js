import React, { useEffect, useState } from "react";

import ReactStars from "react-rating-stars-component";
import { CartProvider, useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import data from "./Data";

function FeaturedProducts({productItem}) {
  const [cartItems, setCartItems] = useState([]);
  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
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
                      <Link to="/singleProduct">
                        <img
                          className="product-image rounded "
                          src={`${elem.img}`}
                        />
                      </Link>
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
                    <button onClick={() => handleAddProduct(data)} className="btn button addcart">Add to Cart</button>
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
