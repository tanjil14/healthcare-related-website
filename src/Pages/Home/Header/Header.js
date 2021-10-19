import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const handleToggle = () => {
    setIsActive(!isActive);
  };
 

  return (
    <header className="header">
      <Link to="/" class="logo">
        {" "}
        <i class="fas fa-heartbeat"></i> medcare.{" "}
      </Link>

      <nav class={isActive ? "navbar active" : "navbar"}>
        <Link to="#home">home</Link>
        <Link to="#services">services</Link>
        <Link to="#about">about</Link>
        <Link to="#doctors">doctors</Link>
        <Link to="#book">book</Link>
        <Link to="#review">review</Link>
        <Link to="#blogs">blogs</Link>
        
      </nav>
      <div
        onClick={handleToggle}
        id="menu-btn"
        className={isActive ? "fas fa-times" : "fas fa-bars"}
      ></div>
    </header>
  );
};

export default Header;
