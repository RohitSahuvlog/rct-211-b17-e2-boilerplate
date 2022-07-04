import React from "react";
import "../index.css";
const Navbar = () => {
  return (
    <div className="navflex">
      <div data-cy="navbar-home-link">
        <img
          src="/Adidas_Logo.png"
          width="60px"
          alt="logo"
          style={{ display: "block" }}
        />
      </div>

      <div>
        {/* Link button to /login page, if the user is not authenticated, else don't show it*/}
        <button data-cy="navbar-login-button">LOGIN</button>
      </div>
    </div>
  );
};

export default Navbar;
