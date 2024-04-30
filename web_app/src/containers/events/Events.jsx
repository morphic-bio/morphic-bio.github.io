import React from 'react';
import './events.css';
import morphic_event from '../../assets/morphic_event.webp';

const Events = () => (
  <section className="section__margin morphic__events-container" id="about-us">
    <div className='morphic__events-heading'>
      <h1 className="gradient__text">Events</h1>
    </div>
    <article  className="morphic__event">
      <h1>MorPhiC Consortium Kick-off Meeting</h1>
      <div className="morphic__event_description">
        <p>January 31st -February 1st, 2023. Hyatt Regency Bethesda, MD.</p>
      </div>
      <div className="morphic__event_img-container">
        <picture>
          <source 
            type="image/webp"
            srcSet={morphic_event}
          />
          <img
            src="https://i0.wp.com/news.med.miami.edu/wp-content/uploads/2023/05/morphic-group-3-mar23-4032x3024-1-300x155-1.jpg"
            alt="Morphic Article Cover Image" 
          />
        </picture>
      </div>
      <div className="morphic_event_border"></div>
    </article>

    <article  className="morphic__event">
      <h1>MorPhiC Consortium Virtual Meeting</h1>
      <div className="morphic__event_description">
        <p>June 26 - Jun 27, 2023 (tentative).</p>
      </div>
    </article>
  </section>
);

export default Events;
