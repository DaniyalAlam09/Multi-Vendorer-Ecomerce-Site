import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
const Homex = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", width: "12%" }}>
          <Sidebar />
        </div>
        <div style={{ display: "flex", width: "78%" }}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Homex;
