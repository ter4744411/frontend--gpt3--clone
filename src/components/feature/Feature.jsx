import React from 'react'
import './feature.css';


const Feature = ({title,content}) => {
  return (
    <div className="gpt3--feature--container">
      <div className="gpt3--feature--container--title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="gpt3--feature--container--content">
        <p>{content}</p>
      </div>
    </div>
  )
}

export default Feature
