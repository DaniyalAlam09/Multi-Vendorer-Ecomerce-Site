import React from "react";
import { useState } from "react";
import MultiImageInput from "react-multiple-image-input";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const crop = {
    unit: "%",
    aspect: 16 / 9,
    width: "100",
  };
  const navigate = useNavigate();
  // const [images, setImages] = useState("");
  const [image, setImage] = React.useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgess] = React.useState(0);
  const [sending, setSending] = React.useState(false);
  const [isFilePicked, setIsFilePicked] = useState(false);

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
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state);
  };
  const getFormData = () => {
    var form_data = new FormData();
    for (var key in state) {
      form_data.append(key, state[key]);
    }
    form_data.append("product", image);
    return form_data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("ll");
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
      onUploadProgress: function (progressEvent) {
        var percentCompleted =
          Math.round((progressEvent.loaded * 100) / progressEvent.total) + "%";
        setProgess(percentCompleted);
      },
    };
    setSending(false);
    axios
      .post(`http://localhost:4000/shops/add-product`, getFormData(), config)
      .then((response) => {
        setSending(false);
        // window.location.reload(true);
        // if (response.data.success) {
        //   navigate(`/panel/gig`);
        // }
      })
      .catch((error) => {
        setSending(false);

        //toast
      });
    alert("9");
  };

  return (
    <div>
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
      <form onSubmit={handleSubmit} className="container row g-3">
        <div className="col-md-6 mb-3 form-group required">
          <label for="" class="control-label">
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
          <select className="form-select">
            <option selected> Choose...</option>
            <option value="Accessories">Accessories</option>
            <option value="Moiles">Moiles</option>
            <option value="Laptops">Laptops</option>
            <option value="Tabetes">Tabetes</option>
          </select>
        </div>
        <div>
          <div className="ml-3 mt-3 form-group required">
            <label class="control-label" for="customFile">
              Add Product Cover Image
            </label>
            <input
              type="file"
              onChange={(e) => {
                setProgess(0);
                const file = e.target.files[0]; // accessing file
                setImage(file); // storing file
                setIsFilePicked(true);
              }}
            />
          </div>
          <br />
        </div>
        <div className="col-12 mt-3 form-group required">
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
        <div className="col-12 mt-3 col-md-4 form-group required">
          <label for="inputAddress2" class="control-label">
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
            placeholder="Color"
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-2 mt-3 form-group required">
          <label for="inputZip" class="control-label">
            SKU
          </label>
          <input
            name="sku"
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-2 mt-3 form-group required">
          <label for="inputZip" class="control-label">
            Stoke
          </label>
          <input
            name="stoke"
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="col-12 mt-3 d-flex">
          <button
            type="submit"
            className="buttons btn text-white btn-primary ml-auto"
            disabled={sending}
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
