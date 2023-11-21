import React from "react";
import { TypeAnimation } from "react-type-animation";

const Typicals = () => {
  return (
    <div style={{ color: "#fff", textAlign: "center", marginTop: "100px" }}>
      <TypeAnimation
        sequence={["Abhishek Ranjan", 3000, "Full Stack Web Developer", 5000]}
        wrapper="span"
        cursor={true}
        speed={90}
        repeat={Infinity}
        style={{
          fontSize: "2em",
          display: "inline-block",
        }}
      />
    </div>
  );
};
export default Typicals;
