import React from "react";
import useServices from "../../hooks/useServices";
import Service from "../Service/Service";
import "./Services.css";
const Services = () => {
  const [services] = useServices();

  return (
    <section className="services" id="services">
      <h1 className="heading">
        our <span>services</span>
      </h1>
      <div className="box-container">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
