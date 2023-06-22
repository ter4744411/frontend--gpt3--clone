import React from 'react'
import './blog.css'
import {blog01,blog02,blog03,blog04,blog05} from './imports';
import Article from '../../components/article/Article';

const Blog = () => {
  return (
    <div className="gpt3--blog section__padding">
      <div className="gpt3--blog--heading">
        <h1 className="gradient--text">A lot is happening,We are blogging about it.</h1>
      </div>
      <div className="gpt3--blog--container">
        <div className="gpt3--blog--container--groupa">
          <Article img={blog01} date="Sep 26,2021" title="GPT-3 and Open AL is the future. Let us explore how it is?"/>
        </div>
        <div className="gpt3--blog--container--groupb">
          <Article img={blog02} date="Sep 26,2021" title="GPT-3 and Open AL is the future. Let us explore how it is?"/>
          <Article img={blog03} date="Sep 26,2021" title="GPT-3 and Open AL is the future. Let us explore how it is?"/>
          <Article img={blog04} date="Sep 26,2021" title="GPT-3 and Open AL is the future. Let us explore how it is?"/>
          <Article img={blog05} date="Sep 26,2021" title="GPT-3 and Open AL is the future. Let us explore how it is?"/>
        </div>
      </div>
    </div>
  )
}

export default Blog
