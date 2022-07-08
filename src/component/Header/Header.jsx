import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header className='header'>
      <h3><a href="/">BB.</a></h3>
      <nav className='menuItems'>
        <ul className='navList'>
          <li><a className='navList-item' href="/project">Project</a></li>
          <li><a className='navList-item' href="/skill">Skills</a></li>
          <li><a className='navList-item' href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};
