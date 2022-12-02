import React, { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [order, setOrder] = React.useState([]);
  React.useEffect(function () {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    axios
      .get("http://localhost:4000/order/order", config)
      .then((res) => {
        setOrder(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="text-center ml-3 mt-4">
      <div class=" container d-flex justify-content-center"></div>
      {order ? (
        <table className="table">
          <thead>
            <tr>
              {/* <th>Sr #</th> */}
              <th>Order ID</th>
              <th>Order Status</th>
              <th>Bill</th>
            </tr>
          </thead>
          <tbody>
            {/* {Object.values(order).map((item, index) => ( */}
            <tr>
              {/* <td>{index + 1}</td> */}
              <td>{order._id}</td>
              <td>{order.status}</td>
              <td>{order.bill}</td>
            </tr>
            {/* ))} */}
          </tbody>
        </table>
      ) : (
        <div>
          <div class="container bootstrap snippets bootdey mb-5 mt-5">
            <div class="row">
              <div class="col-md-12">
                <div class="pull-right" style={{ marginTop: "10px" }}>
                  <div class="d-flex align-items-center justify-content-around text-center">
                    <img
                      // class="img-thumbnail "
                      style={{ width: "40%" }}
                      src="/images/No.png"
                    />
                    <div>
                      <h2>No Order Yet</h2>
                      {/* <p>Requested page not found!</p> */}
                      {/* <div class="error-actions">
                        <Link
                          to="/"
                          class="btn btn-primary  signin btn-lg sign-in"
                        >
                          Back Home
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
