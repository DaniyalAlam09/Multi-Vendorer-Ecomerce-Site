import React from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@mui/material/IconButton";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

function CartPage() {
  const [counter, setCounter] = React.useState(0);
  const [product, setProduct] = React.useState({});
  return (
    <div>
      <section class="h-100">
        <div class="container h-100 py-5">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-10">
              <div class="d-flex justify-content-between align-items-center mb-4">
                <h3 class="fw-normal mb-0 text-black">Shopping Cart</h3>
                <div>
                  <p class="mb-0">
                    <span class="text-muted">Sort by:</span>{" "}
                    <a href="" class="text-body">
                      price <i class="fas fa-angle-down mt-1"></i>
                    </a>
                  </p>
                </div>
              </div>

              <div class=" rounded-3 mb-4">
                <div class="card-body p-4">
                  <div class="row d-flex justify-content-between align-items-center">
                    <div class="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                        class="img-fluid rounded-3"
                        alt="Cotton T-shirt"
                      />
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-3">
                      <p class="lead fw-normal mb-2">Basic T-shirt</p>
                      <p>
                        <span class="text-muted">Size: </span>M{" "}
                        <span class="text-muted">Color: </span>Grey
                      </p>
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <ButtonGroup
                        size="small"
                        aria-label="small outlined button group"
                      >
                        {
                          <Button
                            disabled={counter <= 0}
                            onClick={() => {
                              setCounter(counter - 1);
                            }}
                          >
                            -
                          </Button>
                        }

                        {<Button>{counter}</Button>}
                        <Button
                          disabled={counter >= product["countInStock"]}
                          onClick={() => {
                            setCounter(counter + 1);
                          }}
                        >
                          +
                        </Button>
                      </ButtonGroup>
                    </div>
                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h5 class="mb-0">$499.00</h5>
                    </div>
                    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" class="text-danger">
                        <IconButton aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class=" rounded-3 mb-4">
                <div class="card-body p-4">
                  <div class="row d-flex justify-content-between align-items-center">
                    <div class="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                        class=""
                        alt="Cotton T-shirt"
                      />
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-3">
                      <p class="lead fw-normal mb-2">Basic T-shirt</p>
                      <p>
                        <span class="text-muted">Size: </span>M{" "}
                        <span class="text-muted">Color: </span>Grey
                      </p>
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <ButtonGroup
                        size="small"
                        aria-label="small outlined button group"
                      >
                        {
                          <Button
                            disabled={counter <= 0}
                            onClick={() => {
                              setCounter(counter - 1);
                            }}
                          >
                            -
                          </Button>
                        }

                        {<Button>{counter}</Button>}
                        <Button
                          disabled={counter >= product["countInStock"]}
                          onClick={() => {
                            setCounter(counter + 1);
                          }}
                        >
                          +
                        </Button>
                      </ButtonGroup>
                    </div>
                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h5 class="mb-0">$499.00</h5>
                    </div>
                    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" class="text-danger">
                        <IconButton aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class=" rounded-3 mb-4">
                <div class="card-body p-4">
                  <div class="row d-flex justify-content-between align-items-center">
                    <div class="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                        class="img-fluid rounded-3"
                        alt="Cotton T-shirt"
                      />
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-3">
                      <p class="lead fw-normal mb-2">Basic T-shirt</p>
                      <p>
                        <span class="text-muted">Size: </span>M{" "}
                        <span class="text-muted">Color: </span>Grey
                      </p>
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <ButtonGroup
                        size="small"
                        aria-label="small outlined button group"
                      >
                        {
                          <Button
                            disabled={counter <= 0}
                            onClick={() => {
                              setCounter(counter - 1);
                            }}
                          >
                            -
                          </Button>
                        }

                        {<Button>{counter}</Button>}
                        <Button
                          disabled={counter >= product["countInStock"]}
                          onClick={() => {
                            setCounter(counter + 1);
                          }}
                        >
                          +
                        </Button>
                      </ButtonGroup>
                    </div>
                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h5 class="mb-0">$499.00</h5>
                    </div>
                    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" class="text-danger">
                        <IconButton aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="">
                <div class="card-body">
                  <button
                    type="button"
                    class="btn btn-warning btn-block btn-lg signin text-white"
                  >
                    <Link class="text-white" to="/checkout">
                      Proceed to Pay
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CartPage;
