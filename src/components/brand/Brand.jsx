import React from 'react'
import './brand.css'
import {slack,google,atlassian,dropbox,shopify} from "./imports"

const Brand = () => {
  return (
    <div className="gpt3--brand">
      <div>
        <img src={google} alt="google"/>
      </div>
      <div>
        <img src={slack} alt="slack"/>
      </div>
      <div>
        <img src={atlassian} alt="atlessian"/>
      </div>
      <div>
        <img src={dropbox} alt="dropbox"/>
      </div>
      <div>
        <img src={shopify} alt="shopify"/>
      </div>
    </div>
  )
}

export default Brand
