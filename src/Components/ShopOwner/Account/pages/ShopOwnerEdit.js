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
import axios from "axios";
import { useParams } from "react-router-dom";

function ShopOwnerEdit() {
  let { itemId } = useParams();
  const [image, setImage] = React.useState("");
  const navigate = useNavigate();
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    shopNo: "",
    shopName: "",
    floor: "",
    catagorey: "",
    phone: "",
  });

  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setError(false);
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state);
  };

  const [user, setUser] = React.useState({});
  React.useEffect(function () {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    axios
      .get(`http://localhost:4000/shopowners/shopowner/${user._id}`, config)
      .then((res) => {
        setUser(res.data);
        setState(res.data);
        setState((pre) => ({ ...pre, firstName: res.data.firstName }));
        setState((pre) => ({ ...pre, lastName: res.data.lastName }));
        setState((pre) => ({ ...pre, email: res.data.email }));
        setState((pre) => ({ ...pre, shopNo: res.data.shopNo }));
        setState((pre) => ({ ...pre, shopName: res.data.shopName }));
        setState((pre) => ({ ...pre, catagorey: res.data.catagorey }));
        setState((pre) => ({ ...pre, phone: res.data.phone }));
        console.log(res.data.user);
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstName", state.firstName);
    formData.append("lastName", state.lastName);
    formData.append("email", state.email);
    formData.append("shopNo", state.shopNo);
    formData.append("shopName", state.shopName);
    formData.append("floor", state.floor);
    formData.append("catagorey", state.catagorey);
    formData.append("phone", state.phone);
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    axios
      .put(
        `http://localhost:4000/shopowners/updateprofile/${user._id}`,
        formData,
        config
      )
      .then((response) => {
        console.log(itemId);
        console.log(response.data);
        if (response.status === 200) {
          console.log("SUCCESSS");
          setOpen(true);
          navigate("../shoponwer-dashboard");
          // return response.json();
        } else {
          console.log("SOMETHING WENT WRONG");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  React.useEffect(function () {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    axios
      .get("http://localhost:4000/shopowners/shopowner", config)
      .then((res) => {
        console.log(res.data.user);
        // setState(res.data.user);
        setState((pre) => ({ ...pre, firstName: res.data.user.firstName }));
        setState((pre) => ({ ...pre, lastName: res.data.user.lastName }));
        setState((pre) => ({ ...pre, email: res.data.user.email }));
        setState((pre) => ({ ...pre, shopNo: res.data.user.shopNo }));
        setState((pre) => ({ ...pre, shopName: res.data.user.shopName }));
        setState((pre) => ({ ...pre, catagorey: res.data.user.catagorey }));
        setState((pre) => ({ ...pre, phone: res.data.user.phone }));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div class="ml-5">
        <form autoComplete={false} onSubmit={handleSubmit}>
          <div class="row mt-4 mb-4">
            <div class="col">
              <div class="form-outline">
                <label class="form-label">First name</label>
                <input
                  name="firstName"
                  onChange={handleChange}
                  value={state.firstName}
                  type="text"
                  class="form-control"
                />
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <label class="form-label">Last name</label>
                <input
                  name="lastName"
                  onChange={handleChange}
                  value={state.lastName}
                  type="text"
                  class="form-control"
                />
              </div>
            </div>
          </div>
          <div class="form-outline mb-4 form-group required">
            <label class="form-label control-label">Email</label>
            <input
              name="email"
              onChange={handleChange}
              value={state.email}
              type="email"
              id="form6Example5"
              class="form-control"
              disabled
            />
          </div>

          <div class="form-outline mb-4 form-group required">
            <label class="form-label control-label">Shop name</label>
            <input
              name="shopName"
              value={state.shopName}
              onChange={handleChange}
              type="text"
              id="form6Example3"
              class="form-control"
            />
          </div>

          <div class="form-outline mb-4 form-group required">
            <label class="form-label control-label">Shop Number</label>
            <input
              name="shopNo"
              value={state.shopNo}
              onChange={handleChange}
              type="text"
              id="form6Example4"
              class="form-control"
            />
          </div>
          <div class="col-12 form-group required">
            <label class="visually-hidden control-label">Floor</label>
            <select
              name="floor"
              onChange={handleChange}
              value={state.floor}
              class="select ml-4 mb-4"
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
              name="phone"
              value={state.phone}
              onChange={handleChange}
              type="number"
              id="form6Example6"
              class="form-control"
            />
          </div>

          <div class="col-12">
            <label class="visually-hidden" for="inlineFormSelectPref">
              Catagory Of Shop
            </label>
            <select
              name="category"
              onChange={handleChange}
              value={state.category}
              class="select ml-4 mb-4"
            >
              <option value="none">None</option>
              <option value="Accessories">Accessories</option>
              <option value="Moiles">Moiles</option>
              <option value="Laptops">Laptops</option>
              <option value="Tabetes">Tabetes</option>
            </select>
          </div>
          <button
            type="submit"
            class="buttons btn text-white btn-block btn-primary"
          >
            Update
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
  );
}

export default ShopOwnerEdit;
