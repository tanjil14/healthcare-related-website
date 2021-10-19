import React from "react";
import ContactBox from "./Box/ContactBox";
import FollowBox from "./Box/FollowBox";
import LinkBox from "./Box/LinkBox";
import ServiceBox from "./Box/ServiceBox";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="box-container">
        <LinkBox />
        <ServiceBox />
        <ContactBox />
        <FollowBox />
      </div>
      <div className="credit">
       
        created by <span> tanjil ahmed</span> || all rights reserved
      </div>
    </footer>
  );
};

export default Footer;
