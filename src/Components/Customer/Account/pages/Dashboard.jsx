import React, { Component } from "react";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };
  }
  componentDidMount() {
    fetch("http://localhost:4000/users/user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        this.setState({ userData: data.data });
      });
  }
  render() {
    return (
      <div className="">
        <h6> First Name </h6>
        <p>{this.state.userData.firstName}</p>
        <h6> Last Name </h6>
        <p>{this.state.userData.lastName}</p>
        <h6> Email </h6> <p>{this.state.userData.email}</p>
      </div>
    );
  }
}
