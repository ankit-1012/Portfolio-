// eslint-disable-next-line no-unused-vars
import React from 'react';
import './About.css';
import { FaReact, FaNodeJs, FaJava, FaPython } from 'react-icons/fa';
import { DiMongodb, DiAndroid, DiVisualstudio} from 'react-icons/di';
import { SiExpress, SiCplusplus } from 'react-icons/si';

import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/profile_img2.jpeg';

const About = () => {
  return (
    <div id ='about'className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="theme pattern"/>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Hi, I am Ankit Dubey. A passionate competitive programmer, computer vision enthusiast, and web developer. I have done MCA from NIT Raipur, BCA from B.C. Roy Engineering College. I fancy learning variety of stuff such as :</p>
          </div>
          <div className="about-skills">
            <div className="about-skill" >
              <div title="ReactJS"><FaReact size={50} color="#61DBFB" /></div>
              <div title="NodeJS"><FaNodeJs size={50} color="#68A063" /></div>
              <div title="ExpressJS"><SiExpress size={50} color="white" /></div>
              <div title="MongoDB"><DiMongodb size={50} color="#4DB33D" /></div>
              <div title="Android Development"><DiAndroid size={50} color="#3DDC84" /></div>
              <div title="Java"><FaJava size={50} color="#007396" /></div>
              <div title="Python"><FaPython size={50} color="#3776AB" /></div>
              <div title="C++"><SiCplusplus size={50} color="#00599C" /></div>
              <div title="VS Code"><DiVisualstudio size={50} color="#007ACC" /></div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
      <div className="about-achievement">
        <h1>Finalist</h1>
        <p>National Science Exhibition, NIT Raipur</p>
        <p>Inter-College Competition</p>
      </div>
      <hr/>
      <div className="about-achievement">
        <h1>Competitive Coding</h1>
        <p>Knight @ Leetcode </p>
        <p> Specialist @ Codeforces</p>
      </div>
    </div>
      
      
    </div>
  )
}

export default About;
