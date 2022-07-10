import React from "react";
import "./Home.css";
import { about } from "../../portfolio";

export const Home = () => {
  return (
    <>
      <div className="about center">
        <h1>
          Hi, I'm <span className="about_name">{about.name}</span>
        </h1>
        <h2 className="about__role">{about.role}</h2>
        <p className="about__desc">{ about.description }</p>
        <div className="about__contact center">
          <a href={about.resume} target="_blank">
            <span type="button"  className="btn btn--outline">Resume</span> 
          </a>
          <a href={about.social.github} target="_blank" className="link link--icon">GitHub</a>
          <a href={about.social.linkedin} target="_blank" className="link link--icon">Linkedin</a>
        </div>
      </div>
    </>
  );
};
