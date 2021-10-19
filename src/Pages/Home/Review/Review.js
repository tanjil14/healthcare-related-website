import React from "react";
import "./Review.css";

const reviewInfo = [
  {
    id: 1,
    img: "https://i.ibb.co/FW9fmqh/pic-1.png",
    name: "john deo",
    des: "Largest network of the world’s finest and brightest medical experts who provide compassionate care using outstanding expertise and advanced technology.",
  },
  {
    id: 2,
    img: "https://i.ibb.co/N9Rhssr/pic-2.png",
    name: "Lusia",
    des: "Largest network of the world’s finest and brightest medical experts who provide compassionate care using outstanding expertise and advanced technology.",
  },
  {
    id: 1,
    img: "https://i.ibb.co/wKvNmn7/pic-3.png",
    name: "Adam",
    des: "Largest network of the world’s finest and brightest medical experts who provide compassionate care using outstanding expertise and advanced technology.",
  },
];
const Review = () => {
  return (
    <section className="review" id="review">
      <h1 className="heading">
        client's <span>review</span>
      </h1>
      <div className="box-container">
        {reviewInfo.map((review) => (
          <div key={Math.random()} className="box">
            <img src={review.img} alt="" />
            <h3>{review.name}</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <p className="text">{review.des}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
