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
    const [ isFullNWUCDesc, setIsFullNWUCDesc ] = useState(false)
    const [ isFullJacksonLabDesc, setIsFullJacksonLabDesc ] = useState(false)
    const [ isFullSloanKetteringDesc, setIsFullSloanKetteringDesc ] = useState(false)
    const [ isFullUMiamiDesc, setIsFullUMiamiDesc ] = useState(false)
    const [ isFullEBIDesc, setIsFullEBIDesc ] = useState(false)
    const [ isFullQMULDesc, setIsFullQMULDesc ] = useState(false)

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
      setIsFullNWUCDesc(false)
      setIsFullJacksonLabDesc(false)
      setIsFullSloanKetteringDesc(false)
      setIsFullUMiamiDesc(false)
      setIsFullEBIDesc(false)
      setIsFullQMULDesc(false)
    }
    const showFullUWDesc = (event) => {
      setIsFullUWDesc(!isFullUWDesc)

      setIsFullDesc(false)
      setIsFullNWUCDesc(false)
      setIsFullJacksonLabDesc(false)
      setIsFullSloanKetteringDesc(false)
      setIsFullUMiamiDesc(false)
      setIsFullEBIDesc(false)
      setIsFullQMULDesc(false)
    }
    const showFullNWUCDesc = (event) => {
      setIsFullNWUCDesc(!isFullNWUCDesc)

      setIsFullUWDesc(false)
      setIsFullDesc(false)
      setIsFullJacksonLabDesc(false)
      setIsFullSloanKetteringDesc(false)
      setIsFullUMiamiDesc(false)
      setIsFullEBIDesc(false)
      setIsFullQMULDesc(false)
    }
    const showFullJacksonLabDesc = (event) => {
      setIsFullJacksonLabDesc(!isFullJacksonLabDesc)

      setIsFullUWDesc(false)
      setIsFullDesc(false)
      setIsFullNWUCDesc(false)
      setIsFullSloanKetteringDesc(false)
      setIsFullUMiamiDesc(false)
      setIsFullEBIDesc(false)
      setIsFullQMULDesc(false)
    }
    const showFullSloanKetteringDesc = (event) => {
      setIsFullSloanKetteringDesc(!isFullSloanKetteringDesc)

      setIsFullUWDesc(false)
      setIsFullDesc(false)
      setIsFullNWUCDesc(false)
      setIsFullJacksonLabDesc(false)
      setIsFullUMiamiDesc(false)
      setIsFullEBIDesc(false)
      setIsFullQMULDesc(false)

    }
    const showFullUMiamiDesc = (event) => {
      setIsFullUMiamiDesc(!isFullUMiamiDesc)

      setIsFullUWDesc(false)
      setIsFullDesc(false)
      setIsFullNWUCDesc(false)
      setIsFullJacksonLabDesc(false)
      setIsFullSloanKetteringDesc(false)
      setIsFullEBIDesc(false)
      setIsFullQMULDesc(false)
    }
    const showFullEBIDesc = (event) => {
      setIsFullEBIDesc(!isFullEBIDesc)

      setIsFullUWDesc(false)
      setIsFullDesc(false)
      setIsFullNWUCDesc(false)
      setIsFullJacksonLabDesc(false)
      setIsFullSloanKetteringDesc(false)
      setIsFullUMiamiDesc(false)
      setIsFullQMULDesc(false)
    }
    const showFullQMULDesc = (event) => {
      setIsFullQMULDesc(!isFullQMULDesc)

      setIsFullUWDesc(false)
      setIsFullDesc(false)
      setIsFullNWUCDesc(false)
      setIsFullJacksonLabDesc(false)
      setIsFullSloanKetteringDesc(false)
      setIsFullUMiamiDesc(false)
      setIsFullEBIDesc(false)
    }
  
    return (
      <div className="morphic__map section__padding" id="map">
        <div className="morphic__map-container">
            <map name="moreinfo">
                <area shape="rect" coords="0,80,200,160" href="#whatmorphic" alt="UW Yeung Lab" onClick={showFullUWDesc} onMouseEnter={showUWOverview} onMouseLeave={hideUWOverview} />
                <area shape="rect" coords={ height !== 0 && width !== 0 ? "0," + 0.5 * height + "," + 0.18 * width + "," + 0.74 * height : "0,230,220,340"} href="#whatmorphic" onClick={showFullUCSFDesc} onMouseEnter={showGilbertLabOverview} onMouseLeave={hideGilbertLabOverview} alt="Gilbert Lab" />
                <area shape="rect" coords="265,165,395,270" href="#whatmorphic" alt="NORTHWESTERN UNIVERSITY AT CHICAGO" onClick={showFullNWUCDesc} onMouseEnter={showNWUCOverview} onMouseLeave={hideNWUCOverview} />
                <area shape="rect" coords="470,170,630,220" href="#whatmorphic" alt="JACKSON LABORATORY" onClick={showFullJacksonLabDesc}  onMouseEnter={showJacksonLabOverview} onMouseLeave={hideJacksonLabOverview} />
                <area shape="rect" coords="435,250,640,310" href="#whatmorphic" alt="SLOAN-KETTERING INST CAN RESEARCH" onClick={showFullSloanKetteringDesc} onMouseEnter={showSloanKetteringOverview} onMouseLeave={hideSloanKetteringOverview} />
                <area shape="rect" coords="435,395,600,455" href="#whatmorphic" alt="University of Miami Miller School of Medicine Schürer Lab" onClick={showFullUMiamiDesc} onMouseEnter={showUMiamiOverview} onMouseLeave={hideUMiamiOverview}  />
                <area shape="rect" coords="1065,0,1245,65" href="#whatmorphic" alt="Samples Phenotypes and Ontologies Team, EBI" onClick={showFullEBIDesc} onMouseEnter={showEBIOverview} onMouseLeave={hideEBIOverview} />
                <area shape="rect" coords="1065,100,1245,165" href="#whatmorphic" alt="Queen Mary University of London" onClick={showFullQMULDesc} onMouseEnter={showQMULOverview} onMouseLeave={hideQMULOverview} />
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
          {isNWUC && (!isFullNWUCDesc) && (
            <div className="lab-overview">
              <h4>NIH Grant Number</h4>
              <p>UM1HG012649</p>
              <h4>NIH RePORTER</h4>
              <a href="https://reporter.nih.gov/search/fEYSskefXkKWXanvDf3JSA/project-details/10517781#details" target="_blank" rel="noreferrer">https://reporter.nih.gov/search/fEYSskefXkKWXanvDf3JSA/project-details/10517781#details</a>
              <h4>Contact PI/Project Leader</h4>
              <p>Adli, Mazhar</p>
            </div>
          )}
          {isJacksonLab && (!isFullJacksonLabDesc) && (
            <div className="lab-overview">
              <h4>NIH Grant Number</h4>
              <p>UM1HG012651</p>
              <h4>NIH RePORTER</h4>
              <a href="https://reporter.nih.gov/search/fEYSskefXkKWXanvDf3JSA/project-details/10517881" target="_blank" rel="noreferrer">https://reporter.nih.gov/search/fEYSskefXkKWXanvDf3JSA/project-details/10517881</a>
              <h4>Contact PI/Project Leader</h4>
              <p>Robson, Paul</p>
            </div>
          )}
          {isSloanKettering && (!isFullSloanKetteringDesc) && (
            <div className="lab-overview">
              <h4>NIH Grant Number</h4>
              <p>UM1HG012654</p>
              <h4>NIH RePORTER</h4>
              <a href="https://reporter.nih.gov/search/fEYSskefXkKWXanvDf3JSA/project-details/10518021" target="_blank" rel="noreferrer">https://reporter.nih.gov/search/fEYSskefXkKWXanvDf3JSA/project-details/10518021</a>
              <h4>Contact PI/Project Leader</h4>
              <p>HUANGFU, DANWEI</p>
            </div>
          )}
          {isUMiami && (!isFullUMiamiDesc) && (
            <div className="lab-overview">
              <h4>NIH Grant Number</h4>
              <p>U24HG012674</p>
              <h4>NIH RePORTER</h4>
              <a href="https://reporter.nih.gov/search/0Vl49Afb50KdwhUX5tzEEw/project-details/10519442" target="_blank" rel="noreferrer">https://reporter.nih.gov/search/0Vl49Afb50KdwhUX5tzEEw/project-details/10519442</a>
              <h4>Contact PI/Project Leader</h4>
              <p>Stephan Schürer</p>
            </div>
          )}
          {isEBI && (!isFullEBIDesc) && (
            <div className="lab-overview">
              <h4>NIH Grant Number</h4>
              <p>1U24HG012674-01</p>
              <h4>NIH RePORTER</h4>
              <a href="https://reporter.nih.gov/project-details/10519442" target="_blank" rel="noreferrer">https://reporter.nih.gov/project-details/10519442</a>
              <h4>Contact PI/Project Leader</h4>
              <p>Helen Parkinson</p>
            </div>
          )}
          {isQMUL && (!isFullQMULDesc) && (
            <div className="lab-overview">
              <h4>NIH Grant Number</h4>
              <p>U24HG012674</p>
              <h4>NIH RePORTER</h4>
              <a href="https://reporter.nih.gov/search/0Vl49Afb50KdwhUX5tzEEw/project-details/10519442" target="_blank" rel="noreferrer">https://reporter.nih.gov/search/0Vl49Afb50KdwhUX5tzEEw/project-details/10519442</a>
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
          {isFullNWUCDesc && (
            <div className="lab-overview">
            <h4>NIH Grant Number</h4>
            <p>UM1HG012649</p>
            <h4>NIH RePORTER</h4>
            <a href="https://reporter.nih.gov/search/fEYSskefXkKWXanvDf3JSA/project-details/10517781#details" target="_blank" rel="noreferrer">https://reporter.nih.gov/search/fEYSskefXkKWXanvDf3JSA/project-details/10517781#details</a>
            <h4>Contact PI/Project Leader</h4>
            <p>Adli, Mazhar</p>
            <h4>Description</h4>
            <p></p>
          </div>
          )}
          {isFullJacksonLabDesc && (
            <div className="lab-overview">
              <h4>NIH Grant Number</h4>
              <p>UM1HG012651</p>
              <h4>NIH RePORTER</h4>
              <a href="https://reporter.nih.gov/search/fEYSskefXkKWXanvDf3JSA/project-details/10517881" target="_blank" rel="noreferrer">https://reporter.nih.gov/search/fEYSskefXkKWXanvDf3JSA/project-details/10517881</a>
              <h4>Contact PI/Project Leader</h4>
              <p>Robson, Paul</p>
              <h4>Description</h4>
              <p></p>
            </div>
          )}
          {isFullSloanKetteringDesc && (
            <div className="lab-overview">
              <h4>NIH Grant Number</h4>
              <p>UM1HG012654</p>
              <h4>NIH RePORTER</h4>
              <a href="https://reporter.nih.gov/search/fEYSskefXkKWXanvDf3JSA/project-details/10518021" target="_blank" rel="noreferrer">https://reporter.nih.gov/search/fEYSskefXkKWXanvDf3JSA/project-details/10518021</a>
              <h4>Contact PI/Project Leader</h4>
              <p>HUANGFU, DANWEI</p>
              <h4>Description</h4>
              <p></p>
            </div>
          )}
          {isFullUMiamiDesc && (
            <div className="lab-overview">
              <h4>NIH Grant Number</h4>
              <p>U24HG012674</p>
              <h4>NIH RePORTER</h4>
              <a href="https://reporter.nih.gov/search/0Vl49Afb50KdwhUX5tzEEw/project-details/10519442" target="_blank" rel="noreferrer">https://reporter.nih.gov/search/0Vl49Afb50KdwhUX5tzEEw/project-details/10519442</a>
              <h4>Contact PI/Project Leader</h4>
              <p>Stephan Schürer</p>
              <h4>Description</h4>
              <p>Despite huge progress in understanding the biological function of every human gene, significant hurdles remain, among them to establish a systematic catalogue of cellular phenotypes associated with each gene. The pilot phase of the Molecular and Cellular Phenotypes of Null Alleles in Cells (MorPhiC) program will study the feasibility, scalability, required scope, and utility of such a catalogue. Our Data Resource and Administrative Coordinating Center (DRACC) will develop and deploy infrastructure and tools to provide the highest quality MorPhiC data resource, analyze, annotate, and disseminate MorPhiC data, integrating external data & information, and serve as an administrative and coordination center.</p>
            </div>
          )}
          {isFullEBIDesc && (
            <div className="lab-overview">
              <h4>NIH Grant Number</h4>
              <p>1U24HG012674-01</p>
              <h4>NIH RePORTER</h4>
              <a href="https://reporter.nih.gov/project-details/10519442" target="_blank" rel="noreferrer">https://reporter.nih.gov/project-details/10519442</a>
              <h4>Contact PI/Project Leader</h4>
              <p>Helen Parkinson</p>
              <h4>Description</h4>
              <p>The pilot phase of the Molecular and Cellular Phenotypes of Null Alleles in Cells (MorPhiC) program will study the feasibility, scalability, required scope, and utility of such a catalogue to characterize phenotypes associated with genes in tissue- and disease-relevant human cellular model systems. The proposed MorPhiC Data Resource and Administrative Coordinating Center (DRACC) will enable and support the MorPhiC research consortium by providing the highest quality FAIR (findable, accessible, interoperable, reusable) MorPhiC data resource, analyzing, annotating, and disseminating Morphic data, integrating external data/information, and serving as an administrative and coordination center. These functions will be fulfilled in close cooperation and collaborating with the Data Production Research and Development Centers (DPCs) and the Data Analysis and Validation Centers (DAVs) to support rigorous data standards, rich metadata annotations, the highest data and software quality, and reproducibility and portability of data processing and -analysis tools. Members of our team have previously served in leadership positions of several national and international research consortia, including the Human Cell Atlas (HCA), Knockout Mouse Program (KOMP), Genome-Wide Association Studies (GWAS) Catalog, Library of Integrated Network-based Cellular Signatures (LINCS), Illuminating the Druggable Genome (IDG), Big Data to Knowledge (BD2K), and Monarch Initiative. Our team has the technological, scientific, and administrative expertise to successfully operate the Center and complete the Center and Consortium critical functions and deliverables via Specific Aims to 1) Establish and operate the Center, 2) Deploy a state-of-the-art infrastructure to manage data across the entire life cycle, 3) Collate, converge, and deploy cloud-enabled analysis techniques, models and data processing protocols, 4) Create and deploy the MorPhiC Web Portal to provide global access to MorPhiC data, 5) Map and integrate external data sources, and 6) Administer and coordinate the Consortium. Successful completion of these Aims will enable the assessment of feasibility, scalability, required scope, and utility of a MorPhiC Catalogue with the prospect to massively scale the functional characterization of every human gene via phenotype mapping in relevant human model systems.</p>
            </div>
          )}
          {isFullQMULDesc && (
            <div className="lab-overview">
              <h4>NIH Grant Number</h4>
              <p>U24HG012674</p>
              <h4>NIH RePORTER</h4>
              <a href="https://reporter.nih.gov/search/0Vl49Afb50KdwhUX5tzEEw/project-details/10519442" target="_blank" rel="noreferrer">https://reporter.nih.gov/search/0Vl49Afb50KdwhUX5tzEEw/project-details/10519442</a>
              <h4>Contact PI/Project Leader</h4>
              <p>Pilar Cacheiro</p>
              <h4>Description</h4>
              <p>Professor Smedley’s research focusses on utilising clinical and model organism phenotype data to better understand human disease.</p>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default Map;