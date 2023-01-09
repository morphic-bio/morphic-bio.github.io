import React from 'react';

import genome from '../../assets/humanGenome.png';
import { SearchBar } from '../../components/search/searchBar/searchBar';
import './header.css';

const Header = () => (
  <div className="morphic__header section__padding" id="home">
    <div className="morphic__header-content">
      <h1 className="gradient__text">Bold Predictions For Human Genomics by 2030</h1>
      <p>The biological function(s) of every human gene will be known; for non-coding elements in the human genome, such knowledge will be the rule, rather than the exception.</p>

      <div className="morphic__header-content__input">
        <SearchBar/>
      </div>

    </div>

    <div className="morphic__header-image">
      <img src={genome} />
    </div>
  </div>
);

export default Header;
