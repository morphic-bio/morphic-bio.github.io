import React from 'react';
import './policies.css';

const Policies = () => (
  <section className="section__margin morphic__events-container" id="policies">
    <div className='morphic__events-heading'>
      <h1 className="gradient__text">Policies</h1>
    </div>
    <article  className="morphic__policy">
      <p>The following policies were approved by the MorPhiC Steering Committee.</p>
      <div className="morphic__event_description">
        <ul>
          <li><a href="https://github.com/morphic-bio/morphic-bio.github.io/blob/main/Policies/Morphic%20Code%20of%20Conduct%20for%20Events.pdf" target="_blank" rel="noopener noreferrer">Code of Conduct</a></li>
          <li><a href="https://github.com/morphic-bio/morphic-bio.github.io/blob/main/Policies/MorPhiC%20-%20Publication%20Policy.pdf" target="_blank" rel="noopener noreferrer">Publication Policy</a></li>
          <li><a href="https://github.com/morphic-bio/morphic-bio.github.io/blob/main/Policies/Morphic%20-%20Software%20Sharing%20Policy.pdf" target="_blank" rel="noopener noreferrer">Software Sharing Policy</a></li>
          <li><a href="https://github.com/morphic-bio/morphic-bio.github.io/blob/main/Policies/Morphic%20-%20Human%20Genome%20Assembly%20Policy.pdf" target="_blank" rel="noopener noreferrer">Human Genome Assembly Policy</a></li>
          <li><a href="https://github.com/morphic-bio/morphic-bio.github.io/blob/main/Policies/MorPhiC%20Affiliate%20Membership.pdf" target="_blank" rel="noopener noreferrer">Affiliate Membership Policy</a></li>
          <li><a href="https://github.com/morphic-bio/morphic-bio.github.io/blob/main/Policies/Morphic%20-%20Data%20Release%20and%20Use%20Policy.pdf" target="_blank" rel="noopener noreferrer">Data Release and Use Policy</a></li>
        </ul>
      </div>
    </article>
  </section>
);

export default Policies;
