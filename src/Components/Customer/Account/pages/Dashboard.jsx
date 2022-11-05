import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div className="">
      <h6> First Name </h6>
      <p>{user.firstName}</p>
      {/* <h6> Last Name </h6>
      <p>{this.state.userData.lastName}</p>
      <h6> Email </h6> <p>{this.state.userData.email}</p> */}
    </div>
  );
};

export default Dashboard;
