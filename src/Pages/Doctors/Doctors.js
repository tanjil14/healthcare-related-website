import React from "react";
import img1 from "../../image/doc-1.jpg";
import "./Doctors.css";
const Doctors = () => {
  return (
    <section class="doctors" id="doctors">
      <h1 class="heading">
        {" "}
        our <span>doctors</span>{" "}
      </h1>
      <div class="box-container">
        <div class="box">
          <img src={img1} alt="" />
          <h3>john deo</h3>
          <span>expert doctor</span>
          <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
          </div>
        </div>

        <div class="box">
          <img src="image/doc-2.jpg" alt="" />
          <h3>john deo</h3>
          <span>expert doctor</span>
          <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
          </div>
        </div>

        <div class="box">
          <img src="image/doc-3.jpg" alt="" />
          <h3>john deo</h3>
          <span>expert doctor</span>
          <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
          </div>
        </div>

        <div class="box">
          <img src="image/doc-4.jpg" alt="" />
          <h3>john deo</h3>
          <span>expert doctor</span>
          <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
          </div>
        </div>

        <div class="box">
          <img src="image/doc-5.jpg" alt="" />
          <h3>john deo</h3>
          <span>expert doctor</span>
          <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
          </div>
        </div>

        <div class="box">
          <img src="image/doc-6.jpg" alt="" />
          <h3>john deo</h3>
          <span>expert doctor</span>
          <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
