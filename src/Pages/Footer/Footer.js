import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="box-container">
        <div className="box">
          <h3>quick links</h3>
          <a href="#">
            {" "}
            <i class="fas fa-chevron-right"></i> home{" "}
          </a>
          <a href="#">
            {" "}
            <i class="fas fa-chevron-right"></i> services{" "}
          </a>
          <a href="#">
            {" "}
            <i class="fas fa-chevron-right"></i> about{" "}
          </a>
          <a href="#">
            {" "}
            <i class="fas fa-chevron-right"></i> doctors{" "}
          </a>
          <a href="#">
            {" "}
            <i class="fas fa-chevron-right"></i> book{" "}
          </a>
          <a href="#">
            {" "}
            <i class="fas fa-chevron-right"></i> review{" "}
          </a>
          <a href="#">
            {" "}
            <i class="fas fa-chevron-right"></i> blogs{" "}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
