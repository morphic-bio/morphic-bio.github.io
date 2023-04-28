import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, text, link }) => (
  <article className="morphic__blog-container_article">
    <div className="morphic__blog-container_article-image">
      <img src={imgUrl} alt="Morphic Article Cover Image" />
    </div>
    <div className="morphic__blog-container_article-content">
      <div>
        <p>{date}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <h1 className="morphic__blog-article-heading">{text}</h1>
        </a>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer">Read Full Article</a>
    </div>
  </article>
);

export default Article;
