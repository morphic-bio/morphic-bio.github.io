import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/morphic_logo2.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="morphic__navbar">
      <div className="morphic__navbar-links">
        <div className="morphic__navbar-links_logo">
          <a href="#wmorphic"><img src={logo} /></a>
        </div>
        <div className="morphic__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#events">Events</a></p>
          <p><a href="#data">Data</a></p>
          <p><a href="#blog">Publications</a></p>
          <p><a href="#contact">Contact</a></p>
        </div>
      </div>
      <div className="morphic__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="morphic__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="morphic__navbar-menu_container scale-up-center">
          <div className="morphic__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#events">Events</a></p>
            <p><a href="#data">Data</a></p>
            <p><a href="#blog">Publications</a></p>
            <p><a href="#contact">Contact</a></p>
          </div>
          <div className="morphic__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
