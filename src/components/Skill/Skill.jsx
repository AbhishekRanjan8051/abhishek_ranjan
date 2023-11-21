import React from "react";
import "./skill.css";
import javascripit from "../../assests/skill/javscript.svg";
import typescripit from "../../assests/skill/typescript.svg";
import react from "../../assests/skill/react.svg";
import next from "../../assests/skill/nextjs.svg";
import postgresql from "../../assests/skill/postgresql.svg";
import mongodb from "../../assests/skill/mongodb.svg";
import tailwind from "../../assests/skill/tailwindcss.svg";
import git from "../../assests/skill/git.svg";
import mysql from "../../assests/skill/mysql.svg"

const Skill = () => {
  return (
    <>
      <div className="skill_container">
        <div className="skill_box">
          <div className="skill_heading">
            <span>Skills</span>
            <span>The skills, tools and technologies I am really good at:</span>
          </div>
          <div className="skills_name_icon">
            <div className="skill_first_set">
              <div className="skill_icon_name">
                <img src={javascripit} alt="javascripit" />
                <span>Javascripit</span>
              </div>
              <div className="skill_icon_name">
                <img src={typescripit} alt="typescripit" />{" "}
                <span>Typescripit</span>
              </div>
              <div className="skill_icon_name">
                <img src={react} alt="react" /> <span>React js</span>
              </div>
              <div className="skill_icon_name">
                <img src={next} alt="next" /> <span>Next js</span>
              </div>
              <div className="skill_icon_name">
                <img src={postgresql} alt="postgresql" />{" "}
                <span>Postgresql</span>
              </div>
            </div>
            <div className="skill_first_set">
              <div className="skill_icon_name">
                <img src={mongodb} alt="MongoDb" /> <span>MongoDB</span>
              </div>
              <div className="skill_icon_name">
                <img src={tailwind} alt="tailwind" /> <span>Tailwind</span>
              </div>
              <div className="skill_icon_name">
                <img src={git} alt="git" /> <span>Git</span>
              </div>
              <div className="skill_icon_name">
                <img src={mysql} alt="mysql" /> <span>My SQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Skill;
