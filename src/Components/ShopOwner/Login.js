import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { UilGoogle, UilFacebookF, UilTwitter } from "@iconscout/react-unicons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import { useNavigate } from "react-router-dom";

export default function ShopOwnerLogin() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setState({ ...state, showPassword: !state.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = state;
    console.log(email, password);
    fetch("http://localhost:4000/shopowners/login", {
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
      .then((user) => {
        console.log(user);
        if (user.message == "success") {
          toast("Successfull Logged in");
          window.localStorage.setItem(user.data);
          navigate("../shopowner/shoponwer-dashboard", { replace: true });
          console.log("token", user.data);
          window.location.href = "shopowner/shoponwer-dashboard";
        } else if (user.message == "Incorrect Password") {
          toast.error("Invalid Password", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          // console.log("ok");
          toast.error("User Doesnt exist", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
  };
  return (
    <div className="content heading">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center">
            <img src="/images/Account.png" alt="Image" className="img-fluid " />
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
                  <Link className="negative" to="/account">
                    Login as Customer?
                  </Link>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="form-group first form-group required">
                    <label class="control-label">Email</label>
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      onChange={handleChange}
                      value={state.email}
                    />
                  </div>
                  <div className=" last mb-4 form-group required">
                    <InputLabel
                      htmlFor="standard-adornment-password"
                      class="control-label"
                    >
                      Password
                    </InputLabel>
                    <Input
                      type={state.showPassword ? "text" : "password"}
                      className="form-control"
                      name="password"
                      onChange={handleChange}
                      value={state.password}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {state.showPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </div>

                  <div className="d-flex mb-5 align-items-center">
                    {/* <label className="control control--checkbox mb-0">
                        <span className="caption">Remember me</span>
                        <input type="checkbox" className="mr-3" />
                        <div className="control__indicator"></div>
                      </label> */}
                    <span className="ml-auto">
                      <Link to="/reset-password" className="forgot-pass">
                        Forgot Password?
                      </Link>
                    </span>
                  </div>

                  <input
                    type="submit"
                    value="Log In"
                    className="buttons btn text-white btn-block btn-primary"
                  />
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