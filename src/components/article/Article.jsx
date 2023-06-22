import React from 'react';
import './article.css';

const Article = ({img,date,title}) => {
  return (
    <div className="gpt3--article">
      <div className="gpt3--article--image">
        <img src={img} alt="blog--image"/>
      </div>
      <div className="gpt3--article--content">
        <h4>{date}</h4>
        <h2>{title}</h2>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article
