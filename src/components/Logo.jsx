import React from "react";
import "./css/Logo.css";

import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <a href="/" className="logo">
      <img src={logo} alt="Logo" />
    </a>
  );
};

export default Logo;
