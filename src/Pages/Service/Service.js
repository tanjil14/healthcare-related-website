import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { logo, title, description } = service;
  return (
    <div className="box">
      <i className={logo}></i>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href="#" className="btn">
        learn more <span className="fas fa-chevron-right"></span>{" "}
      </Link>
    </div>
  );
};

export default Service;
