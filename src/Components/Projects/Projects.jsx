// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Projects.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import ImageSlider from '../Slider/ImageSlider';
import myProjects from '../../utils/myProjects';

const Projects = () => {
  return (
    <div id='projects' className="projects">
      <div className="projects-title">
        <h1>My Recent Projects</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>
      <div className="projects-container">
      {myProjects.map((project) => (
        <div className="project-item" key={project.id}>
          <div className="project-img">
            <ImageSlider images={project.images} />
          </div>
          
          <div className="project-details">
            <h2 className="project-title">{project.title}</h2>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Projects;
