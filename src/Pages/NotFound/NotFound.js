import React from "react";
import img from "../../image/404.png";
import "./NotFound";
const NotFound = () => {
  return (
    <section className="notFound" style={{marginTop:"8rem"}}>
      <div className="content" style={{textAlign:"center"}}>
        <img className="" src={img} alt="" />
        <h5 style={{marginTop:"1rem",color:"red",textAlign:"center",fontSize:"2rem"}}>
          Opps! Page Not Found.
        </h5>
      </div>
    </section>
  );
};

export default NotFound;
