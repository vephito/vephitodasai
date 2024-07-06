import React from 'react';
import '../styles/projects.css';
import Fade from "react-reveal/Fade";
import image1 from '../assets/images/p3.png';
import image2 from '../assets/images/p1.png';
import image3 from '../assets/images/p4.png';

function Projects() {
  return (

        <section id="projects" className="projects">
        <Fade bottom >
        <span className="about-title ">Projects</span>
          <div className="grid">
            <a href="https://chat-app-sandy-zeta.vercel.app/auth" className="grid-item">
              <img src={image1} alt="Project 1" />
              <p className="project-title">Chat App</p>
            </a>
          <a href="https://github.com/vephito/CampusTrade" className="grid-item">
            <img src={image1} alt="Project 2" />
            <p className="project-title">E Auction </p>
          </a>
          <a href="http://example.com/project3" className="grid-item">
            <img src={image3} alt="Project 3" />
            <p className="project-title"></p>
          </a>
          <a href="https://github.com/vephito/Gamezone" className="grid-item">
            <img src={image2} alt="Project 4" />
            <p className="project-title">Arcade Game</p>
          </a>
          </div>
          </Fade>
        </section>
    
  );
}

export default Projects;
