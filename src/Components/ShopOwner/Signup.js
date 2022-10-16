import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
      shop_no: "",
      shopname: "",
      floor: "",
      catagorey: "",
      phone: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const {
      fname,
      lname,
      email,
      password,
      shop_no,
      shopname,
      floor,
      catagorey,
      phone,
    } = this.state;
    console.log(
      fname,
      lname,
      email,
      password,
      shop_no,
      shopname,
      floor,
      catagorey,
      phone
    );

    fetch("http://localhost:5000/shopowner-register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        lname,
        email,
        password,
        shop_no,
        shopname,
        floor,
        catagorey,
        phone,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");

        toast("Successfull Registered");
        window.localStorage.setItem("token", data.data);
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
            <form onSubmit={this.handleSubmit}>
              <h3>
                {" "}
                Become member of <strong>OVM</strong>
              </h3>
              <Link className="" to="/account">
                Register as customer?
              </Link>

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
                      onChange={(e) => this.setState({ fname: e.target.value })}
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
                      onChange={(e) => this.setState({ lname: e.target.value })}
                    />
                  </div>
                </div>
              </div>
              <div class="form-outline mb-4">
                <label class="form-label" for="form6Example5">
                  Email
                </label>
                <input
                  type="email"
                  id="form6Example5"
                  class="form-control"
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </div>

              <div class="form-wrapper mb-2">
                <label for="">Password</label>
                <input
                  type="password"
                  class="form-control"
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
              </div>

              <div class="form-outline mb-4">
                <label class="form-label" for="form6Example3">
                  Shop name
                </label>
                <input
                  type="text"
                  id="form6Example3"
                  class="form-control"
                  onChange={(e) => this.setState({ shopname: e.target.value })}
                />
              </div>

              <div class="form-outline mb-4">
                <label class="form-label" for="form6Example4">
                  Shop Number
                </label>
                <input
                  type="text"
                  id="form6Example4"
                  class="form-control"
                  onChange={(e) => this.setState({ shop_no: e.target.value })}
                />
              </div>
              <div class="col-12">
                <label class="visually-hidden">Floor</label>
                <select class="select ml-4 mb-4" onChange={(e) => this.setState({ floor: e.target.value })}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>

              <div class="form-outline mb-4">
                <label class="form-label" for="form6Example6">
                  Phone
                </label>
                <input
                  type="number"
                  id="form6Example6"
                  class="form-control"
                  onChange={(e) => this.setState({ phone: e.target.value })}
                />
              </div>

              <div class="col-12">
                <label class="visually-hidden" for="inlineFormSelectPref">
                  Catagory Of Shop
                </label>
                <select class="select ml-4 mb-4" onChange={(e) => this.setState({ catagorey: e.target.value })}>
                  <option value="1">Accessories</option>
                  <option value="2">Moiles</option>
                  <option value="3">Laptops</option>
                  <option value="4">Tabetes</option>
                </select>
              </div>
              <button type="submit" class="btn btn-primary btn-block mb-4">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

// export default Signup;
