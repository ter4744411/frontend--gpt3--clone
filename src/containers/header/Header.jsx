import React from 'react'
import './header.css'
import AI from '../../assets/ai.png';
import people from '../../assets/people.png'

const Header = () => {
  return (
    <div className="gpt3--header">
      <div className="gpt3--header--content">
        <h1 className="gradient--text">Let's Build Something amazing with GPT-3 OpenAI</h1>
        <p>Let’s Build Something amazing with GPT-3 OpenAI Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      
        <div className="gpt3--header--content--input">
          <input type="box" placeholder="Your Email Address"/>
          <button>Get Started</button>
        </div>
        <div className="gpt3--header--content--people">
          <img src={people} alt="people"/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3--header--image">
        <img src={AI} alt="ai"/>
      </div>
    </div>
  )
}

export default Header
