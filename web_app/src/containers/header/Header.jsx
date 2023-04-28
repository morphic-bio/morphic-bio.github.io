import React from 'react';

import genome from '../../assets/humanGenome.png';
import { SearchBar } from '../../components/search/searchBar/searchBar';
import './header.css';

const Header = () => (
  <div className="morphic__header section__padding" id="home">
    <div className="morphic__header-content">
      <h1 className='morphic__full_title gradient__text'>Molecular Phenotypes of Null Alleles in Cells (MorPhiC)</h1>
      <h2 className='morphic__sub_title'>Bold Predictions For Human Genomics by 2030</h2>
      <p>The biological function(s) of every human gene will be known; for non-coding elements in the human genome, such knowledge will be the rule, rather than the exception.</p>

      <div className="morphic__header-content__input">
        <SearchBar/>
      </div>

    </div>

    <div className="morphic__header-image">
      <img src={genome} alt="Human outline combined with DNA" />
    </div>
  </div>
);

export default Header;
