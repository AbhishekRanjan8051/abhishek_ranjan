import React from "react";
import Navbar from "../Navbar/navbar";
import abhishekranjan from "../../assests/img/abhishekranjan.png";

import "./home.css";
import About from "../About/About";
import Project from "../Projects/Project";
import ContactUs from "../Contact/ContactUs";
import Intro from "../About/Intro";
import Skill from "../Skill/Skill";

const Home = () => {
  return (
    <>
      <div className="main">
        {/* <Navbar /> */}
        <Intro />
        <About />
        {/* <div className="firstcontainers">
        <img src={abhishekranjan} alt="" />
      </div> */}
        {/* <About />
      <Project />
      <ContactUs/> */}{" "}

      <Skill/>
      </div>
    </>
  );
};
export default Home;
