import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard.jsx";
import Orders from "./pages/Orders.jsx";
import EditProfile from "./pages/EditProfile.jsx";
import Logout from "./pages/Logout.jsx";
import ProductList from "./pages/ProductList.jsx";
import Homex from "./pages/Homex.jsx";

function MainAccount() {
  return (
    // <BrowserRouter>
    // <Sidebar>
    //   <Routes>
    //     <Route path="/customer-dashboard" element={<Dashboard />} />
    //     <Route path="/edit-profile" element={<EditProfile />} />
    //     <Route path="/customer-orders" element={<Orders />} />
    //     <Route path="/logout" element={<Logout />} />
    //     {/* <Route path="/productList" element={<ProductList />} /> */}
    //   </Routes>
    // </Sidebar>
    // </BrowserRouter>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homex />}>
          <Route path="/customer-dashboard" element={<Dashboard />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/customer-orders" element={<Orders />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/productList" element={<ProductList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default MainAccount;
