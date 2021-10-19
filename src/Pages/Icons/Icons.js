import React, { useEffect, useState } from "react";
import Icon from "./Icon/Icon";
import "./Icons.css";
const Icons = () => {
  const [icons, setIcons] = useState([]);
  useEffect(() => {
    fetch("./icons.json")
      .then((res) => res.json())
      .then((data) => setIcons(data));
  }, []);
  return (
    <section className="icons-container">
      {icons.map((icon) => (
        <Icon key={Math.random()} icon={icon} />
      ))}
    </section>
  );
};

export default Icons;
