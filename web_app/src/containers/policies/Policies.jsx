import React from 'react';
import './policies.css';

const Policies = () => (
  <section className="section__margin morphic__events-container" id="policies">
    <div className='morphic__events-heading'>
      <h1 className="gradient__text">Policies</h1>
    </div>
    <article  className="morphic__policy">
      <p>The following policies were approved by the MorPhiC Steering Committee on July 5, 2023.</p>
      <div className="morphic__event_description">
        <ul>
          <li>Code of Conduct</li>
          <li>Publication policy</li>
          <li>Publication policy</li>
          <li>Human Genome Assembly policy</li>
          <li>Affiliate membership policy</li>
          <li>Data sharing policy (pending)</li>
        </ul>
      </div>
    </article>
  </section>
);

export default Policies;
