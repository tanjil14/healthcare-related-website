import React from "react";
import img from "../../../image/book-img.svg";
import "./Book.css";
const Book = () => {
  return (
    <section class="book" id="book">
      <h1 class="heading">
        {" "}
        <span>book</span> now{" "}
      </h1>
      <div className="row">
        <div className="image">
          <img src={img} alt="" />
        </div>
        <form>
          <h3>book appointment</h3>
          <input type="text" placeholder="your name" class="box" />
          <input type="number" placeholder="your number" class="box" />
          <input type="email" placeholder="your email" class="box" />
          <input type="date" class="box" />
          <input type="submit" value="book now" class="btn" />
        </form>
      </div>
    </section>
  );
};

export default Book;
