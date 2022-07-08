import React from "react";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <div className="about center">
        <h1>
          Hi, I'm <span className="about_name">Bhargav Bhinsra</span>
        </h1>
        <h2 className="about__role">A Front End Engineer.</h2>
        <p className="about__desc">
          Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis
          perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus
          modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores
          minima consectetur.
        </p>
        <div className="about__contact center">
          <a href="#">
            <span type="button"  className="btn btn--outline">Resume</span> 
          </a>
          <a href="#" className="link link--icon">GitHub</a>
          <a href="#" className="link link--icon">Linkedin</a>
        </div>
      </div>
    </>
  );
};
