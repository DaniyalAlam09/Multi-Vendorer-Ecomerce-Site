// import React, { Component } from "react";
// import { useNavigate } from "react-router-dom";

// export default class Logout extends Component {
    
//   componentDidMount() {
    
//     fetch("http://localhost:5000/logout", {
//       method: "GET",
//       crossDomain: true,
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         "Access-Control-Allow-Origin": "*",
//       },
//     }).then((res) => useNavigate("./Login"));
//     console.log("logout");
//   }
//   render() {
//     return <div>Logout</div>;
//   }
// }
