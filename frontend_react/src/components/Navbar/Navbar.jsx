import React from "react";
import "./Navbar.scss";
import images from "../../assets/tvb";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src="{ images }" alt="logo" />
      </div>
    </nav>
  );
};

export default Navbar;
