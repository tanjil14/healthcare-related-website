import React from "react";
import Doctors from "../../Doctors/Doctors";
import Icons from "../../Icons/Icons";
import Services from "../../Services/Services";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Book from "../Book/Book";
import Review from "../Review/Review";
const Home = () => {
  return (
    <>
      <Banner/>
      <Icons />
      <Services/>
      <About/>
      <Doctors/>
      <Book/>
      <Review/>
    </>
  );
};

export default Home;
