import React from 'react'
import './possibility.css'
import possibilitypic from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className="gpt3--possibility section__padding">
      <div className="gpt3--possibility--image">
        <img src={possibilitypic} alt="possibilitypic"/>
      </div>
      <div className="gpt3--possibility--container">
        <h3>Request Early Access to Get Started</h3>
        <h1 className="gradient--text">The possibilities are beyond your imagination</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h4 style={{color:"#FF8A71"}}>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility
