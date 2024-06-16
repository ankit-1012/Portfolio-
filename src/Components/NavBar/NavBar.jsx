import "./NavBar.css";
// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';

import { useState } from "react";
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
const NavBar = () => {
  const [menu ,setMenu] = useState("home");
  const menuRef = useRef();
  const openMenu = () =>{

    menuRef.current.style.right = '0';
  }
  const closeMenu = () =>{
    menuRef.current.style.right = '-350px';
  }
  return (
    <div className='navbar'>
        
        <img src={menu_open} onClick={openMenu} className="nav-mob-open"/>
        <ul ref={menuRef} className="nav-menu">
            <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
            <li><AnchorLink className="anchor-link" offset={50} href="#home"><p onClick={()=> setMenu("home")}>Home</p></AnchorLink>{menu === "home"? <img src={underline} />:<></>}</li>
            <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={()=> setMenu("about")}>About Me</p></AnchorLink>{menu === "about"? <img src={underline} />:<></>}</li>
            <li><AnchorLink className="anchor-link" offset={50} href="#projects"><p onClick={()=> setMenu("projects")}>Projects</p></AnchorLink>{menu === "projects"? <img src={underline} />:<></>}</li>
            <li><AnchorLink className="anchor-link" offset={50} href="#portfolio"><p onClick={()=> setMenu("portfolio")}>Portfolio</p></AnchorLink>{menu === "portfolio"? <img src={underline} />:<></>}</li>
            <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=> setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact"? <img src={underline} />:<></>}</li>
            
        </ul>
        <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with Me</AnchorLink></div>
    </div>
  )
}

export default NavBar