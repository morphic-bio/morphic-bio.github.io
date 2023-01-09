import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="morphic__blog section__padding" id="blog">
    <div className="morphic__blog-heading">
      <h1 className="gradient__text">News</h1>
    </div>
    <div className="morphic__blog-container">
      <div className="morphic__blog-container_groupA">
        <Article imgUrl={blog01} date="Nov 26, 2022" text="NIH initiative to systematically investigate and establish function of every human gene" />
      </div>
      <div className="morphic__blog-container_groupB">
        <Article imgUrl={blog02} date="Nov 26, 2022" text="NIH initiative to systematically investigate and establish function of every human gene" />
        <Article imgUrl={blog03} date="Nov 26, 2022" text="NIH initiative to systematically investigate and establish function of every human gene" />
        <Article imgUrl={blog04} date="Nov 26, 2022" text="NIH initiative to systematically investigate and establish function of every human gene" />
        <Article imgUrl={blog05} date="Nov 26, 2022" text="NIH initiative to systematically investigate and establish function of every human gene" />
      </div>
    </div>
  </div>
);

export default Blog;
