import React, { Component } from "react";
import { Link } from "react-router-dom";
import { UilGoogle, UilFacebookF, UilTwitter } from "@iconscout/react-unicons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class ShopResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email } = this.state;
    console.log(email);
    fetch("http://localhost:4000/shopowners/forgot-password", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        alert(data.status);
      });
    //   alert("An Email send to "+ email + " for verification")
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
                      <strong>Forget Password</strong>
                    </h3>
                  </div>
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group first">
                      <label>Enter Email</label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) =>
                          this.setState({ email: e.target.value })
                        }
                      />
                    </div>

                    <input
                      type="submit"
                      value="Next"
                      className="buttons btn text-white btn-block btn-primary"
                    />
                    {/* <button className="buttons btn text-white btn-block btn-primary">
                      <Link to="/account" className="text-white">
                        Go Back
                      </Link>
                    </button> */}
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
