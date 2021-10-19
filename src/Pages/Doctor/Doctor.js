import React from 'react';
import { Link } from 'react-router-dom';

const Doctor = ({doctor}) => {
    const {name,title,photo}=doctor;
    return (
        <div className="box">
        <img src={photo} alt=""/>
        <h3>{name}</h3>
        <span>{title}</span>
        <div className="share">
            <Link to="#" className="fab fa-facebook-f"></Link>
            <Link to="#" className="fab fa-twitter"></Link>
            <Link to="#" className="fab fa-instagram"></Link>
            <Link to="#" className="fab fa-linkedin"></Link>
        </div>
        </div>
    );
};

export default Doctor;