import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { RiMenu3Line, RiCloseLine, RiTwitterFill, RiYoutubeFill, RiFacebookFill } from 'react-icons/ri';
import logo from '../../assets/morphic_logo_v3.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="morphic__nav">
    <div className="morphic__navbar">
      <div className="morphic__navbar-links">
        <div className="morphic__navbar-links_logo">
          <Link id="img_logo" to="/"><img src={logo} alt="Morphic homepage" /></Link>
        </div>
        <div className="morphic__navbar-links_container">
          <p><HashLink smooth to="/#news">News</HashLink></p>
          <p><Link to="/events">Events</Link></p>
          <p><Link to="/data">Data</Link></p>
          <p><Link to="/publications">Publications</Link></p>
          <div className="morphic__navbar-dropdown">
            <p className="morphic__navbar-dropdown-title">About</p>
            <div className="morphic__navbar-dropdown-content">
              <p><a href="#contact">Funding: NHGRI</a></p>
              <p><Link to="/policies">Policies</Link></p>
              <p><Link to="/about-us">About Us</Link></p>
            </div>
          </div>
        </div>
      </div>
      <div className="morphic__navbar-submit">
        <a href="https://github.com/morphic-bio/morphic-documentation/wiki/MorPhiC-Data-Contribution-Guide" target="_blank" rel="noopener noreferrer">Submit</a>
      </div>
      <div className="morphic__navbar-genome">
        <a href="https://www.genome.gov/" target="_blank" rel="noreferrer">genome.gov</a>
      </div>
      <div className="morphic__navbar-sign">
        <button type="button">Sign up</button>
      </div>
      <div className="morphic__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="morphic__navbar-menu_container scale-up-center">
          <div className="morphic__navbar-menu_container-links">
            <p><a href="#news">News</a></p>
            <p><Link to="/events">Events</Link></p>
            <p><Link to="/data">Data</Link></p>
            <p><Link to="/publications">Publications</Link></p>
            <p><Link to="/policies">Policies</Link></p>
            <p><Link to="/about-us">About Us</Link></p>
            <p><a href="https://www.genome.gov/" target="_blank" rel="noreferrer">genome.gov</a></p>
          </div>
          <div className="morphic__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
          <div className="morphic__navbar-menu_container-social">
              <a href="http://www.twitter.com/" target="_blank" rel="noreferrer" aria-label="Follow us Twitter"><RiTwitterFill color='#fff' size={18}/></a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Follow us Facebook"><RiFacebookFill color='#fff' size={18}/></a>
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="Follow us Youtube"><RiYoutubeFill color='#fff' size={18}/></a>
          </div>
        </div>
        )}
      </div>
    </div>
    <div className='morphic__social'>
        <ul className='morphic__social_list'>
          <li><a href="http://www.twitter.com/" target="_blank" rel="noreferrer" aria-label="Follow us Twitter"><RiTwitterFill color='#fff' size={18}/></a></li>
          <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Follow us Facebook"><RiFacebookFill color='#fff' size={18}/></a></li>
          <li><a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="Follow us Youtube"><RiYoutubeFill color='#fff' size={18}/></a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
