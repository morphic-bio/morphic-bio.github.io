import React from 'react';
import './events.css';

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
        <img className="morphic__event_img" src="https://physician-news.umiamihealth.org/wp-content/uploads/sites/4/2023/03/morphic-group-3-mar23-4032x3024-1-768x396.jpg" alt="Group picture from MorPhiC Consortium Kick-off Meeting" />
      </div>
      <div className="morphic_event_border"></div>
    </article>

    <article  className="morphic__event">
      <h1>MorPhiC Consortium Virtual Meeting</h1>
      <div className="morphic__event_description">
        <p>June 26 - Jun 27, 2023 (tentative).</p>
      </div>
    </article>

    {/* <div className="morphic__events-container">
        <div className='morphic__events-heading'>
            <h1 className="gradient__text">Events</h1>
        </div>
        <p className='morphic_events-paragraph'><span>MorPhiC Consortium Kick-off Meeting.</span> January 31st -February 1st, 2023. Hyatt Regency Bethesda, MD.</p>
        <div>
            <img src="https://physician-news.umiamihealth.org/wp-content/uploads/sites/4/2023/03/morphic-group-3-mar23-4032x3024-1-768x396.jpg" alt="" />
        </div>
        <p className='morphic_events-paragraph'><span>MorPhiC Consortium Virtual Meeting.</span> June 26 - Jun 27, 2023(tentative).</p>
    </div> */}
  </section>
);

export default Events;
