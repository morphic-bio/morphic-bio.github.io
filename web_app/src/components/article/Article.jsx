import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, text, link, imgWebp }) => {
  return (<article className="morphic__blog-container_article">
    <div className="morphic__blog-container_article-image">
      <picture>
        
        <source 
          type="image/avif"
          srcSet={imgWebp}
        />
        <img
          src={imgUrl} 
          alt="Morphic Article Cover Image" 
        />
      </picture>
    </div>
    <div className="morphic__blog-container_article-content">
      <div>
        <p className="morphic__blog-article-text">
          <small className="morphic__blog-article-date">{date}</small>
        </p>
        <h1 className="morphic__blog-article-heading">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {text}
          </a>
        </h1>
      </div>
    </div>
  </article>
);}

export default Article;
