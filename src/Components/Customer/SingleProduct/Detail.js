import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Detail.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import HeroSection from "../../Customer/HomePage/HeroSection";
import SingleShopHero from "../../Customer/Images/SingleShopHero.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Detail() {
  let { productId } = useParams();
  const [product, setProduct] = React.useState({});
  const [counter, setCounter] = React.useState(1);
  const { _id } = useParams();

  const item = { _id };
  // const Cart = (e) => {
  //   console.log(product._id);
  // };

  const Cart = () => {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    axios
      .post(
        `http://localhost:4000/product/cart`,
        {
          productId: product._id,
          quantity: counter,
        },
        config
      )
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          console.log("SUCCESSS");
          console.log(response.data);
          toast.success("Product Sucessfully Added to Cart", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          // navigate("../product-list");
        } else {
          console.log("SOMETHING WENT WRONG");
        }
      })
      .catch((error) => {
        console.log(error.response.data);
        toast.error(error.response.data, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  React.useEffect(
    function () {
      axios
        .get("http://localhost:4000/shops/" + productId)
        .then((res) => {
          setProduct(res.data);
          // console.log(res.data);
          // console.log(product);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [productId]
  );

  const [state, setState] = useState({
    comment: "",
    name: "",
  });
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", state.name);
    formData.append("comment", state.comment);
    // formData.append("product_sku", state.color);
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    axios
      .post(`http://localhost:4000/shops/review/${productId}`, formData, config)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          console.log("SUCCESSS");
        } else {
          console.log("SOMETHING WENT WRONG");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <ToastContainer />
      <HeroSection
        Name1={"Single Product"}
        ImageSource={SingleShopHero}
        className="shopimage"
      />
      <div className="container">
        <div className=" d-flex justify-content-center mb-4 mt-4">
          <h1>Here Your Product</h1>
        </div>
        <div className="card">
          <div className="container-fliud">
            <div className="wrapper row">
              <div className=" col-md-6">
                <div className="row">
                  <div className=" large">
                    <div className="tab-pane active" id="pic-1">
                      <img
                        src={`http://localhost:4000/${product.product_image}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="details col-md-6">
                <h3 className="product-title">{product.product_name}</h3>
                <div className="rating">
                  <span className="review-no">
                    <strong>
                      {product.reviews ? product.reviews.length : "No"}
                    </strong>{" "}
                    Review on this Product
                  </span>
                </div>
                <p className="product-description">
                  {product.product_description}
                </p>
                <div className=" row">
                  <h4 className="colors col-6 col-sm-4">Price:</h4>
                  <h5 className="col-6 col-sm-4">RS.{product.product_price}</h5>
                </div>
                <div className=" row mt-3">
                  <h5 className="colors col-6 col-sm-4">Colors</h5>
                  <FormControl className="col-6 col-sm-4">
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="Red"
                        control={<Radio />}
                        label="Red"
                      />
                      <FormControlLabel
                        value="Green"
                        control={<Radio />}
                        label="Green"
                      />
                      <FormControlLabel
                        value="Blue"
                        control={<Radio />}
                        label="Blue"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className=" d-flex justify-content-between mt-4">
                  <ButtonGroup
                    size="small"
                    aria-label="small outlined button group"
                  >
                    {
                      <Button
                        disabled={counter <= 0}
                        onClick={() => {
                          setCounter((pre) => pre - 1);
                        }}
                      >
                        -
                      </Button>
                    }

                    {<Button>{counter}</Button>}
                    <Button
                      disabled={counter >= product["countInStock"]}
                      onClick={() => {
                        setCounter((pre) => pre + 1);
                      }}
                    >
                      +
                    </Button>
                  </ButtonGroup>

                  <div className="d-flex flex-row-reverse ">
                    <button
                      className="btn btn-primary signin justify-end"
                      type="button"
                      onClick={() => Cart()}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrapper row mt-5">
              <div className="preview col-md-6">
                <h2>Reviews</h2>
                {product.reviews?.map((product) => (
                  <div>
                    <div className="">
                      <div className="">
                        <div>
                          <p className="mt-3 ml-4 review-name">{`${product.name}`}</p>
                        </div>
                        <div className="ml">
                          <p className="ml-5 comment">{`${product.comment}`}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="preview col-md-6">
                <h3>Enter Your Review</h3>
                <form onSubmit={handleSubmit} className="container">
                  <div className="">
                    <label for="inputZip" className="form-label">
                      Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      className="form-control"
                      onChange={handleChange}
                      value={state.name}
                    />
                    <label for="inputZip" className="form-label">
                      Enter Your Review
                    </label>
                    <textarea
                      name="comment"
                      type="text"
                      className="form-control"
                      rows="3"
                      onChange={handleChange}
                      value={state.comment}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="buttons btn text-white btn-primary mt-3"
                  >
                    Post
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {item.brand} */}
    </div>
  );
}

export default Detail;
// import React from "react";

// function Detail() {
//   return <div>Detail</div>;
// }

// export default Detail;
