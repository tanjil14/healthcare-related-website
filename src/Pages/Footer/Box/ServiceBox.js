import React from 'react';
import { Link } from 'react-router-dom';

const ServiceBox = () => {
    return (
        <div className="box">
            <h3>our services</h3>
            <Link to="#services"> <i class="fas fa-chevron-right"></i> dental care </Link>
            <Link to="#"> <i class="fas fa-chevron-right"></i> message therapy </Link>
            <Link to="#"> <i class="fas fa-chevron-right"></i> cardioloty </Link>
            <Link to="#"> <i class="fas fa-chevron-right"></i> diagnosis </Link>
            <Link to="#"> <i class="fas fa-chevron-right"></i> ambulance service </Link>
        </div>
    );
};

export default ServiceBox;