import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <header className='header'>
      <h3><a href="/">BBM...</a></h3>
      <nav className='menuItems'>
        <ul className='navList'>
          <li><a className='navList-item' href="/">Home</a></li>
          <li><a className='navList-item' href="/project">Portfolio</a></li>
          <li><a className='navList-item' href="/About">About</a></li>
          <li><a className='navList-item' href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};
