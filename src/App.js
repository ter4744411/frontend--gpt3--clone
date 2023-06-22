import React from 'react'
import {Footer, Blog, Possibility, Features, WhatGPT3, Header} from './containers';
import {Article , Brand, Cta , Feature , Navbar} from './components';
import './App.css';


function App(){
  return (
    <div className="App">
      <div className="gradient--bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
