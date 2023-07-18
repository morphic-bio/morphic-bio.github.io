import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './feature.css';

const Feature = ({ title, text, id }) => (
  <div className="morphic__features-container__feature">
    <HashLink smooth to={"about-us#" + id}>
    <div className="morphic__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    </HashLink>
    <div className="morphic__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;
