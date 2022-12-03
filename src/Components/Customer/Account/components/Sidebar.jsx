import React, { useState } from "react";
import { FaRegChartBar, FaTh } from "react-icons/fa";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import ReorderIcon from "@mui/icons-material/Reorder";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Button } from "@mui/material";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "customer-dashboard",
      name: "Dashboard",
      icon: <DashboardIcon />,
    },
    {
      path: "customer-orders",
      name: "Your Orders",
      icon: <FaRegChartBar />,
    },
    {
      path: "edit-profile",
      name: "Edit Profile",
      icon: <EditIcon />,
    },
    {
      path: "logout",
      name: "Logout",
      icon: <LogoutIcon />,
    },
  ];
  return (
    <div className="contain">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            OVM
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <ReorderIcon onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
        <div className="link">
          <div className="icon">
            <LogoutIcon />
          </div>
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="link_text"
          >
            <button className="text-white">Logout</button>
          </div>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
