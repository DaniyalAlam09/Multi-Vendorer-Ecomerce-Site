import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Detail.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
function Detail() {
  let { productId } = useParams();
  const [product, setProduct] = React.useState({});
  const [counter, setCounter] = React.useState(0);

  React.useEffect(
    function () {
      axios
        .get("http://localhost:4000/shops/" + productId)
        .then((res) => {
          setProduct(res.data);
          console.log(res.data);
          console.log(product);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [productId]
  );

  return (
    <div>
      <h1></h1>
      <div className="container">
        <div className="card">
          <div className="container-fliud">
            <div className="wrapper row">
              <div className=" col-md-6">
                {/* <ul className="">
                  <li className="active">
                    <a data-target="#pic-1" data-toggle="tab">
                      <img src="http://placekitten.com/200/126" />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-2" data-toggle="tab">
                      <img src="http://placekitten.com/200/126" />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-3" data-toggle="tab">
                      <img src="http://placekitten.com/200/126" />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-4" data-toggle="tab">
                      <img src="http://placekitten.com/200/126" />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-5" data-toggle="tab">
                      <img src="http://placekitten.com/200/126" />
                    </a>
                  </li>
                </ul>
                <div className="">
                  <div className="tab-pane active" id="pic-1">
                    <img src="http://placekitten.com/400/252" />
                  </div>
                </div> */}
                <div className="row">
                  <div className="col-md-3">
                    <ul className="small">
                      <li className="active">
                        <a data-target="#pic-1" data-toggle="tab">
                          <img src="http://placekitten.com/200/126" />
                        </a>
                      </li>
                      <li>
                        <a data-target="#pic-2" data-toggle="tab">
                          <img src="http://placekitten.com/200/126" />
                        </a>
                      </li>
                      <li>
                        <a data-target="#pic-3" data-toggle="tab">
                          <img src="http://placekitten.com/200/126" />
                        </a>
                      </li>
                      <li>
                        <a data-target="#pic-4" data-toggle="tab">
                          <img src="http://placekitten.com/200/126" />
                        </a>
                      </li>
                      <li>
                        <a data-target="#pic-5" data-toggle="tab">
                          <img src="http://placekitten.com/200/126" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-9 large">
                    <div className="tab-pane active" id="pic-1">
                      <img src="http://placekitten.com/400/252" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="details col-md-6">
                <h3 className="product-title">{product.product_name}</h3>
                <div className="rating">
                  <span className="review-no">41 reviews</span>
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
                          setCounter(counter - 1);
                        }}
                      >
                        -
                      </Button>
                    }

                    {<Button>{counter}</Button>}
                    <Button
                      disabled={counter >= product["countInStock"]}
                      onClick={() => {
                        setCounter(counter + 1);
                      }}
                    >
                      +
                    </Button>
                  </ButtonGroup>

                  <div className="d-flex flex-row-reverse ">
                    <button
                      className="btn btn-primary signin justify-end"
                      type="button"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrapper row mt-5">
              <div className="preview col-md-6">fde</div>
              <div className="preview col-md-6">fde</div>
            </div>
          </div>
        </div>
      </div>

      {/* {item.brand} */}
    </div>
  );
}

export default Detail;
