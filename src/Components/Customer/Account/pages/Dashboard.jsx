import React, { useState, useEffect } from "react";
import axios from "axios";
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
    <div class="container emp-profile ml-6">
      <form method="post">
        <div class="row">
          <div class="col-md-4">
            <div class="profile-img">
              <img
                // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                alt=""
              />
              <div class="file btn btn-lg btn-primary">
                Change Photo
                <input type="file" name="file" />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="profile-head">
              <h5>{user.firstName}</h5>
              <h6>{user.email}</h6>
              <p class="proile-rating">
                RANKINGS : <span>8/10</span>
              </p>
            </div>
          </div>
          <div class="col-md-2">
            <input
              type="submit"
              class="profile-edit-btn"
              name="btnAddMore"
              value="Edit Profile"
            />
          </div>
        </div>
        <div class="row">
          {/* <div class="col-md-4">
            <div class="profile-work">
              <p>WORK LINK</p>
              <a href="">Website Link</a>
              <br />
              <a href="">Bootsnipp Profile</a>
              <br />
              <a href="">Bootply Profile</a>
              <p>SKILLS</p>
              <a href="">Web Designer</a>
              <br />
              <a href="">Web Developer</a>
              <br />
              <a href="">WordPress</a>
              <br />
              <a href="">WooCommerce</a>
              <br />
              <a href="">PHP, .Net</a>
              <br />
            </div>
          </div> */}
          <div class="col-md-10">
            <div class="tab-content profile-tab">
              <div class="row">
                <div class="col-md-3">
                  <label>User Id</label>
                </div>
                <div class="col-md-6">
                  <p>{user._id}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3">
                  <label>Name</label>
                </div>
                <div class="col-md-6">
                  <p>
                    {user.firstName}
                    {user.lastName}
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3">
                  <label>Email</label>
                </div>
                <div class="col-md-6">
                  <p>{user.email}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3">
                  <label>Phone</label>
                </div>
                <div class="col-md-6">
                  <p>{user.phone}0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Dashboard;
