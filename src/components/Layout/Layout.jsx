import React from "react";

// import "../Navbar/sidenavbar.css";
import Navbar from "../Navbar/navbar";
import "./layout.css";
function Layout(props) {
  return (
    <div>
      <div
        className="main_box"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {" "}
        <Navbar />
        <div className="main_content_box">{props.children}</div>
      </div>
    </div>
  );
}

export default Layout;
