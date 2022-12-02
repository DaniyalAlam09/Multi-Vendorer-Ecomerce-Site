import React from "react";
import axios from "axios";
import "./Style.css";
import { map } from "lodash";
import { Container } from "@material-ui/core";

function AllCatagoreyPage() {
  const [catagories, setCatagories] = React.useState([]);
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
  React.useEffect(function () {
    getCategory();
  }, []);
  return (
    <Container maxWidth={"md"}>
      <div classame="container">
        <div classame="container mt-100">
          <div className="row">
            {catagories?.map((categorey) => (
              <div className="col-md-4 col-sm-6 ">
                <div key={catagories.indexOf(categorey)}>
                  <div
                    className="card card1 mb-30"
                    style={{
                      height: "320px",
                      backgroundColor: " rgba(236, 235, 235, 0.137)",
                    }}
                  >
                    <a class="card-img-tiles" href="#" data-abc="true">
                      <div class="inner" style={{ height: "2px" }}>
                        <div class="main-img">
                          <img
                            src={`http://localhost:4000/${categorey.imageUrl}`}
                            alt="Category"
                          />
                        </div>
                        <div class="thumblist">
                          <img
                            src={`http://localhost:4000/${categorey.imageUrl}`}
                            alt="Category"
                          />
                          <img
                            src={`http://localhost:4000/${categorey.imageUrl}`}
                            alt="Category"
                          />
                        </div>
                      </div>
                    </a>
                    <div class="card-body text-center">
                      <h5 class="card-title">{categorey.name}</h5>
                      {/* <p class="text-muted">Starting from $499</p> */}
                      <button class="buttons btn text-white btn-block btn-primary">
                        View Products
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default AllCatagoreyPage;
