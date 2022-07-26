import React from "react";
import { skills, about } from "../../portfolio";
import "./About.css";

const About = () => {
  if (!skills.length) return null;

  return (
    <>
      <div className="about_me">
        <div className="about_detail skl_box">
          <h4 className="name_title">
            Hi, I'm <span className="name">{about.name}</span>
          </h4>
          <p className="role">{about.role}</p>
          <p className="description">{about.description}</p>
          <a href={about.resume} target="_blank" className="btn btn--outline">Resume</a>
        </div>
        <div className="skl_box">
          <h3 className="name_title">SKILLS</h3>
          <div className="skl">
            {skills.map((skill) => (
              <div className="skls_box">
                <div className="skill">
                  <p>{skill.sk}</p>
                  <p className="prs">{skill.prs}%</p>
                </div>
                <progress value={skill.prs} max="100"></progress>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
