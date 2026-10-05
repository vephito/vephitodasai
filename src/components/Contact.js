import React from "react";
import "../styles/contact.css";
import Fade from "react-reveal/Fade";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaTwitter, FaInstagram } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <Fade bottom>
          <div className="contact-badge">
            <span>Get in Touch</span>
          </div>

          <h2 className="contact-heading">
            Let's build something scalable<span className="contact-heading-dot">.</span>
          </h2>

          <p className="contact-subtext">
            Currently open to Backend and Platform / DevOps engineering opportunities, Kubernetes architecture,
            and high-throughput system design discussions.
          </p>

          <div className="contact-cta-row">
            <a href={`mailto:${personalInfo.email}`} className="contact-primary-btn">
              <FaEnvelope />
              <span>Say Hello</span>
            </a>

            <a href={personalInfo.resumeUrl} download className="contact-secondary-btn">
              <FaFileDownload />
              <span>Download Resume</span>
            </a>
          </div>

          <div className="contact-social-strip">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-item"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-item"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/vephito_dasai"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-item"
              aria-label="Twitter / X"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/vephito_/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-item"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="contact-social-item"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </Fade>
      </div>
    </section>
  );
}
