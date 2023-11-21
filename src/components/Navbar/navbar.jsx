import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="mainboxnavbar">
        <div className="leftnavbar">
          <h2>Abhishek Ranjan</h2>
        </div>
        <div className="rightnavbar">
          <ul>
            <Link to="/">Home</Link>
            <Link to="/projectlist">Project</Link>
            <Link to="#">Blog</Link>
            <Link to="#">Contact</Link>
            <button className="downlaod_resume">Download CV</button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
