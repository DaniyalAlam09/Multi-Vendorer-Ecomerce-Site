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
  const [catagories, setCatagories] = React.useState([]);
  const [brands, setBrands] = React.useState([]);
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
  const getBrands = () => {
    axios
      .get("http://localhost:4000/brand")
      .then((res) => {
        setBrands(res.data.brand);
        console.log(res.data.brand);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(function () {
    getCategory();
    getBrands();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
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
        navigate("../product-list");
        toast.success("Product Sucessfully Added", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setSending(false);
      })
      .catch((error) => {
        toast.error(error.response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setSending(false);
      });
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
        <div className="col-md-3 form-group required">
          <label for="" class="control-label">
            Select Brand
          </label>
          <br />
          <select
            name="brand"
            className="form-select"
            onChange={(e) => {
              setState((prev) => ({ ...prev, brand: e.target.value }));
            }}
          >
            <option selected> Choose...</option>
            {brands?.map((brand, index) => (
              <option key={index} value={brand.name}>
                {brand.name}
              </option>
            ))}
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
                const file = e.target.files[0];
                setImage(file);
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
            disabled
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
