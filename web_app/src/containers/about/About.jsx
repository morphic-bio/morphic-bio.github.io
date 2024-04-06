import React from 'react';
import './about.css';

const About = () => (
  <section className="section__margin morphic__about-container" id="about-us">
    <article>
        <div className='morphic__about-heading'>
            <h1 className="gradient__text">About</h1>
        </div>
        <h2>MorPhiC</h2>
        <p className='morphic_about-paragraph mb-1'>The Molecular Phenotypes of Null Alleles in Cells (MorPhiC) program was established in 2022.</p>
        <h2>Phase 1</h2>
        <p className='morphic_about-paragraph'>Components for Phase 1 of the MorPhiC Consortium include the following:</p>
        <section id="DPC">
            <h3 className='morphic_about-paragraph'>Data Production Centers (DPCs)</h3>
            <ul>
                <li><p className='morphic_about-paragraph'><span>Mazhar Adli, Ph.D.</span> Northwestern University Feinberg School of Medicine, Chicago. Molecular and cellular characterization of essential human genes.</p></li>
                <li><p className='morphic_about-paragraph'><span>Luke Gilbert, Ph.D.</span> University of California, San Francisco. Spatial multiomic mapping of gene function with CRISPRoff.</p></li>
                <li><p className='morphic_about-paragraph'><span>Danwei Huangfu, Ph.D.</span> Sloan-Kettering Institute for Cancer Research, New York City. Center for scalable knockout and multimodal phenotyping in genetically diverse human genomes.</p></li>
                <li><p className='morphic_about-paragraph'><span>Paul Robson, Ph.D.</span> Jackson Laboratory, Farmington, Connecticut. JAX MorPhiC data production center.</p></li>
            </ul>
        </section>
        <section id="DRACC">
            <h3 className='morphic_about-paragraph'>Data Resource and Administrative Coordinating Center (DRACC)</h3>
            <ul>
                <li><p className='morphic_about-paragraph'><span>Stephan Schürer, Ph.D.</span> University of Miami. MorPhiC data resource and administrative coordinating center.</p></li>
            </ul>
        </section>
        <section id="DAV">
            <h3 className='morphic_about-paragraph'>Data Analysis and Validation Centers (DAVs)</h3>
            <ul>
                <li><p className='morphic_about-paragraph'><span>Wei Sun, Ph.D.</span> Fred Hutchinson Cancer Center. Statistical Methods for Inferring Gene-Phenotype Associations Using Omic Data from Gene Knockout and Human Phenotype Studies.</p></li>
                <li><p className='morphic_about-paragraph'><span>Jesse Engreitz, Ph.D.</span> Stanford University. MorPhiC: Constructing a Catalog of Cellular Programs to Identify and Annotate Human Disease Genes.</p></li>
                <li><p className='morphic_about-paragraph'><span>Sheng Li, Ph.D.</span> Jackson Laboratory. Multi-omic phenotyping of human transcriptional regulators.</p></li>
            </ul>
        </section>
        <section id="ESC">
            <h3 className='morphic_about-paragraph'>External Scientific Committee (ESC)</h3>
            <ul>
                <li><p className='morphic_about-paragraph'><span>Brenda Andrews, Ph.D</span> University of Toronto.</p></li>
                <li><p className='morphic_about-paragraph'><span>Prashant Mali, Ph.D.</span> University of California, San Diego.</p></li>
                <li><p className='morphic_about-paragraph'><span>Nancy Cox, Ph.D.</span> Vanderbilt University.</p></li>
                <li><p className='morphic_about-paragraph'><span>Ali Mortazavi, Ph.D.</span> University of California, Irvine.</p></li>
                <li><p className='morphic_about-paragraph'><span>Jessica Li, Ph.D.</span> University of California, Los Angeles.</p></li>
            </ul>
        </section>
        <p className='morphic_about-paragraph size2'>The MorPhiC Consortium is governed by a Steering Committee whose members include NHGRI Program Officials, and Principal Investigators. Scientific efforts are undertaken by working groups, including the Data Working Group, Experiment Working Group and the Outreach Working Group.</p>
    </article>
  </section>
);

export default About;
