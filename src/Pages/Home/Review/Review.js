import React from "react";
import "./Review.css";

const Review = () => {
  return (
    <section className="review" id="review">
      <h1 class="heading">
        {" "}
        client's <span>review</span>{" "}
      </h1>
      <div class="box-container">
        <div class="box">
          <img src="image/pic-1.png" alt="" />
          <h3>john deo</h3>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
          <p class="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            sapiente nihil aperiam? Repellat sequi nisi aliquid perspiciatis
            libero nobis rem numquam nesciunt alias sapiente minus voluptatem,
            reiciendis consequuntur optio dolorem!
          </p>
        </div>

        <div class="box">
          <img src="image/pic-2.png" alt="" />
          <h3>john deo</h3>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
          <p class="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            sapiente nihil aperiam? Repellat sequi nisi aliquid perspiciatis
            libero nobis rem numquam nesciunt alias sapiente minus voluptatem,
            reiciendis consequuntur optio dolorem!
          </p>
        </div>

        <div class="box">
          <img src="image/pic-3.png" alt="" />
          <h3>john deo</h3>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
          <p class="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            sapiente nihil aperiam? Repellat sequi nisi aliquid perspiciatis
            libero nobis rem numquam nesciunt alias sapiente minus voluptatem,
            reiciendis consequuntur optio dolorem!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Review;
