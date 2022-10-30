import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [user, setUser] = useState("");
  useEffect(() => {
    fetch("http://localhost:4000/users/user")
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
