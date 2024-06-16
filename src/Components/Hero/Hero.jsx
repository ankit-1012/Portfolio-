import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Hero.css';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import profile_img from '../../assets/profile_img.png';
import resume from '../../assets/resume.pdf'
const Hero = () => {
  return (
    <div id='hero' className='hero'>
        <img src={profile_img}/>
        <h1> <span> I am Ankit Dubey</span> aspring Software Developer from India</h1>
        
        <div className="hero-action">
            <div className="hero-connect">
            <AnchorLink className="anchor-link" offset={50} href="#contact">Connect with Me</AnchorLink>
            </div>
            <div className="hero-resume">
            <a href={resume} target="_blank" rel="noopener noreferrer">My Resume</a> 
            </div>
        </div>
    </div>
  )
}

export default Hero