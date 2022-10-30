import React from "react";
import { useState } from "react";
import MultiImageInput from "react-multiple-image-input";
import { ToastContainer, toast } from "react-toastify";

const AddProduct = () => {
  const crop = {
    unit: "%",
    aspect: 16 / 9,
    width: "100",
  };
  const [images, setImages] = useState({});
  const [state, setState] = useState({
    name: "",
    description: "",
    price: "",
    brandS: "",
    category: "",
  });
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = state;
    console.log(email, password);
    fetch("http://localhost:4000/shops/add-product", {
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
          toast("Successfull");
          // window.localStorage.setItem("token", user.data);
          // window.location.href = "./shopowner-dashboard";
        } else {
          // console.log("ok");
          toast.error("error", {
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
        <div className="col-md-3">
          <label for="" className="form-label">
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
          <div className="ml-3 mt-3">
            <label class="form-label" for="customFile">
              Add Product Cover Image
            </label>
            <input type="file" class="form-control" id="customFile" />
          </div>
          <br />
          <div className="ml-3">
            <br />
            <label class="form-label" for="customFile">
              Add Multiple images
            </label>
            <MultiImageInput
              className="d-block"
              theme={{
                background: "#C5C5C5",
                outlineColor: "#111111",
                textColor: "rgba(255,255,255,0.6)",
                buttonColor: "#ff0e1f",
                // modalColor: "#ffffff",
              }}
              images={images}
              setImages={setImages}
              cropConfig={{ crop }}
            />
          </div>
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
        <div className="col-12 mt-3 col-md-6">
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
        <div className="col-md-6 mt-3">
          <label for="inputCity" className="form-label">
            Color
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-md-2 mt-3">
          <label for="inputZip" className="form-label">
            SKU
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-12 mt-3 d-flex">
          <button
            type="submit"
            className="buttons btn text-white btn-primary ml-auto"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
