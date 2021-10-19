import React from "react";
import "./Icons.css";
const Icons = () => {
  return (
    <section className="icons-container">
      <div class="icons">
        <i class="fas fa-user-md"></i>
        <h3>140+</h3>
        <p>doctors at work</p>
      </div>
      <div class="icons">
        <i class="fas fa-users"></i>
        <h3>1040+</h3>
        <p>satisfied patients</p>
      </div>

      <div class="icons">
        <i class="fas fa-procedures"></i>
        <h3>500+</h3>
        <p>bed facility</p>
      </div>

      <div class="icons">
        <i class="fas fa-hospital"></i>
        <h3>80+</h3>
        <p>available hospitals</p>
      </div>
    </section>
  );
};

export default Icons;
