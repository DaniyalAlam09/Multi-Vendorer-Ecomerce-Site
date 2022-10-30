import React from "react";
import { Link } from "react-router-dom";
const logout = () => {
  console.log("clicked");
  localStorage.clear();

  window.location.href = "/account";
};

const ShopOwnerLogout = () => {
  return (
    <div>
      <Link to="/account" type="submit">
        <button onClick={logout} class="btn btn-primary signin ml-2">
          Logout
        </button>
      </Link>
    </div>
  );
};

export default ShopOwnerLogout;
