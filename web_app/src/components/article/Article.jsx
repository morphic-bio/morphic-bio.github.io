import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, text, link }) => (
  <article className="morphic__blog-container_article">
    <div className="morphic__blog-container_article-image">
      <img src={imgUrl} alt="Morphic Artile Cover Image" />
    </div>
    <div className="morphic__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer">Read Full Article</a>
    </div>
  </article>
);

export default Article;
