import React from 'react'
import "../styles/nav.css";
import Fade from "react-reveal/Fade";
import  { useState, useEffect } from 'react';
import { FaSun, FaMoon } from "react-icons/fa";

const Header = () => {

    const [activeSection, setActiveSection] = useState('');
  
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check local storage for theme preference
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.body.className = savedTheme + "-mode";
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme + "-mode";
    localStorage.setItem("theme", newTheme); // Save preference in local storage
  };

    useEffect(() => {
      const sections = document.querySelectorAll('section');
      const options = {
        threshold: 0.5
      };
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      }, options);
  
      sections.forEach(section => observer.observe(section));
  
      return () => {
        sections.forEach(section => observer.unobserve(section));
      };
    }, []);
  
   
    return (
        <Fade bottom>
        <header className='vertical-nav'>
            <nav>
            <div className="Logo"></div>
            <ul>
        <li><a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
        <li><a href="#about"  className={activeSection === 'about' ? 'active' : ''}>About</a></li>
        <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
        <li><a href="#blog" className={activeSection === 'blog' ? 'active' : ''}>Blog</a></li>
        <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
        <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
      </button>
      </ul>
            </nav>
        </header>
    </Fade>
    );
}
export default Header;