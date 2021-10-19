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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sed
            autem vero? Magnam, est laboriosam!
          </p>
          <Link to="#" class="btn">
            contact us <span class="fas fa-chevron-right"></span>
          </Link>
        </div>
      </section>

  );
};

export default Banner;