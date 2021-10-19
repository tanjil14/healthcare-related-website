import React from 'react';
import { Link } from 'react-router-dom';

const FollowBox = () => {
    return (
        <div className="box">
        <h3>follow us</h3>
        <Link to="#"> <i className="fab fa-facebook-f"></i> facebook </Link>
        <Link to="#"> <i className="fab fa-twitter"></i> twitter </Link>
        <Link to="#"> <i className="fab fa-twitter"></i> twitter </Link>
        <Link to="#"> <i className="fab fa-instagram"></i> instagram </Link>
        <Link to="#"> <i className="fab fa-linkedin"></i> linkedin </Link>
        <Link to="#"> <i className="fab fa-pinterest"></i> pinterest </Link>
    </div>
    );
};

export default FollowBox;