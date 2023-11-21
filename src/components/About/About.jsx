import React from "react";
import "./about.css";

import abhishekranjan from "../../assests/img/abhishekranjan.png";

import { Card, Button } from "react-bootstrap";
// import {
//   AiFillGithub,
//   AiFillLinkedin,
//   AiFillCodeSandboxCircle,
// } from "react-icons/ai";
import { RiReactjsFill, RiCss3Fill } from "react-icons/ri";
import { AiFillHtml5 } from "react-icons/ai";
import { BsFillBootstrapFill } from "react-icons/bs";
import {
  SiRedux,
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiFilezilla,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { DiBitbucket } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
import ResuableCompponents from "../Shared/ResuableCompponents";

const About = () => {
  return (
    <>
      {/* <div className="container">
        <div className="eductiondetails">
          <p style={{ color: "white" }}>EDUCTIONAL DETAILS</p>
          <ResuableCompponents
            head={"Full Stack Web Development"}
            collage={"Masai School"}
            state={"Benguluru"}
            // doc={}
          />
          <ResuableCompponents
            head={"B.Sc(Mathematics)"}
            collage={"Lalit Narayan Mithila University"}
            state={"Darbhanga,Bihar"}
            doc={"https://drive.google.com/file/d/1jm9LftnXWa6_C1iB9GX-cKHyzPUwB5UP/view"}
          />
          <ResuableCompponents
            head={"12th (Science)"}
            collage={"M.F.D.K. COLLEGE BAGHLA"}
            state={"Samastipur,Bihar"}
          />
        </div>

        <div className="secondcontainer">
          <p style={{ color: "white" }}>ABOUT ME</p>
          <div className="aboutme">
            <span>FULL STACK WEB DEVELOPER</span>
            <br />
            <br />
            <Card className="aboutus">
              <span>
                My name is Abhishek Ranjan, and I am an enthusiastic full-stack
                web developer with a specialization in the MERN stack. I am
                committed to using my skills and knowledge to contribute to the
                growth and success of an organization while gaining practical
                technical experience. Presently, I am employed at Indus Net
                Technologies, a service-based company, where I work on multiple
                projects. However, there are three major projects that I have
                been working on, and they have provided me with valuable
                learning opportunities. I have dedicated myself entirely to
                these projects, and they are currently functioning flaw.
              </span>
            </Card>
          </div>
          <br />

          <div className="skills">
            <Card style={{ padding: "20px" }}>
              <h1 style={{ textAlign: "center" }}>Frontend</h1>
              <br />
              <div className="skillicon">
                <AiFillHtml5 className="icon" />
                <RiReactjsFill className="icon" />
                <RiCss3Fill className="icon" />
                <BsFillBootstrapFill className="icon" />
                <SiRedux className="icon" />
              </div>
            </Card>
          </div>
          <br />
          <div className="skills">
            <Card style={{ padding: "20px" }}>
              <h1 style={{ textAlign: "center" }}>Backend</h1>
              <br />
              <div className="skillicon">
                <FaNodeJs className="icon" />
                <SiMongodb className="icon" />
                <SiExpress className="icon" />
                <SiPostgresql className="icon" />
                <GrMysql className="icon" />
              </div>
            </Card>
          </div>
          <br />
          <div className="skills">
            <Card style={{ padding: "20px" }}>
              <h1 style={{ textAlign: "center" }}>Server</h1>
              <br />
              <div className="skillicon">
                <AiFillGithub className="icon" />
                <DiBitbucket className="icon" />
                <SiFilezilla className="icon" />
              </div>
            </Card>
          </div>
          <br />
          <br />
        </div>
      </div>
      <br />
      <br />
      <div className="svgmain">
        <div className="custom-shape-divider-bottom-1681579832">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            />
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            />
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            />
          </svg>
        </div>
      </div> */}

      <div className="container">
        <div className="sub_container_about">
          <div className="about_me_text">
            <div>About Me</div>
          </div>
          <div className="about_me_summary">
            <div className="firstcontainers">
              <img src={abhishekranjan} alt="" />
            </div>
            <div className="aboutme_content">
              <span>
                My name is Abhishek Ranjan, and I am an enthusiastic full-stack
                web developer with a specialization in the MERN stack. I am
                committed to using my skills and knowledge to contribute to the
                growth and success of an organization while gaining practical
                technical experience. Presently, I am employed at Indus Net
                Technologies, a service-based company, where I work on multiple
                projects.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
