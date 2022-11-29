import React from "react";
import axios from "axios";
import "./Style.css";
import { map } from "lodash";

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
    <div classame="container">
      <div classame="container mt-100">
        <div className="row">
          {catagories?.map((categorey) => (
            <div className="col-md-4 col-sm-6 ">
              <div key={catagories.indexOf(categorey)}>
                <div className="card mb-30">
                  <a class="card-img-tiles" href="#" data-abc="true">
                    <div class="inner">
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
                    <h4 class="card-title">{categorey.name}</h4>
                    {/* <p class="text-muted">Starting from $499</p> */}
                    <a
                      class="btn btn-outline-primary btn-sm"
                      href="#"
                      data-abc="true"
                    >
                      View Products
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllCatagoreyPage;
