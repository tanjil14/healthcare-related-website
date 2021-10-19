import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";
const Header = () => {
  const { user,logOut } = useAuth();
  const [isActive, setIsActive] = useState(false);
  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        <i class="fas fa-heartbeat"></i> medcare.
      </Link>

      <nav class={isActive ? "navbar active" : "navbar"}>
        <HashLink to="/home#home">home</HashLink>
        <HashLink to="/home#services">Services</HashLink>
        <HashLink to="/home#about">About</HashLink>
        <HashLink to="/home#doctors">Doctors</HashLink>
        <HashLink to="/home#book">Book</HashLink>
        <HashLink to="/home#review">Review</HashLink>
        <span>{user.displayName}</span>
        {user.email ? (
          <HashLink onClick={logOut} to="/">Logout</HashLink>
        ) : (
          <HashLink to="/login">Login</HashLink>
        )}
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
