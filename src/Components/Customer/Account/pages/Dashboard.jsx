import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style.css";

const Dashboard = () => {
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
      .get("http://localhost:4000/users/user", config)
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
            <div class="card" style={{ height: "27em" }}>
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
                    <p class="text-secondary mb-1">{user.profession}</p>
                    <p class="text-muted font-size-sm">{user.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8" style={{ height: "27em" }}>
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
                  <div class="col-sm-9 text-secondary">{user.phoneNo}</div>
                </div>

                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Address</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">{user.address}</div>
                </div>
                <hr />
                <div class="">
                  <div class="d-flex flex-row-reverse">
                    <button class="btn btn-primary signin ml-2">
                      <Link to="user/edit-profile" className="text-white">
                        Edit Profile
                      </Link>
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

export default Dashboard;
