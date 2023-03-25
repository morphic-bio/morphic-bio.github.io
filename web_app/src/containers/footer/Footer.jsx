import React from 'react';
import logo from '../../assets/morphic_logo_v3.svg';
import { RiTwitterFill, RiYoutubeFill, RiFacebookFill } from 'react-icons/ri';
import './footer.css';

const Footer = () => (
  <footer className="morphic__footer section__padding">
    <section id="contact">
      <div className="morphic__footer-heading">
        <h1 className="gradient__text">Contact us</h1>
      </div>

      <button className="morphic__footer-btn">
        <p>Contact</p>
      </button>
    </section>

    <section className="morphic__footer-links">
      <section className="morphic__footer-links_logo">
        <img src={logo} alt="Morphic Logo" />
        <p>Molecular Phenotypes of Null Alleles in Cells<br /> All Rights Reserved</p>
      </section>
      <section className="morphic__footer-links_div">
        <h4>Links</h4>
        <p><a href="https://www.genome.gov/" target="_blank" rel="noreferrer">genome.gov</a></p>
        <p>Data</p>
        <p>Social Media</p>
      </section>
      <section className="morphic__footer-links_div">
        <h4>About</h4>
        <p>Publications</p>
        <p>Events</p>
        <p>Labs</p>
      </section>
      <section className="morphic__footer-links_div">
        <h4>Get in touch</h4>
        <p>morphicprogram@mail.nih.gov</p>
        <div className="morphic__footer-social-media">
          <a href="http://www.twitter.com/" target="_blank" rel="noreferrer"><RiTwitterFill color='#fff' size={18}/></a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><RiFacebookFill color='#fff' size={18}/></a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><RiYoutubeFill color='#fff' size={18}/></a>
        </div>
      </section>
    </section>

    <div className="morphic__footer-copyright">
      <p>@2022 Morphic. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
