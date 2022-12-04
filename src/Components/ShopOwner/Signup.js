import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

export default class ShopOwnerSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      shopNo: "",
      shopName: "",
      floor: "",
      catagorey: "",
      phone: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      password,
      shopNo,
      shopName,
      floor,
      catagorey,
      phone,
    } = this.state;
    console.log(
      firstName,
      lastName,
      email,
      password,
      shopNo,
      shopName,
      floor,
      catagorey,
      phone
    );

    fetch("http://localhost:4000/shopowners/registration", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        shopNo,
        shopName,
        floor,
        catagorey,
        phone,
      }),
    })
      .then((res) => res.json())
      .then((shopOwner) => {
        console.log(shopOwner, "shopOwnerRegister");
        if (shopOwner.message == "success") {
          toast("Successfull Registered");
          window.localStorage.setItem("token", shopOwner.data);
          // console.log(shopOwner.password);
          // window.location.href = "/shopowner-login";
        } else if (shopOwner.message == "shopOwner Already exist") {
          toast.error("ShopOwner Already exist", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else if (shopOwner.message == "All Feild must be filled") {
          toast.error("All Feild must be filled", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else if (shopOwner.message == "Email is not valid") {
          toast.error("Email is not valid", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else if (shopOwner.message == "password is not strong enough") {
          toast.error("Password is not strong enough", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.error("All Feild must be filled", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        // window.location.href = "/account";
      });
  }
  render() {
    return (
      <div class="wrapper container heading">
        <div className="row">
          <div className="col-md-6 text-center">
            <img src="/images/Account.png" alt="Image" className="img-fluid " />
          </div>
          <div class="inner">
            <h3>
              {" "}
              Become member of <strong>OVM</strong>
            </h3>
            <Link className="" to="/create-account">
              Register as customer?
            </Link>

            <form autoComplete={false} onSubmit={this.handleSubmit}>
              <div class="row mt-4 mb-4">
                <div class="col">
                  <div class="form-outline">
                    <label class="form-label" for="form6Example1">
                      First name
                    </label>
                    <input
                      type="text"
                      id="form6Example1"
                      class="form-control"
                      onChange={(e) =>
                        this.setState({ firstName: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <label class="form-label" for="form6Example2">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="form6Example2"
                      class="form-control"
                      onChange={(e) =>
                        this.setState({ lastName: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
              <div class="form-outline mb-4 form-group required">
                <label class="form-label control-label" for="form6Example5">
                  Email
                </label>
                <input
                  type="email"
                  id="form6Example5"
                  class="form-control"
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </div>

              <div class="form-wrapper form-group required mb-2">
                <label class="form-label control-label" for="">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
              </div>

              <div class="form-outline mb-4 form-group required">
                <label class="form-label control-label" for="form6Example3">
                  Shop name
                </label>
                <input
                  type="text"
                  id="form6Example3"
                  class="form-control"
                  onChange={(e) => this.setState({ shopName: e.target.value })}
                />
              </div>

              <div class="form-outline mb-4 form-group required">
                <label class="form-label control-label" for="form6Example4">
                  Shop Number
                </label>
                <input
                  type="text"
                  id="form6Example4"
                  class="form-control"
                  onChange={(e) => this.setState({ shopNo: e.target.value })}
                />
              </div>
              <div class="col-12 form-group required">
                <label class="visually-hidden control-label">Floor</label>
                <select
                  class="select ml-4 mb-4"
                  onChange={(e) => this.setState({ floor: e.target.value })}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>

              <div class="form-outline mb-4 form-group required">
                <label class="form-label control-label" for="form6Example6">
                  Phone
                </label>
                <input
                  type="tel"
                  id="form6Example6"
                  class="form-control"
                  onChange={(e) => this.setState({ phone: e.target.value })}
                />
              </div>
              <button
                type="submit"
                class="buttons btn text-white btn-block btn-primary"
              >
                Register
              </button>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

// export default Signup;
