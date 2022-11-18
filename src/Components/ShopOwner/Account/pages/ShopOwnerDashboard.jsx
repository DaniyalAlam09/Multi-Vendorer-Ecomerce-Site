import React, { useState, useEffect } from "react";
import axios from "axios";

const ShopOwnerDashboard = () => {
  const [user, setUser] = React.useState({});
  React.useEffect(function () {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    axios
      .get("http://localhost:4000/shopowners/shopowner", config)
      .then((res) => {
        setUser(res.data.user);
        console.log(res.data.user);
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container ml-3">
      <div class=" ">
        <div class="">
          <div class="row">
            <div class="col-sm-2">
              <p class="mb-0">Full Name</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">{user.firstName}</p>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-sm-2">
              <p class="mb-0">Email</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">{user.email}</p>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">Phone</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">{user.phone}</p>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">Shop Name</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">{user.shopName}</p>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">Shop No</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">{user.shopNo}</p>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">Floor No</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">{user.floor}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopOwnerDashboard;
