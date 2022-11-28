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
    <div class="container ml-2">
      <div class="main-body">
        <div class="row gutters-sm">
          <div class="col-md-4 mb-3">
            <div class="card" style={{ height: "34rem" }}>
              <div class="card-body">
                <div class="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://www.w3schools.com/howto/img_avatar.png"
                    alt="Admin"
                    class="rounded-circle"
                    width="150"
                  />
                  <div class="mt-3">
                    <h4> {user.firstName}</h4>
                    <p class="text-secondary mb-1">Hello Saller</p>
                    <p class="text-muted font-size-sm">{user.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8 " style={{ height: "31rem" }}>
            <div class="card mb-3">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Full Name</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {" "}
                    {user.firstName} {user.lastName}
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Email</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">{user.email}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Phone</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">{user.phone}</div>
                </div>

                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Shop Name</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">{user.shopName}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Shop No</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">{user.shopNo}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Floor</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">{user.floor}</div>
                </div>
                <hr />
                <div class="">
                  <div class="d-flex flex-row-reverse">
                    <button class="btn btn-primary signin ml-2">
                      Edit profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopOwnerDashboard;
