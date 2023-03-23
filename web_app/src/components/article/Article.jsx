import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, text }) => (
  <article className="morphic__blog-container_article">
    <div className="morphic__blog-container_article-image">
      <img src={imgUrl} alt="Morphic Artile Cover Image" />
    </div>
    <div className="morphic__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <a href="https://www.nih.gov/news-events/news-releases/nih-initiative-systematically-investigate-establish-function-every-human-gene" target="_blank" rel="noopener noreferrer">Read Full Article</a>
    </div>
  </article>
);

export default Article;
