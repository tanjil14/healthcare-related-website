import React from 'react';
import { Link } from 'react-router-dom';

const ContactBox = () => {
    return (
        <div className="box">
            <h3>our services</h3>
            <Link to="#services"> <i className="fas fa-phone"></i>  +123-456-7890  </Link>
            <Link to="#"> <i className="fas fa-phone"></i> +111-222-3333  </Link>
            <Link to="#"> <i className="fas fa-envelope"></i> tanjilahmed@gmail.com </Link>
            <Link to="#"> <i className="fas fa-envelope"></i> tanjilahmed@gmail.com </Link>
            <Link to="#"> <i className="fas fa-map-marker-alt"></i>  dhaka, bangladesh - 400104 </Link>
        </div>
    );
};

export default ContactBox;