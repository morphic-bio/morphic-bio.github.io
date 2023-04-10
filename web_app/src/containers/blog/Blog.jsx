import React from 'react';
import Article from '../../components/article/Article';
import { blog00, blog06, blog07 } from './imports';
import './blog.css';

const Blog = () => (
  <section className="morphic__blog section__padding" id="blog">
    <div className="morphic__blog-heading">
      <h1 className="gradient__text">News</h1>
    </div>
    <div className="morphic__blog-container">
      <div className="morphic__blog-container_groupA">
        <Article imgUrl={"https://physician-news.umiamihealth.org/wp-content/uploads/sites/4/2023/03/IMG_6995.jpg"} date="Mar 3, 2023" text="The Molecular Phenotypes of Null Alleles in Cells program seeks to identify the purpose behind every gene." link="https://physician-news.umiamihealth.org/dr-stephan-schurer-enlisted-for-important-genome-research-project/" />
      </div>
      <div className="morphic__blog-container_groupB">
        <Article imgUrl={"https://www.feinberg.northwestern.edu/research/images/podcast/adli-360.png"} date="Dec 5, 2022" text="Identifying How Genes Function to Better Understand Cancer with Mazhar Adli, PhD" link="https://www.feinberg.northwestern.edu/research/podcast/2022/gene-function-to-understand-cancer-adli.html" />
        <Article imgUrl={"https://cancer.ucsf.edu/sites/cancer.ucsf.edu/files/styles/sf_landscape_16x9/public/images/article/luke_gilbert-186_1_0.jpeg?h=0632d6fb&itok=k8U6Jhe6"} date="Sep 27, 2022" text="NIH initiative to systematically investigate and establish function of every human gene" link="https://cancer.ucsf.edu/news/2022/09/27/nih-initiative-to-systematically-investigate-and-establish-function-of-every-human"/>
        <Article imgUrl={blog00} date="Sep 27, 2022" text="NIH initiative to systematically investigate and establish function of every human gene" link="https://www.nih.gov/news-events/news-releases/nih-initiative-systematically-investigate-establish-function-every-human-gene" />
      </div>
    </div>
  </section>
);

export default Blog;
