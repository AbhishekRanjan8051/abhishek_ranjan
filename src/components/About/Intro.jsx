import React from "react";
import "./about.css";
import abhishekranjan from "../../assests/img/abhishekranjan.png";
import { CiLocationOn, CiTwitter, CiLinkedin } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";

function Intro() {
  return (
    <>
      <div className="intro">
        <div className="intro_me">
          <div>
            <p className="intro_me_name">Hi I'm Abhishek Ranjan</p>
            <p>
              My name is Abhishek Ranjan, and I am an enthusiastic full-stack
              web developer with a specialization in the MERN stack. I am
              committed to using my skills and knowledge to contribute to the
              growth and success of an organization while gaining practical
              technical experience. Presently, I am employed at Indus Net
              Technologies, a service-based company, where I work on multiple
              projects.
            </p>
            <span>
              <p>
                <CiLocationOn /> Bihar,India
              </p>
              <div className="_intro_avaliable d-flex">
                <p class="avaliable"></p>
                <p>Available for new projects</p>
              </div>
            </span>
          </div>
          <div className="profile_link">
            <VscGithubAlt />
            <CiTwitter />
            <CiLinkedin />
          </div>
        </div>
        <div className="firstcontainerss">
          <img src={abhishekranjan} alt="" />
        </div>
      </div>
    </>
  );
}
export default Intro;
