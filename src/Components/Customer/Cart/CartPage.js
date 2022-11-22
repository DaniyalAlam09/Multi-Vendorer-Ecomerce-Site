import React from "react";
import { CartProvider, useCart } from "react-use-cart";

function CartPage() {
  return (
    <div className="App">
      <section class="section-pagetop bg">
        <div class="container">
          <h2 class="title-page">Shopping cart</h2>
        </div>
      </section>

      <section class="section-content padding-y">
        <div class="container">
          <div class="row">
            <main class="col-md-9">
              <div class="card">
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
                      <th scope="col" class="text-right" width="200">
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
                              Some name of item goes here nice
                            </a>
                            <p class="text-muted small">
                              Size: XL, Color: blue, <br /> Brand: Gucci
                            </p>
                          </figcaption>
                        </figure>
                      </td>
                      <td>
                        <select class="form-control">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </td>
                      <td>
                        <div class="price-wrap">
                          <var class="price">$1156.00</var>
                          <small class="text-muted"> $315.20 each </small>
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
                        <a href="" class="btn btn-light">
                          {" "}
                          Remove
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <figure class="itemside">
                          <div class="aside">
                            <img
                              src="assets/images/items/2.jpg"
                              class="img-sm"
                            />
                          </div>
                          <figcaption class="info">
                            <a href="#" class="title text-dark">
                              Product name goes here nice
                            </a>
                            <p class="text-muted small">
                              Size: XL, Color: blue, <br /> Brand: Gucci
                            </p>
                          </figcaption>
                        </figure>
                      </td>
                      <td>
                        <select class="form-control">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </td>
                      <td>
                        <div class="price-wrap">
                          <var class="price">$149.97</var>
                          <small class="text-muted"> $75.00 each </small>
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
                        <a href="" class="btn btn-light btn-round">
                          {" "}
                          Remove
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <figure class="itemside">
                          <div class="aside">
                            <img
                              src="assets/images/items/3.jpg"
                              class="img-sm"
                            />
                          </div>
                          <figcaption class="info">
                            <a href="#" class="title text-dark">
                              Another name of some product goes just here
                            </a>
                            <p class="small text-muted">
                              Size: XL, Color: blue, Brand: Tissot
                            </p>
                          </figcaption>
                        </figure>
                      </td>
                      <td>
                        <select class="form-control">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                      </td>
                      <td>
                        <div class="price-wrap">
                          <var class="price">$98.00</var>
                          <small class="text-muted"> $578.00 each</small>
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
                        <a href="" class="btn btn-light btn-round">
                          {" "}
                          Remove
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div class="card-body border-top">
                  <a href="#" class="btn btn-primary float-md-right">
                    {" "}
                    Make Purchase <i class="fa fa-chevron-right"></i>{" "}
                  </a>
                  <a href="#" class="btn btn-light">
                    {" "}
                    <i class="fa fa-chevron-left"></i> Continue shopping{" "}
                  </a>
                </div>
              </div>

              <div class="alert alert-success mt-3">
                <p class="icontext">
                  <i class="icon text-success fa fa-truck"></i> Free Delivery
                  within 1-2 weeks
                </p>
              </div>
            </main>
            <aside class="col-md-3">
              <div class="card mb-3">
                <div class="card-body">
                  <form>
                    <div class="form-group">
                      <label>Have coupon?</label>
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          name=""
                          placeholder="Coupon code"
                        />
                        <span class="input-group-append">
                          <button class="btn btn-primary">Apply</button>
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <dl class="dlist-align">
                    <dt>Total price:</dt>
                    <dd class="text-right">USD 568</dd>
                  </dl>
                  <dl class="dlist-align">
                    <dt>Discount:</dt>
                    <dd class="text-right">USD 658</dd>
                  </dl>
                  <dl class="dlist-align">
                    <dt>Total:</dt>
                    <dd class="text-right  h5">
                      <strong>$1,650</strong>
                    </dd>
                  </dl>
                  <hr />
                  <p class="text-center mb-3">
                    <img src="assets/images/misc/payments.png" height="26" />
                  </p>
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>

      <footer class="section-footer border-top padding-y">
        <div class="container">
          <p class="float-md-right">
            &copy; Copyright 2020 All rights reserved
          </p>
          <p>
            <a href="#">Terms and conditions</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default CartPage;
