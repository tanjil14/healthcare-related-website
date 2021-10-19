import React from 'react';
import { Link } from 'react-router-dom';

const FollowBox = () => {
    return (
        <div class="box">
        <h3>follow us</h3>
        <Link to="#"> <i class="fab fa-facebook-f"></i> facebook </Link>
        <Link to="#"> <i class="fab fa-twitter"></i> twitter </Link>
        <Link to="#"> <i class="fab fa-twitter"></i> twitter </Link>
        <Link to="#"> <i class="fab fa-instagram"></i> instagram </Link>
        <Link to="#"> <i class="fab fa-linkedin"></i> linkedin </Link>
        <Link to="#"> <i class="fab fa-pinterest"></i> pinterest </Link>
    </div>
    );
};

export default FollowBox;