import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    axios
      .get("http://localhost:4000/users/logout", config)
      .then((response) => {
        navigate("../../account");
        navigate(0);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <Link to="/account" type="submit">
        <button onClick={handleLogout} class="btn btn-primary signin ml-2">
          Logout
        </button>
      </Link>
    </div>
  );
};

export default Logout;
