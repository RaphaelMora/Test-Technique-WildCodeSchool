import React from "react";
import Logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header>
      <h1>
        <img src={Logo} alt="Wild Code School logo" />
        Les Argonautes
      </h1>
    </header>
  );
};

export default Header;