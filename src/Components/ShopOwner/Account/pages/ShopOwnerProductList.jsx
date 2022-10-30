// import React from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";

const ShopOwnerProductList = () => {
  const [user, setUser] = useState("");
  // const Data = () => {
  useEffect(() => {
    fetch("http://localhost:4000/shopowners/viewproducts")
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setUser(actualData);
        console.log(user);
      })
      .catch((err) => {
        console.log(err.message);
      });
    // then((res) => {
    //   setUser(res.data.user);
    //   console.log(res.data);
    // });
  }, []);
  // };

  return (
    <div>
      <h5>Total Registered Customers</h5>
      <h6>{user.length}</h6>
      <table className="table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Brand</th>
            <th>Categorey</th>
            <th>Price</th>
            <th>id</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(user).map((item, index) => (
            <tr key={index}>
              <td>{item.product_name}</td>
              {/* <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item._id}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShopOwnerProductList;
