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
        <section>
            <h3 className='morphic_about-paragraph'>Data Production Centers (DPCs)</h3>
            <ul>
                <li><p className='morphic_about-paragraph'><span>Mazhar Adli, Ph.D.</span> Northwestern University Feinberg School of Medicine, Chicago. Molecular and cellular characterization of essential human genes.</p></li>
                <li><p className='morphic_about-paragraph'><span>Luke Gilbert, Ph.D.</span> University of California, San Francisco. Spatial multiomic mapping of gene function with CRISPRoff.</p></li>
                <li><p className='morphic_about-paragraph'><span>Danwei Huangfu, Ph.D.</span> Sloan-Kettering Institute for Cancer Research, New York City. Center for scalable knockout and multimodal phenotyping in genetically diverse human genomes.</p></li>
                <li><p className='morphic_about-paragraph'><span>Paul Robson, Ph.D.</span> Jackson Laboratory, Farmington, Connecticut. JAX MorPhiC data production center.</p></li>
            </ul>
        </section>
        <section>
            <h3 className='morphic_about-paragraph'>Data Resource and Administrative Coordinating Center (DRACC)</h3>
            <ul>
                <li><p className='morphic_about-paragraph'><span>Stephan Schürer, Ph.D.</span> University of Miami. MorPhiC data resource and administrative coordinating center.</p></li>
            </ul>
        </section>
        <section>
            <h3 className='morphic_about-paragraph'>Data Analysis and Validation Centers (DAVs)</h3>
            <ul>
                <li><p className='morphic_about-paragraph'>To be announced.</p></li>
            </ul>
        </section>
        <p className='morphic_about-paragraph'>The MorPhiC Consortium is governed by a Steering Committee whose members include NHGRI Program Officials, and Principal Investigators. Scientific efforts are undertaken by working groups, including the Data Working Group, Experiment Working Group and the Outreach Working Group.</p>
    </article>
  </section>
);

export default About;
