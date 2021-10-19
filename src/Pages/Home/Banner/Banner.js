import React from "react";
import { Link } from "react-router-dom";
import img from "../../../image/home-img.svg";
import "./Banner.css";
const Banner = () => {
  return (
      <section className="banner" id="home">
        <div className="image">
          <img src={img} alt="" />
        </div>

        <div className="content">
          <h3>stay safe, stay healthy</h3>
          <p>
          “Bringing healthcare of International standards within the reach of every individual.”
          </p>
          <Link to="/home" className="btn">
            contact us <span className="fas fa-chevron-right"></span>
          </Link>
        </div>
      </section>

  );
};

export default Banner;