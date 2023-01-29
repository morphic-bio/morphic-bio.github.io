import React, { useEffect, useRef, useState } from 'react';
import morphic_map from '../../assets/MorPhiC_Consortium_Map.png';
import './map.css';

const Map = () => {
    const [ height, setHeight ] = useState(0)
    const [ width, setWidth ] = useState(0)
    const [ hasDimensions, setHasDimensions ] = useState(false)
    const elementRef = useRef(null)
    useEffect(() => {
      setHeight(elementRef.current.height);
      setWidth(elementRef.current.width);
      setHasDimensions(true);
    });

    const [ isUW, setIsUW ] = useState(false)
    const [ isGilbert, setIsGilbert ] = useState(false)
    const [ isNWUC, setIsNWUC ] = useState(false)
    const [ isJacksonLab, setIsJacksonLab ] = useState(false)
    const [ isSloanKettering, setIsSloanKettering ] = useState(false)
    const [ isUMiami, setIsUMiami ] = useState(false)
    const [ isEBI, setIsEBI ] = useState(false)
    const [ isQMUL, setIsQMUL ] = useState(false)

    const [ isFullDesc, setIsFullDesc ] = useState(false)
    const [ isFullUWDesc, setIsFullUWDesc ] = useState(false)

    const [ gilbertLabOverview, setGilbertLabOverview ] = useState("")

    const handleClick = (event) => {
        setInfo("University of Washington")
    }

    const showInfoUCSF = (event) => {
        setInfo("Gilbert Lab")
        setInstitution("University of California San Francisco")
        setDesc("Mapping the function of every gene in human cells will enable us to begin to define how gene expression programs impart specialized and adaptive human cellular functions required for life. The innovative approach proposed here combines CRISPRoff, a cutting-edge genetic manipulation technology, with comprehensive single cell molecular phenotyping approaches in a classic model of human development, which will allow us to study the effects of specific genes in a biologically meaningful way to yield new insights that are broadly applicable across cell types and disease areas. Specifically, we will characterize at single cell resolution in space and time the function of human transcription factors and epigenetic regulators in early developmental cell fate transitions.")
    }

    const showInfoStanford = (event) => {
        setInfo("Chang Lab / Stanford University School of Medicine")
        setInstitution("Stanford University School of Medicine")
        setDesc("We seek to understand the role in disease played by a class of genes called long non-coding RNAs (lncRNAs), which are pervasive in the human genome yet have limited or no protein-coding potential. Our team invents new technologies for genome-wide analyses to tackle the vastness of the noncoding genome with greater comprehensiveness and precision than was previously possible.  Our lab discovered that long noncoding RNAs have diverse modes of action when it comes to gene control and are key contributors to some human diseases such as cancer. We are now focused particularly on the interplay of regulatory RNAs and chromatin, seeking out new archetypes of regulatory RNAs and novel mechanisms for gene regulation.")
    }

    const showUWOverview = (event) => {
      setIsUW(true)
    }
    const hideUWOverview = (event) => {
      setIsUW(false)
    }
    const showGilbertLabOverview = (event) => {
      setIsGilbert(true)
    }
    const hideGilbertLabOverview = (event) => {
      setIsGilbert(false)
    }
    const showNWUCOverview = (event) => {
      setIsNWUC(true)
    }
    const hideNWUCOverview = (event) => {
      setIsNWUC(false)
    }
    const showJacksonLabOverview = (event) => {
      setIsJacksonLab(true)
    }
    const hideJacksonLabOverview = (event) => {
      setIsJacksonLab(false)
    }
    const showSloanKetteringOverview = (event) => {
      setIsSloanKettering(true)
    }
    const hideSloanKetteringOverview = (event) => {
      setIsSloanKettering(false)
    }
    const showUMiamiOverview = (event) => {
      setIsUMiami(true)
    }
    const hideUMiamiOverview = (event) => {
      setIsUMiami(false)
    }
    const showEBIOverview = (event) => {
      setIsEBI(true)
    }
    const hideEBIOverview = (event) => {
      setIsEBI(false)
    }
    const showQMULOverview = (event) => {
      setIsQMUL(true)
    }
    const hideQMULOverview = (event) => {
      setIsQMUL(false)
    }
    
    const showFullUCSFDesc = (event) => {
      setIsFullDesc(!isFullDesc)
      setIsFullUWDesc(false)
    }
    const showFullUWDesc = (event) => {
      setIsFullUWDesc(!isFullUWDesc)
      setIsFullDesc(false)
    }
  
    return (
      <div className="morphic__map section__padding" id="map">
        <div className="morphic__map-container">
            <map name="moreinfo">
                <area shape="rect" coords="0,80,200,160" href="#whatmorphic" alt="UW Yeung Lab" onClick={showFullUWDesc} onMouseEnter={showUWOverview} onMouseLeave={hideUWOverview} />
                <area shape="rect" coords={ height !== 0 && width !== 0 ? "0," + 0.5 * height + "," + 0.18 * width + "," + 0.74 * height : "0,230,220,340"} href="#whatmorphic" onClick={showFullUCSFDesc} onMouseEnter={showGilbertLabOverview} onMouseLeave={hideGilbertLabOverview} alt="Gilbert Lab" />
                <area shape="rect" coords="265,165,395,270" href="#whatmorphic" alt="NORTHWESTERN UNIVERSITY AT CHICAGO" onMouseEnter={showNWUCOverview} onMouseLeave={hideNWUCOverview} />
                <area shape="rect" coords="470,170,630,220" href="#whatmorphic" alt="JACKSON LABORATORY"  onMouseEnter={showJacksonLabOverview} onMouseLeave={hideJacksonLabOverview} />
                <area shape="rect" coords="435,250,640,310" href="#whatmorphic" alt="SLOAN-KETTERING INST CAN RESEARCH" onMouseEnter={showSloanKetteringOverview} onMouseLeave={hideSloanKetteringOverview} />
                <area shape="rect" coords="435,395,600,455" href="#whatmorphic" alt="University of Miami Miller School of Medicine Schürer Lab" onMouseEnter={showUMiamiOverview} onMouseLeave={hideUMiamiOverview}  />
                <area shape="rect" coords="1065,0,1245,65" href="#whatmorphic" alt="Samples Phenotypes and Ontologies Team, EBI" onMouseEnter={showEBIOverview} onMouseLeave={hideEBIOverview} />
                <area shape="rect" coords="1065,100,1245,165" href="#whatmorphic" alt="Queen Mary University of London" onMouseEnter={showQMULOverview} onMouseLeave={hideQMULOverview} />
            </map>
          <img src={morphic_map} alt="MorPhiC Consortium Map" useMap="#moreinfo" ref={elementRef}/>
        </div>
        <div className="morphic__map-description">
          

          {(isGilbert && (!isFullDesc)) && (
            <div className="lab-overview">
              <h4>NIH Grant Number</h4>
              <p>UM1HG012660</p>
              <h4>NIH RePORTER</h4>
              <a href="https://reporter.nih.gov/search/fEYSskefXkKWXanvDf3JSA/project-details/10518318" target="_blank" rel="noreferrer">https://reporter.nih.gov/search/fEYSskefXkKWXanvDf3JSA/project-details/1051831</a>
              <h4>Contact PI/Project Leader</h4>
              <p>Luke Gilbert, Associate Professor</p>
              Hover over UCSF
            </div>
          )}
          {(isUW && (!isFullUWDesc)) && (
            <div className="lab-overview">
              <h4>NIH Grant Number</h4>
              <p>U24HG012674</p>
              <h4>NIH RePORTER</h4>
              <a href="https://reporter.nih.gov/search/0Vl49Afb50KdwhUX5tzEEw/project-details/10519442" target="_blank" rel="noreferrer">https://reporter.nih.gov/search/0Vl49Afb50KdwhUX5tzEEw/project-details/10519442</a>
              <h4>Contact PI/Project Leader</h4>
              <p>Ka Yee Yeung</p>
            </div>
          )}
          {isNWUC && (
            <div className="lab-overview">
              <h4>NIH Grant Number</h4>
              <p>UM1HG012649</p>
              <h4>NIH RePORTER</h4>
              <a href="https://reporter.nih.gov/search/fEYSskefXkKWXanvDf3JSA/project-details/10517781#details" target="_blank" rel="noreferrer">https://reporter.nih.gov/search/fEYSskefXkKWXanvDf3JSA/project-details/10517781#details</a>
              <h4>Contact PI/Project Leader</h4>
              <p>Adli, Mazhar</p>
            </div>
          )}
          {isJacksonLab && (
            <div className="lab-overview">
              <h4>NIH Grant Number</h4>
              <p>UM1HG012651</p>
              <h4>NIH RePORTER</h4>
              <a href="https://reporter.nih.gov/search/fEYSskefXkKWXanvDf3JSA/project-details/10517881" target="_blank" rel="noreferrer">https://reporter.nih.gov/search/fEYSskefXkKWXanvDf3JSA/project-details/10517881</a>
              <h4>Contact PI/Project Leader</h4>
              <p>Robson, Paul</p>
            </div>
          )}
          {isSloanKettering && (
            <div className="lab-overview">
              <h4>NIH Grant Number</h4>
              <p>UM1HG012654</p>
              <h4>NIH RePORTER</h4>
              <a href="https://reporter.nih.gov/search/fEYSskefXkKWXanvDf3JSA/project-details/10518021" target="_blank" rel="noreferrer">https://reporter.nih.gov/search/fEYSskefXkKWXanvDf3JSA/project-details/10518021</a>
              <h4>Contact PI/Project Leader</h4>
              <p>HUANGFU, DANWEI</p>
            </div>
          )}
          {isUMiami && (
            <div className="lab-overview">
              <h4>NIH Grant Number</h4>
              <p>U24HG012674</p>
              <h4>NIH RePORTER</h4>
              <a href="https://reporter.nih.gov/search/0Vl49Afb50KdwhUX5tzEEw/project-details/10519442" target="_blank" rel="noreferrer">https://reporter.nih.gov/search/0Vl49Afb50KdwhUX5tzEEw/project-details/10519442</a>
              <h4>Contact PI/Project Leader</h4>
              <p>Stephan Schürer</p>
            </div>
          )}
          {isEBI && (
            <div className="lab-overview">
              <h4>NIH Grant Number</h4>
              <p>1U24HG012674-01</p>
              <h4>NIH RePORTER</h4>
              <a href="https://reporter.nih.gov/project-details/10519442" target="_blank" rel="noreferrer">https://reporter.nih.gov/project-details/10519442</a>
              <h4>Contact PI/Project Leader</h4>
              <p>Helen Parkinson</p>
            </div>
          )}
          {isQMUL && (
            <div className="lab-overview">
              <h4>NIH Grant Number</h4>
              <p></p>
              <h4>NIH RePORTER</h4>
              <a href="" target="_blank" rel="noreferrer"></a>
              <h4>Contact PI/Project Leader</h4>
              <p>Pilar Cacheiro</p>
            </div>
          )}

          {isFullDesc && (
            <div className="lab-overview">
              <h4>NIH Grant Number</h4>
              <p>UM1HG012660</p>
              <h4>NIH RePORTER</h4>
              <a href="https://reporter.nih.gov/search/fEYSskefXkKWXanvDf3JSA/project-details/10518318" target="_blank" rel="noreferrer">https://reporter.nih.gov/search/fEYSskefXkKWXanvDf3JSA/project-details/1051831</a>
              <h4>Contact PI/Project Leader</h4>
              <p>Luke Gilbert, Associate Professor</p>
              <h4>Description</h4>
              <p>Mapping the function of every gene in human cells will enable us to begin to define how gene expression programs impart specialized and adaptive human cellular functions required for life. The innovative approach proposed here combines CRISPRoff, a cutting-edge genetic manipulation technology, with comprehensive single cell molecular phenotyping approaches in a classic model of human development, which will allow us to study the effects of specific genes in a biologically meaningful way to yield new insights that are broadly applicable across cell types and disease areas. Specifically, we will characterize at single cell resolution in space and time the function of human transcription factors and epigenetic regulators in early developmental cell fate transitions.</p>
            </div>
          )}
          {isFullUWDesc && (
            <div className="lab-overview">
            <h4>NIH Grant Number</h4>
            <p>U24HG012674</p>
            <h4>NIH RePORTER</h4>
            <a href="https://reporter.nih.gov/project-details/10519442" target="_blank" rel="noreferrer">https://reporter.nih.gov/project-details/10519442</a>
            <h4>Contact PI/Project Leader</h4>
            <p>Ka Yee Yeung</p>
            <h4>Description</h4>
            <p>The Yeung Lab focuses on the development of optimized methods and cloud-based software tools for the analyses of big biomedical data. Our platform Biodepot-workflow-builder (Bwb) allows biomedical scientists to create, share and reproducibly execute bioinformatics workflows in a point-and-click user interface. Bwb supports RNA-seq, DNA-seq, nanopore and image processing workflows. </p>
          </div>
          )}
        </div>
      </div>
    );
  };
  
  export default Map;