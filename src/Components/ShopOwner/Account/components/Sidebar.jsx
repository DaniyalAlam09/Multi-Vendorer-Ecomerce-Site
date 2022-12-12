import React, { useState } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, NavLink } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import ReorderIcon from "@mui/icons-material/Reorder";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CategoryIcon from "@mui/icons-material/Category";
import AddIcon from "@mui/icons-material/Add";
const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "shoponwer-dashboard",
      name: "Dashboard",
      icon: <DashboardIcon />,
    },
    {
      path: "manage-orders",
      name: "Manage Orders",
      icon: <FaUserAlt />,
    },
    {
      path: "shoponwer-analytics",
      name: "Analytics",
      icon: <FaRegChartBar />,
    },
    {
      path: "edit-profile",
      name: "Edit",
      icon: <EditIcon />,
    },
    {
      path: "addproduct",
      name: "Add Product",
      icon: <AddIcon />,
    },
    {
      path: "product-list",
      name: "Products",
      icon: <CategoryIcon />,
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
          <h1
            style={{ display: isOpen ? "block" : "none", cursor: "pointer" }}
            className="logo"
          >
            <Link style={{ color: "white" }} to="/">
              OVM
            </Link>
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
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
