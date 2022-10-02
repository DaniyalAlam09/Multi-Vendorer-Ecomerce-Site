import React, { Component } from "react";
import { Link } from "react-router-dom";
import { UilGoogle, UilFacebookF, UilTwitter } from "@iconscout/react-unicons";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("http://localhost:5000/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.location.href = "/";
        }
      });
      
  }
  render() {
    return (
      <div className="content heading">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center">
              <img
                src="/images/Account.png"
                alt="Image"
                className="img-fluid "
              />
            </div>
            <div className="col-md-6 contents">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="mb-4">
                    <h3>
                      Sign In to <strong>OVM</strong>
                    </h3>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                      consectetur adipisicing.
                    </p>
                  </div>
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group first">
                      <label>Email</label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) =>
                          this.setState({ email: e.target.value })
                        }
                      />
                    </div>
                    <div className="form-group last mb-4">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        onChange={(e) =>
                          this.setState({ password: e.target.value })
                        }
                      />
                    </div>

                    <div className="d-flex mb-5 align-items-center">
                      <label className="control control--checkbox mb-0">
                        <span className="caption">Remember me</span>
                        <input type="checkbox" className="mr-3" />
                        <div className="control__indicator"></div>
                      </label>
                      <span className="ml-auto">
                        <a href="#" className="forgot-pass">
                          Forgot Password
                        </a>
                      </span>
                    </div>

                    <input
                      type="submit"
                      value="Log In"
                      className="buttons btn text-white btn-block btn-primary"
                    />
                    <div className="text-center">
                      <h6>OR</h6>
                    </div>
                    <button className="buttons btn text-white btn-block btn-primary">
                      <Link to="/create-account" className="text-white">
                        Get Register
                      </Link>
                    </button>

                    <span className="d-block text-left my-4 text-muted">
                      {" "}
                      or sign in with
                    </span>

                    <div className="social-login">
                      <a href="#" className="facebook">
                        <UilFacebookF className="mr-3" />
                      </a>
                      <a href="#" className="twitter">
                        <UilTwitter className=" mr-3" />
                      </a>
                      <a href="#" className="google">
                        <UilGoogle className=" mr-3" />
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
