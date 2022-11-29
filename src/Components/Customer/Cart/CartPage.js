import React from "react";
import axios from "axios";
import HeroSection from "../HomePage/HeroSection";
import CartHero from "../Images/CartHero.png";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Link } from "react-router-dom";

function CartPage() {
  const [products, setProducts] = React.useState([]);
  const [bill, setBill] = React.useState();
  const [loadig, setLoadig] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [delet, setDelete] = React.useState(false);
  const [counter, setCounter] = React.useState(1);

  React.useEffect(
    function () {
      setLoadig(true);
      const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        withCredentials: true,
      };
      axios
        .get("http://localhost:4000/product/cart", config)
        .then((res) => {
          setProducts(res.data.items);
          console.log(res.data.items);
          setBill(res.data.bill);
          setLoadig(false);

          // console.log("product");
        })
        .catch((err) => {
          console.log(err);
          setLoadig(false);
          setError(true);
        });
    },
    [delet]
  );

  const handleDelete = (id) => {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    // console.log(userID);
    axios
      .delete(`http://localhost:4000/product/cart/${id}`, config)
      .then((user) => {
        console.log("user delete");
        setDelete(true);
        // navigate(0);
      })
      .catch((error) => {
        console.log(error.message);
      });
    // console.log("dcwj");
  };

  return (
    <>
      <HeroSection
        Name1={"Your Cart Is Here"}
        ImageSource={CartHero}
        className="shopimage"
      />
      {loadig && <h1>Loading ...</h1>}
      {products?.length <= 0 && <h1>No products to Show</h1>}
      {products?.length <= 0 ? (
        "No Products"
      ) : (
        <div className="App">
          <section class="section-pagetop bg">
            <div class="container">
              <section class="section-content padding-y">
                <div class="container">
                  <div class="row">
                    <main class="col-md-9">
                      <div class="card">
                        {products?.map((product, index) => {
                          return (
                            <>
                              <div key={index}>
                                <table class="table table-borderless table-shopping-cart">
                                  <thead class="text-muted">
                                    <tr class="small text-uppercase">
                                      <th scope="col">Product</th>
                                      <th scope="col" width="120">
                                        Quantity
                                      </th>
                                      <th scope="col" width="120">
                                        Price
                                      </th>
                                      <th
                                        scope="col"
                                        class="text-right"
                                        width="200"
                                      >
                                        {" "}
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <figure class="itemside">
                                          <div class="aside">
                                            <img
                                              src="assets/images/items/1.jpg"
                                              class="img-sm"
                                            />
                                          </div>
                                          <figcaption class="info">
                                            <a href="#" class="title text-dark">
                                              {`${product?.name}`}
                                            </a>
                                            <p class="text-muted small">
                                              Size: XL, Color: blue, <br />{" "}
                                              Brand: Gucci
                                            </p>
                                          </figcaption>
                                        </figure>
                                      </td>
                                      <td>
                                        <ButtonGroup
                                          size="small"
                                          aria-label="small outlined button group"
                                        >
                                          {
                                            <Button
                                              disabled={counter <= 0}
                                              onClick={() => {
                                                setCounter((pre) => pre - 1);
                                              }}
                                            >
                                              -
                                            </Button>
                                          }

                                          {<Button>{counter}</Button>}
                                          <Button
                                            disabled={
                                              counter >= product["countInStock"]
                                            }
                                            onClick={() => {
                                              setCounter((pre) => pre + 1);
                                            }}
                                          >
                                            +
                                          </Button>
                                        </ButtonGroup>
                                      </td>
                                      <td>
                                        <div class="price-wrap">
                                          <var class="price">{`${product?.price}`}</var>
                                          <small class="text-muted">
                                            {" "}
                                            $315.20 each{" "}
                                          </small>
                                        </div>
                                      </td>
                                      <td class="text-right">
                                        <a
                                          data-original-title="Save to Wishlist"
                                          title=""
                                          href=""
                                          class="btn btn-light mr-2"
                                          data-toggle="tooltip"
                                        >
                                          {" "}
                                          <i class="fa fa-heart"></i>
                                        </a>
                                        <button
                                          onClick={() =>
                                            handleDelete(product.productId)
                                          }
                                          class="btn btn-light"
                                        >
                                          {" "}
                                          Remove
                                        </button>
                                      </td>
                                    </tr>
                                    <tr></tr>
                                  </tbody>
                                </table>
                              </div>
                              <div class="card-body border-top">
                                <Link
                                  to="/checkout"
                                  class="btn btn-primary float-md-right"
                                >
                                  {" "}
                                  Make Purchase{" "}
                                  <i class="fa fa-chevron-right"></i>{" "}
                                </Link>
                                <Link to="/" class="btn btn-light">
                                  Continue shopping
                                </Link>
                              </div>
                            </>
                          );
                        })}
                      </div>

                      <div class="alert alert-success mt-3">
                        <p class="icontext">
                          <i class="icon text-success fa fa-truck"></i> Free
                          Delivery within 1-2 weeks
                        </p>
                      </div>
                    </main>
                    <aside class="col-md-3">
                      <div class="card ">
                        <div class="card-body">
                          <dl class="dlist-align">
                            <dt>Total price:</dt>
                            <dd class="text-right">
                              {bill && <dd>Total: {bill}</dd>}
                            </dd>
                          </dl>
                          <dl class="dlist-align">
                            <dt>Discount:</dt>
                            <dd class="text-right">--</dd>
                          </dl>
                          <dl class="dlist-align">
                            <dt>Total:</dt>
                            <dd class="text-right  h5">
                              <strong>{bill && <dd>Total: {bill}</dd>}</strong>
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </aside>
                  </div>
                </div>
              </section>
              <section class="section-name bg padding-y">
                <div class="container">
                  <h6>Payment and refund policy</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </section>
              ;
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default CartPage;
