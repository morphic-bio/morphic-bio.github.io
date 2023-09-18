import React from 'react';

import genome from '../../assets/humanGenome.png';
import genomeSm from '../../assets/humanGenome-sm.png'
import { RiArrowRightLine } from 'react-icons/ri';
import './header.css';

const Header = () => (
  <div className="morphic__header section__padding" id="home">
    <div className="morphic__header-content">
      <h1 className='morphic__full_title gradient__text'>Molecular Phenotypes of Null Alleles in Cells (MorPhiC)</h1>
      <h2 className='morphic__sub_title'>Bold Predictions For Human Genomics by 2030</h2>
      <p>The biological function(s) of every human gene will be known; for non-coding elements in the human genome, such knowledge will be the rule, rather than the exception.</p>
      <div className="morphic__header-callout">
        <a className="callout-btn" href="https://morphic-genelist-app.shinyapps.io/shiny_genesetexplore/" target="_blank" rel="noopener noreferrer">
          <div className="callout-btn-content">
            <div className="callout-btn-text">
              Browse/Search/Visualize/Download
            </div>
            <div className="callout-btn-subtext">
              Gene List
            </div>
          </div>
          <div className="callout-btn-icon">
            <RiArrowRightLine color='#fff' size={24}/>
          </div>
        </a>
      </div>

    </div>

    <div className="morphic__header-image">
      <img 
        src={genome} 
        alt="Human outline combined with DNA"
        srcSet={`
          ${genomeSm} 256w,
          ${genome} 996w`}
        sizes="
          (max-width: 600px) 480px,
          800px"
      />
    </div>
  </div>
);

export default Header;
