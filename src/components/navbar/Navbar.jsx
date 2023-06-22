import React,{useState} from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'
import logo from '../../assets/logo.svg'

const Navbar = () => {

  const [togglemenu,setTogglemenu] = useState(false);
  const Menu =() => (
    <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is GPT?</a></p>
    <p><a href="#possibility">OpenAL</a></p>
    <p><a href="#features">Case Studies </a></p>
    <p><a href="#blog">Library </a></p>
    </>
  )

  return (
    <div className="gpt3--navbar">
      <div className="gpt3--navbar--link">
        <div className="gpt3--navbar--link--logo">
          <img src={logo} alt="logo"/>
        </div>
        <div className="gpt3--navbar--link--container">
          <Menu/>
        </div>
      </div>
      <div  className="gpt3--navbar--sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3--navbar--menu">
        {togglemenu ? 
        <RiCloseLine color="#fff" size={30} onClick={() => setTogglemenu(false)}/> :
        <RiMenu3Line color="#fff" size={30} onClick={() => setTogglemenu(true)}/>
        }
        {togglemenu && (
          <div className="gpt3--navbar--menu--container scale-up-center">
            <div className="gpt3--navbar--menu--container--link">
              <Menu/>
              <div className="gpt3--navbar--menu--container--link--sign">
                  <p>Sign in</p>
                  <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
