import React, { useState, useEffect } from "react";
import "../styles/nav.css";
import { FaBars, FaTimes, FaFileAlt } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

export default function Nav() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const options = { threshold: 0.3 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <button
          className="nav-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`nav-menu ${mobileMenuOpen ? "open" : ""}`}>
          <li>
            <a
              href="#home"
              onClick={closeMenu}
              className={`nav-link ${activeSection === "home" ? "active" : ""}`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={closeMenu}
              className={`nav-link ${activeSection === "experience" ? "active" : ""}`}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={closeMenu}
              className={`nav-link ${activeSection === "projects" ? "active" : ""}`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={closeMenu}
              className={`nav-link ${activeSection === "skills" ? "active" : ""}`}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#education"
              onClick={closeMenu}
              className={`nav-link ${activeSection === "education" ? "active" : ""}`}
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={closeMenu}
              className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href={personalInfo.resumeUrl}
              download
              className="nav-resume-btn"
              onClick={closeMenu}
            >
              <FaFileAlt />
              <span>Resume</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}