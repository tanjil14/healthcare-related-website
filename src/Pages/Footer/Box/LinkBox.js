import React from 'react';
import { Link } from 'react-router-dom';

const LinkBox = () => {
    
    return (
        <div className="box">
            <h3>quick links</h3>
            <Link to="/home#home"> <i class="fas fa-chevron-right"></i> home </Link>
            <Link to="#services"> <i class="fas fa-chevron-right"></i> services </Link>
            <Link to="#about"> <i class="fas fa-chevron-right"></i> about </Link>
            <Link to="#doctors"> <i class="fas fa-chevron-right"></i> doctors </Link>
            <Link to="#book"> <i class="fas fa-chevron-right"></i> book </Link>
            <Link to="#review"> <i class="fas fa-chevron-right"></i> review </Link>
            <Link to="#blogs"> <i class="fas fa-chevron-right"></i> blogs</Link>

        </div>
    );
};

export default LinkBox;