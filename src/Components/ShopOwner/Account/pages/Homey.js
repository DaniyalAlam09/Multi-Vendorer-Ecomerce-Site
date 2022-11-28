import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
const Homey = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", width: "auto" }}>
          <Sidebar />
        </div>
        <div style={{ display: "flex", width: "auto" }}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Homey;
