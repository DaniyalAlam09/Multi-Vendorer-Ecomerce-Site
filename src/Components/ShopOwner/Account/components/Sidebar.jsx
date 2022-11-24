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
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "shoponwer-dashboard",
      name: "Dashboard",
      icon: <FaTh />,
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
      icon: <FaCommentAlt />,
    },
    {
      path: "addproduct",
      name: "Add Product",
      icon: <FaShoppingBag />,
    },
    {
      path: "product-list",
      name: "Products",
      icon: <FaShoppingBag />,
    },
    {
      path: "logout",
      name: "Logout",
      icon: <FaThList />,
    },
  ];
  return (
    <div className="sidebyside">
      <div style={{ width: isOpen ? "500px" : "200px" }} className="sidebar">
        {/* <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">OVM</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div> */}
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
