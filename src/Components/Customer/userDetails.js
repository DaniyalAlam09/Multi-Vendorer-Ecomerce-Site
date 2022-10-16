import React, { Component } from "react";

export default class CustomerAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/userData", {
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
      <div className="container">
        <h4> First Name </h4>
        <h6>{this.state.userData.fname}</h6>
        <h4> Last Name </h4>
        <h6>{this.state.userData.lname}</h6>
        <h4> Email </h4> <h6>{this.state.userData.email}</h6>
      </div>
    );
  }
}
