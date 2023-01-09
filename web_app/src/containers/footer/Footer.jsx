import React from 'react';
import logo from '../../assets/MorphicLogo.png';
import './footer.css';

const Footer = () => (
  <div className="morphic__footer section__padding">
    <div className="morphic__footer-heading">
      <h1 className="gradient__text">Contact us</h1>
    </div>

    <div className="morphic__footer-btn">
      <p>Contact</p>
    </div>

    <div className="morphic__footer-links">
      <div className="morphic__footer-links_logo">
        <img src={logo} alt="morphic_logo" />
        <p>Casdasdsad1213asdasdb, <br /> All Rights Reserved</p>
      </div>
      <div className="morphic__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="morphic__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="morphic__footer-links_div">
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>morphicprogram@mail.nih.gov</p>
      </div>
    </div>

    <div className="morphic__footer-copyright">
      <p>@2022 Morphic. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
