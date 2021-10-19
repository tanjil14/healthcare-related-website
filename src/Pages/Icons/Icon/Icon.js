import React from "react";

const Icon = ({ icon }) => {
  const { quantity, title, logo } = icon;
  return (
    <div class="icons">
      <i class={logo}></i>
      <h3>{quantity}+</h3>
      <p>{title}</p>
    </div>
  );
};

export default Icon;
