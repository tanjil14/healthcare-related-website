import React from 'react';
import "./About.css";
import img from "../../../image/about-img.svg"
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <section className="about" id="about">
            <h1 className="heading"> <span>about</span> us </h1>
            <div className="row">
            <div className="image">
            <img src={img} alt=""/>
        </div>
        <div className="content">
        <h3>we take care of your healthy life</h3>
        <p>Largest network of the world’s finest and brightest medical experts who provide compassionate care using outstanding expertise and advanced technology.</p>
            <p>Combining the best specialists and equipment to provide you nothing short of the best in healthcare</p>
            <Link to="/home" className="btn"> learn more <span className="fas fa-chevron-right"></span> </Link>
        </div>
            </div>
        </section>
    );
};

export default About;