import React from 'react';
import { Link } from 'react-router-dom';

const LinkBox = () => {
    
    return (
        <div className="box">
            <h3>quick links</h3>
            <Link to="/home#home"> <i className="fas fa-chevron-right"></i> home </Link>
            <Link to="/home#services"> <i className="fas fa-chevron-right"></i> services </Link>
            <Link to="/home#about"> <i className="fas fa-chevron-right"></i> about </Link>
            <Link to="/home#doctors"> <i className="fas fa-chevron-right"></i> doctors </Link>
            <Link to="/home#book"> <i className="fas fa-chevron-right"></i> book </Link>
            <Link to="/home#review"> <i className="fas fa-chevron-right"></i> review </Link>
           

        </div>
    );
};

export default LinkBox;