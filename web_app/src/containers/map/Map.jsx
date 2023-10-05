import React, { useEffect, useRef, useState } from 'react';
import morphic_map from '../../assets/morphic_map-lg.jpg';
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
    const [ isStanford, setIsStanford ] = useState(false)
    const [ isNWUC, setIsNWUC ] = useState(false)
    const [ isJacksonLab, setIsJacksonLab ] = useState(false)
    const [ isSloanKettering, setIsSloanKettering ] = useState(false)
    const [ isUMiami, setIsUMiami ] = useState(false)
    const [ isEBI, setIsEBI ] = useState(false)
    const [ isQMUL, setIsQMUL ] = useState(false)

    const [ isFullDesc, setIsFullDesc ] = useState(false)
    const [ isFullUWDesc, setIsFullUWDesc ] = useState(false)
    const [ isFullStanfordDesc, setIsFullStanfordDesc ] = useState(false)
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
    const showStanfordOverview = (event) => {
      setIsStanford(true)
    }
    const hideStanfordOverview = (event) => {
      setIsStanford(false)
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
      setIsFullStanfordDesc(false)
      setIsFullNWUCDesc(false)
      setIsFullJacksonLabDesc(false)
      setIsFullSloanKetteringDesc(false)
      setIsFullUMiamiDesc(false)
      setIsFullEBIDesc(false)
      setIsFullQMULDesc(false)
    }
    const showFullStanfordDesc = (event) => {
      setIsFullStanfordDesc(!isFullStanfordDesc)

      setIsFullUWDesc(false)
      setIsFullDesc(false)
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
      setIsFullStanfordDesc(false)
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
      setIsFullStanfordDesc(false)
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
      setIsFullStanfordDesc(false)
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
      setIsFullStanfordDesc(false)
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
      setIsFullStanfordDesc(false)
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
      setIsFullStanfordDesc(false)
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
      setIsFullStanfordDesc(false)
      setIsFullNWUCDesc(false)
      setIsFullJacksonLabDesc(false)
      setIsFullSloanKetteringDesc(false)
      setIsFullUMiamiDesc(false)
      setIsFullEBIDesc(false)
    }
  
    return (
      <section className="morphic__map section__padding" id="map">
        <div className="morphic__map-container">
            <map name="moreinfo">
                <area shape="rect" coords="0,80,200,160" href="#whatmorphic" alt="UW Yeung Lab" onClick={showFullUWDesc} onMouseEnter={showUWOverview} onMouseLeave={hideUWOverview} />
                <area shape="rect" coords={ height !== 0 && width !== 0 ? "0," + 0.5 * height + "," + 0.065 * width + "," + 0.6 * height : "0,230,82,276"} href="#whatmorphic" onClick={showFullUCSFDesc} onMouseEnter={showGilbertLabOverview} onMouseLeave={hideGilbertLabOverview} alt="Gilbert Lab" />
                <area shape="rect" coords="0,282,220,341" href="#whatmorphic" onClick={showFullStanfordDesc} onMouseEnter={showStanfordOverview} onMouseLeave={hideStanfordOverview} alt="Stanford Lab" />
                <area shape="rect" coords="265,165,395,270" href="#whatmorphic" alt="NORTHWESTERN UNIVERSITY AT CHICAGO" onClick={showFullNWUCDesc} onMouseEnter={showNWUCOverview} onMouseLeave={hideNWUCOverview} />
                <area shape="rect" coords="470,170,630,220" href="#whatmorphic" alt="JACKSON LABORATORY" onClick={showFullJacksonLabDesc}  onMouseEnter={showJacksonLabOverview} onMouseLeave={hideJacksonLabOverview} />
                <area shape="rect" coords="435,250,640,310" href="#whatmorphic" alt="SLOAN-KETTERING INST CAN RESEARCH" onClick={showFullSloanKetteringDesc} onMouseEnter={showSloanKetteringOverview} onMouseLeave={hideSloanKetteringOverview} />
                <area shape="rect" coords="435,395,600,455" href="#whatmorphic" alt="University of Miami Miller School of Medicine Schürer Lab" onClick={showFullUMiamiDesc} onMouseEnter={showUMiamiOverview} onMouseLeave={hideUMiamiOverview}  />
                <area shape="rect" coords="1065,0,1245,65" href="#whatmorphic" alt="Samples Phenotypes and Ontologies Team, EBI" onClick={showFullEBIDesc} onMouseEnter={showEBIOverview} onMouseLeave={hideEBIOverview} />
                <area shape="rect" coords="1065,100,1245,165" href="#whatmorphic" alt="Queen Mary University of London" onClick={showFullQMULDesc} onMouseEnter={showQMULOverview} onMouseLeave={hideQMULOverview} />
            </map>
          <img src={morphic_map} alt="MorPhiC Consortium Map with locations of all labs." useMap="#moreinfo" ref={elementRef}/>
        </div>
        <div className="morphic__map-description">
          

          {(isGilbert && (!isFullDesc)) && (
            <div className="lab-overview">
              <h4>NIH Grant Number</h4>
              <p>UM1HG012660</p>
              <h4>NIH RePORTER</h4>
              <a href="https://reporter.nih.gov/search/fEYSskefXkKWXanvDf3JSA/project-details/10518318" target="_blank" rel="noreferrer">https://reporter.nih.gov/search/fEYSskefXkKWXanvDf3JSA/project-details/1051831</a>
              <h4>Contact PI/Project Leader</h4>
              <p>Luke Gilbert</p>
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
          {(isStanford && (!isFullStanfordDesc)) && (
            <div className="lab-overview">
              <h4>NIH Grant Number</h4>
              <p>1U01HG013176-01</p>
              <h4>NIH RePORTER</h4>
              <a href="https://reporter.nih.gov/search/Dp5l7GFxJkalwB2Oebe9gg/project-details/10733164" target="_blank" rel="noopener noreferrer">https://reporter.nih.gov/search/Dp5l7GFxJkalwB2Oebe9gg/project-details/10733164</a>
              <h4>Contact PI/Project Leader</h4>
              <p>Jesse Engreitz</p>
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
              <p>Huangfu, Danwei</p>
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
              <p>Tony Burdett, Helen Parkinson</p>
            </div>
          )}
          {isQMUL && (!isFullQMULDesc) && (
            <div className="lab-overview">
              <h4>NIH Grant Number</h4>
              <p>U24HG012674</p>
              <h4>NIH RePORTER</h4>
              <a href="https://reporter.nih.gov/search/0Vl49Afb50KdwhUX5tzEEw/project-details/10519442" target="_blank" rel="noreferrer">https://reporter.nih.gov/search/0Vl49Afb50KdwhUX5tzEEw/project-details/10519442</a>
              <h4>Contact PI/Project Leader</h4>
              <p>Damian Smedley</p>
            </div>
          )}


          {isFullDesc && (
            <div className="lab-overview">
              <h4>NIH Grant Number</h4>
              <p>UM1HG012660</p>
              <h4>NIH RePORTER</h4>
              <a href="https://reporter.nih.gov/search/fEYSskefXkKWXanvDf3JSA/project-details/10518318" target="_blank" rel="noreferrer">https://reporter.nih.gov/search/fEYSskefXkKWXanvDf3JSA/project-details/1051831</a>
              <h4>Lab Website</h4>
              <a href="https://www.gilbertlabucsf.com/" target="_blank" rel="noreferrer">https://www.gilbertlabucsf.com/</a>
              <h4>Contact PI/Project Leader</h4>
              <p>Luke Gilbert</p>
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
          {isFullStanfordDesc && (
            <div className="lab-overview">
              <h4>NIH Grant Number</h4>
              <p>1U01HG013176-01</p>
              <h4>NIH RePORTER</h4>
              <a href="https://reporter.nih.gov/search/Dp5l7GFxJkalwB2Oebe9gg/project-details/10733164" target="_blank" rel="noopener noreferrer">https://reporter.nih.gov/search/Dp5l7GFxJkalwB2Oebe9gg/project-details/10733164</a>
              <h4>Lab Websites</h4>
              <ul className="lab-links">
                <li><a href="https://www.engreitzlab.org/" target="_blank" rel="noopener noreferrer">https://www.engreitzlab.org/</a></li>
                <li><a href="https://kundajelab.stanford.edu/" target="_blank" rel="noopener noreferrer">https://kundajelab.stanford.edu/</a></li>
                <li><a href="https://www.devo-evo.com/" target="_blank" rel="noopener noreferrer">https://www.devo-evo.com/</a></li>
              </ul>
              <h4>Contact PI/Project Leader</h4>
              <p>Jesse Engreitz</p>
              <h4>Description</h4>
              <p>This proposed MorPhiC Data Analysis and Validation Center will utilize the innovative methods our team has developed (V2G2P, BPNet, DeepLift, monocle2/3, scribe, dynamo, spateo) to integrate multi-layer CRISPR, single-cell, imaging, and human genetics data. Together with the MorPhiC Consortium, our study will enable building a Catalog of Cellular Programs across cell types, ensure the robustness and interoperability of MorPhiC data, demonstrate its utility in identifying pathways for human diseases, and plan for an expansion of the MorPhiC project to study all human genes.</p>
            </div>
          )}
          {isFullNWUCDesc && (
            <div className="lab-overview">
              <h4>NIH Grant Number</h4>
              <p>UM1HG012649</p>
              <h4>NIH RePORTER</h4>
              <a href="https://reporter.nih.gov/search/fEYSskefXkKWXanvDf3JSA/project-details/10517781#details" target="_blank" rel="noreferrer">https://reporter.nih.gov/search/fEYSskefXkKWXanvDf3JSA/project-details/10517781#details</a>
              <h4>Lab Websites</h4>
              <ul className="lab-links">
                <li><a href="https://adlilab.org/" target="_blank" rel="noopener noreferrer">www.adlilab.org</a></li>
                <li><a href="http://yuelab.org/" target="_blank" rel="noopener noreferrer">yuelab.org</a></li>
              </ul>
              <h4>Contact PI/Project Leader</h4>
              <p>Adli, Mazhar</p>
              <h4>Description</h4>
              <p>Using modern genomic technologies, machine learning, and CRISPR genome editing to identify biomarkers and pathological variants in human diseases</p>
            </div>
          )}
          {isFullJacksonLabDesc && (
            <div className="lab-overview">
              <h4>NIH Grant Number</h4>
              <p>UM1HG012651</p>
              <h4>NIH RePORTER</h4>
              <a href="https://reporter.nih.gov/search/fEYSskefXkKWXanvDf3JSA/project-details/10517881" target="_blank" rel="noreferrer">https://reporter.nih.gov/search/fEYSskefXkKWXanvDf3JSA/project-details/10517881</a>
              <h4>Lab Websites</h4>
              <ul className="lab-links">
                <li><a href="https://www.jax.org/" target="_blank" rel="noreferrer">www.jax.org</a></li>
                <li><a href="https://www.jax.org/research-and-faculty/research-labs/the-robson-lab" target="_blank" rel="noreferrer">https://www.jax.org/research-and-faculty/research-labs/the-robson-lab</a></li>
                <li><a href="https://www.jax.org/research-and-faculty/faculty/william-skarnes" target="_blank" rel="noreferrer">https://www.jax.org/research-and-faculty/faculty/william-skarnes</a></li>
              </ul>
              <h4>Contact PI/Project Leader</h4>
              <p>Paul Robson</p>
              <h4>Description</h4>
              <p>Knowledge of the function of every human gene is necessary for determining the roles and relationships of genes and regulatory elements in various normal and disease-associated biological pathways and networks. In the JAX MorPhiC Data Production Center, we will leverage the state-of-the-art cellular engineering, single-cell, and metabolomics capabilities of The Jackson Laboratory to comprehensively catalog the phenotypes of 250 null mutations in human induced pluripotent stem cells differentiated into extra-embryonic and neuroectodermal lineages. By focusing on these early embryonic lineages, we will gain important insight into multiple biological processes, including neurodevelopmental disorders and those impacting later life.</p>
            </div>
          )}
          {isFullSloanKetteringDesc && (
            <div className="lab-overview">
              <h4>NIH Grant Number</h4>
              <p>UM1HG012654</p>
              <h4>NIH RePORTER</h4>
              <a href="https://reporter.nih.gov/search/fEYSskefXkKWXanvDf3JSA/project-details/10518021" target="_blank" rel="noreferrer">https://reporter.nih.gov/search/fEYSskefXkKWXanvDf3JSA/project-details/10518021</a>
              <h4>Lab Websites</h4>
              <ul className="lab-links">
                <li><a href="https://morphic.mskcc.org/" target="_blank" rel="noopener noreferrer">https://morphic.mskcc.org/</a></li>
                <li><a href="https://www.mskcc.org/research/ski/labs/danwei-huangfu" target="_blank" rel="noreferrer">https://www.mskcc.org/research/ski/labs/danwei-huangfu</a></li>
                <li><a href="https://www.mskcc.org/research/ski/labs/lorenz-studer" target="_blank" rel="noreferrer">https://www.mskcc.org/research/ski/labs/lorenz-studer</a></li>
                <li><a href="https://www.mskcc.org/research/ski/labs/thomas-vierbuchen" target="_blank" rel="noreferrer">https://www.mskcc.org/research/ski/labs/thomas-vierbuchen</a></li>
                <li><a href="https://www.mskcc.org/research/ski/profile/ting-zhou" target="_blank" rel="noreferrer">https://www.mskcc.org/research/ski/profile/ting-zhou</a></li>
              </ul>
              <h4>Contact PI/Project Leader</h4>
              <p>Danwei Huangfu</p>
              <h4>Description</h4>
              <p>The impact of gene loss on complex phenotypes is strongly influenced by the cellular context and the genetic background. Our ultimate goal is to develop scalable knockout phenotyping strategies in many diverse genetic backgrounds using multicellular systems that are informative of complex human biology. Leverage our expertise in human pluripotent stem cell (hPSC) guided differentiation, organoid engineering, gene editing and large-scale CRISPR screening, our MSK MorPhiC center will prioritize genes affected in neurodevelopmental and metabolic disorders. We plan to investigate knockout phenotypes by prioritizing three multicellular systems, a micropattern-based gastruloid model for early tri-germ-layer differentiation, a defined neuro-glial tri-culture system, and a 3D pancreatic islet-like organoid culture. We expect to generate extensive knockout phenotyping datasets in these multicellular contexts that are informative of diverse human biology and create a rich resource of knockout hPSC lines.</p>
            </div>
          )}
          {isFullUMiamiDesc && (
            <div className="lab-overview">
              <h4>NIH Grant Number</h4>
              <p>U24HG012674</p>
              <h4>NIH RePORTER</h4>
              <a href="https://reporter.nih.gov/search/0Vl49Afb50KdwhUX5tzEEw/project-details/10519442" target="_blank" rel="noreferrer">https://reporter.nih.gov/search/0Vl49Afb50KdwhUX5tzEEw/project-details/10519442</a>
              <h4>Lab Website</h4>
              <a href="https://umiamihealth.org/sylvester-comprehensive-cancer-center/research/labs/schürer-lab" target="_blank" rel="noreferrer">https://umiamihealth.org/sylvester-comprehensive-cancer-center/research/labs/schürer-lab</a>
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
              <h4>Lab Website</h4>
              <a href="https://www.ebi.ac.uk/about/teams/samples-phenotypes-ontologies/" target="_blank" rel="noreferrer">https://www.ebi.ac.uk/about/teams/samples-phenotypes-ontologies/</a>
              <h4>Contact PI/Project Leader</h4>
              <p>Tony Burdett, Helen Parkinson</p>
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
              <h4>Lab Website</h4>
              <a href="https://www.qmul.ac.uk/whri/people/academic-staff/items/smedleydamian.html" target="_blank" rel="noreferrer">https://www.qmul.ac.uk/whri/people/academic-staff/items/smedleydamian.html</a>
              <h4>Contact PI/Project Leader</h4>
              <p>Damian Smedley</p>
              <h4>Description</h4>
              <p>Professor Smedley’s research focusses on utilising clinical and model organism phenotype data to better understand human disease.</p>
            </div>
          )}
        </div>
      </section>
    );
  };
  
  export default Map;