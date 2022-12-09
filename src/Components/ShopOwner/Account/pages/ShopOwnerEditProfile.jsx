import React, { useEffect } from "react";
import { useState } from "react";
import MultiImageInput from "react-multiple-image-input";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useParams } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ShopOwnerEditProfile = () => {
  let { itemId } = useParams();
  const [image, setImage] = React.useState("");

  const [catagories, setCatagories] = React.useState([]);

  const navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    description: "",
    price: "",
    brand: "",
    category: "",
    color: "",
    stoke: "",
    sku: "",
  });

  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(false);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setError(false);
  };

  const getCategory = () => {
    axios
      .get("http://localhost:4000/category")
      .then((res) => {
        setCatagories(res.data.categories);
        console.log(res.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state);
  };
  const updateProduct = (response) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("product_name", state.name);
    formData.append("product_price", state.price);
    formData.append("categorey", state.category);
    formData.append("product_description", state.description);
    formData.append("product_color", state.color);
    formData.append("product_brand", state.brand);
    formData.append("product_stoke", state.stoke);
    formData.append("product_sku", state.sku);
    // formData.append("product_sku", state.color);
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    axios
      .put(
        `http://localhost:4000/shops/updateProduct/` + itemId,
        formData,
        config
      )
      .then((response) => {
        console.log(response.data);
        if (response.status === 200) {
          console.log("SUCCESSS");
          setOpen(true);
          toast.success("Sucessfull Updated", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate("../product-list");
          // return response.json();
        } else {
          console.log("SOMETHING WENT WRONG");
          // setError(true);
          toast.error("SOMETHING WENT WRONG", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          {
            /* Same as */
          }
          <ToastContainer />;
          // this.setState({ requestFailed: true })
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  React.useEffect(
    function () {
      axios
        .get("http://localhost:4000/shops/" + itemId)
        .then((res) => {
          console.log(res.data);
          setState(res.data);
          setState((pre) => ({ ...pre, name: res.data.product_name }));
          setState((pre) => ({ ...pre, price: res.data.product_price }));
          setState((pre) => ({ ...pre, brand: res.data.product_brand }));
          setState((pre) => ({ ...pre, stoke: res.data.product_stoke }));
          setState((pre) => ({ ...pre, sku: res.data.product_sku }));
          setState((pre) => ({ ...pre, color: res.data.product_color }));
          setState((pre) => ({ ...pre, category: res.data.category }));
          setState((pre) => ({
            ...pre,
            description: res.data.product_description,
          }));
          console.log();
          console.log(res.data.product_name);
          // console.log(product);
        })
        .catch((err) => {
          console.log(err);
        });
      getCategory();
    },
    [itemId]
  );

  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleSubmit} className="container row g-3">
        <div className="col-md-6 mb-3">
          <label for="" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={handleChange}
            value={state.name}
          />
        </div>
        <div className="col-md-3 form-group required">
          <label for="" class="control-label">
            Select Catagory
          </label>
          <br />
          <select
            name="category"
            className="form-select"
            onChange={(e) => {
              setState((prev) => ({ ...prev, category: e.target.value }));
            }}
          >
            <option selected> Choose...</option>
            {catagories?.map((catagory, index) => (
              <option key={index} value={catagory.name}>
                {catagory.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <div className="ml-3 mt-3">
            <label class="form-label" for="customFile">
              Add Product Cover Image
            </label>
            <input
              type="file"
              class="form-control"
              id="customFile"
              name="productImage"
              onChange={(e) => {
                const file = e.target.files[0];
                setImage(file);
              }}
            />
          </div>
          <br />
        </div>
        <div className="col-12 mt-3">
          <label for="inputAddress" className="form-label">
            Product Description
          </label>
          <textarea
            name="description"
            type="text"
            className="form-control"
            rows="3"
            onChange={handleChange}
            value={state.description}
          ></textarea>
        </div>
        <div className="col-12 mt-3 col-md-4">
          <label for="inputAddress2" className="form-label">
            Price
          </label>
          <input
            name="price"
            type="text"
            className="form-control"
            placeholder="in RS."
            onChange={handleChange}
            value={state.price}
          />
        </div>
        <div className="col-12 mt-3 col-md-4">
          <label for="inputAddress2" className="form-label">
            Brand
          </label>
          <input
            name="brand"
            type="text"
            className="form-control"
            placeholder="Brand"
            onChange={handleChange}
            value={state.brand}
          />
        </div>
        <div className="col-md-6 mt-3">
          <label for="inputCity" className="form-label">
            Color
          </label>
          <input
            name="color"
            type="text"
            className="form-control"
            onChange={handleChange}
            value={state.color}
          />
        </div>
        <div className="col-md-2 mt-3">
          <label for="inputZip" className="form-label">
            SKU
          </label>
          <input
            name="sku"
            type="text"
            className="form-control"
            onChange={handleChange}
            value={state.sku}
          />
        </div>
        <div className="col-md-2 mt-3">
          <label for="inputZip" className="form-label">
            Stoke
          </label>
          <input
            name="stoke"
            type="text"
            className="form-control"
            onChange={handleChange}
            value={state.stoke}
          />
        </div>
        <div className="col-12 mt-3 d-flex">
          <button
            type="submit"
            className="buttons btn text-white btn-primary ml-auto"
            // onClick={updateProduct}
          >
            Update Product
          </button>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              This is a success message!
            </Alert>
          </Snackbar>
          <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              severity="error"
              onClose={handleClose}
              sx={{ width: "100%" }}
            >
              This is an error message!
            </Alert>
          </Snackbar>
        </div>
      </form>
    </div>
  );
};

export default ShopOwnerEditProfile;
