import React, { useState, useEffect } from 'react';
import Article from '../../components/article/Article';
import { blog00, blog00a, blog_1m, blog_2s, blog_3l, uwtnews } from './imports';
import './blog.css';

const Blog = () => {
  // {title:"", date:"", url:"", img:"", webp:""}
  const articles = [
    {title:"The Molecular Phenotypes of Null Alleles in Cells program seeks to identify the purpose behind every gene.", date:"Mar 3, 2023", url:"https://physician-news.umiamihealth.org/dr-stephan-schurer-enlisted-for-important-genome-research-project/", img:"https://physician-news.umiamihealth.org/wp-content/uploads/sites/4/2023/03/IMG_6995.jpg", webp:{blog_1m}},
    {title:"Bioinformatics Team Powers International Effort to Map Gene Function", date:"Dec 5, 2022", url:"https://www.tacoma.uw.edu/news/bioinformatics-team-powers-international-effort-map-gene-function-0", img:"https://www.tacoma.uw.edu/sites/default/files/2023-05/uwtnews-2023-05-morphic-yueng-feature.jpg", webp:{uwtnews}},
    {title:"Identifying How Genes Function to Better Understand Cancer with Mazhar Adli, PhD", date:"Dec 5, 2022", url:"https://www.feinberg.northwestern.edu/research/podcast/2022/gene-function-to-understand-cancer-adli.html", img:"https://www.feinberg.northwestern.edu/research/images/podcast/adli-360.png", webp:{blog_2s}},
    {title:"NIH initiative to systematically investigate and establish function of every human gene", date:"Sep 27, 2022", url:"https://cancer.ucsf.edu/news/2022/09/27/nih-initiative-to-systematically-investigate-and-establish-function-of-every-human", img:"https://cancer.ucsf.edu/sites/cancer.ucsf.edu/files/styles/sf_landscape_16x9/public/images/article/luke_gilbert-186_1_0.jpeg?h=0632d6fb&itok=k8U6Jhe6", webp:{blog_3l}},
    {title:"NIH initiative to systematically investigate and establish function of every human gene", date:"Sep 27, 2022", url:"https://www.nih.gov/news-events/news-releases/nih-initiative-systematically-investigate-establish-function-every-human-gene", img:{blog00}, webp:{blog00a}}
  ]

  const [ currElement, setCurrElement ] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrElement((currElement) => {
        if (currElement == articles.length - 1) { return 0 } else {return currElement + 1}
      })
    }, 15000);
    return () => clearInterval(interval);
  }, [])

  return (
    <section className="morphic__blog section__padding" id="blog">
      <div className="morphic__blog-heading">
        <h1 className="gradient__text">News</h1>
      </div>
      <div className="morphic__blog-container">
        <div className="morphic__blog-container_groupB">
          <Article 
            imgUrl={articles[currElement].img}
            imgWebp={Object.values(articles[currElement].webp)[0]}
            date={articles[currElement].date} 
            text={articles[currElement].title}
            link={articles[currElement].url} />
          <div className='blog-sidebar'>
            <article className='sidebar-article'>
              <img src="https://physician-news.umiamihealth.org/wp-content/uploads/sites/4/2023/03/IMG_6995.jpg" alt="" />
              <div className='article-info'>
                <h1> 
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    The Molecular Phenotypes of Null Alleles in Cells program seeks to identify the purpose behind every gene.
                  </a>
                </h1>
                <p><small>Mar 3, 2023</small></p>
              </div>
            </article>
            <article className='sidebar-article'>
              <img src="https://www.tacoma.uw.edu/sites/default/files/2023-05/uwtnews-2023-05-morphic-yueng-feature.jpg" alt="" />
              <div className='article-info'>
                <h1>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    Bioinformatics Team Powers International Effort to Map Gene Function
                  </a>
                </h1>
                <p><small>Dec 5, 2022</small></p>
              </div>
            </article>
            <article className='sidebar-article'>
              <img src="https://www.feinberg.northwestern.edu/research/images/podcast/adli-360.png" alt="" />
              <div className='article-info'>
                <h1>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    Identifying How Genes Function to Better Understand Cancer with Mazhar Adli, PhD
                  </a>
                </h1>
                <p><small>Dec 5, 2022</small></p>
              </div>
            </article>
            <article className='sidebar-article'>
              <img src="https://cancer.ucsf.edu/sites/cancer.ucsf.edu/files/styles/sf_landscape_16x9/public/images/article/luke_gilbert-186_1_0.jpeg?h=0632d6fb&itok=k8U6Jhe6" alt="" />
              <div className='article-info'>
                <h1>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    NIH initiative to systematically investigate and establish function of every human gene
                  </a>
                </h1>
                <p><small>Sep 27, 2022</small></p>
              </div>
            </article>
            <article className='sidebar-article'>
              <img src={blog00} alt="" />
              <div className='article-info'>
                <h1>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    NIH initiative to systematically investigate and establish function of every human gene.
                  </a>
                </h1>
                <p><small>Sep 27, 2022</small></p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog;
