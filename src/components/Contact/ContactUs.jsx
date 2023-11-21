import React from "react";
import { motion } from "framer-motion";

function ContactUs() {
  return (
    <div style={{background:"white"}}>
    
      <h1>helllo</h1>
      <div>joijjkhiuguy</div>
      <motion.div
        animate={{
          x: 0,
          backgroundColor: "#000",
          boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
          position: "fixed",
          transitionEnd: {
            display: "none",
          },
        }}
      />
    </div>
  );
}
export default ContactUs;
