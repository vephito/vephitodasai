import React from "react";
import Typist from "react-typist";
import "../styles/intro.css";
import Fade from "react-reveal/Fade";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";
import {
  SiKubernetes,
  SiDocker,
  SiPython,
  SiNodedotjs,
  SiRedis,
  SiPostgresql,
  SiPrometheus,
  SiGrafana,
  SiTerraform,
  SiMongodb,
  SiFastapi,
  SiTypescript,
  SiVault,
  SiNginx,
  SiAnsible,
  SiGit,
  SiLinux
} from "react-icons/si";
import { personalInfo } from "../data/portfolioData";
import profilePic from "../assets/images/me.jpeg";

const tickerSkills = [
  { name: "Kubernetes", icon: <SiKubernetes />, color: "#326CE5" },
  { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
  { name: "Python", icon: <SiPython />, color: "#3776AB" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "#5FA04E" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "FastAPI", icon: <SiFastapi />, color: "#009688" },
  { name: "Redis", icon: <SiRedis />, color: "#DC382D" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "Terraform", icon: <SiTerraform />, color: "#844FBA" },
  { name: "Vault", icon: <SiVault />, color: "#00CA8E" },
  { name: "Prometheus", icon: <SiPrometheus />, color: "#E6522C" },
  { name: "Grafana", icon: <SiGrafana />, color: "#F46800" },
  { name: "Nginx", icon: <SiNginx />, color: "#009639" },
  { name: "Ansible", icon: <SiAnsible />, color: "#EE0000" },
  { name: "Git", icon: <SiGit />, color: "#F05032" },
  { name: "Linux", icon: <SiLinux />, color: "#FCC624" }
];

export default function Intro() {
  return (
    <section className="intro-section" id="home">
      <Fade bottom>
        <div className="hero-container">
          <div className="hero-text-col">
            <div className="hero-status-badge">
              <span className="hero-status-dot"></span>
              <span>Platform Engineer @ Pagesoft</span>
            </div>

            <div className="hero-title-container">
              <Typist
                avgTypingDelay={90}
                cursor={{
                  show: true,
                  blink: true,
                  element: "|",
                  hideWhenDone: false
                }}
              >
                <span className="hero-greeting">Hello, I'm </span>
                <span className="hero-name-inline">Vephito Dasai</span>
                <span className="hero-name-dot">.</span>
              </Typist>
            </div>

            <div className="hero-sub-line">
              <div className="hero-sub-divider"></div>
              <p className="hero-roles">
                Backend Engineer <span>/</span> Platform Engineer <span>/</span> Systems
              </p>
            </div>

            <p className="hero-bio">{personalInfo.summary}</p>

            <div className="hero-actions">
              <a href="#projects" className="hero-primary-cta">
                <span>View Selected Works</span>
                <FaArrowRight className="hero-arrow" />
              </a>

              <div className="hero-socials">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-icon"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-icon"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hero-social-icon"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>

          <div className="hero-photo-col">
            <div className="hero-photo-frame">
              <div className="hero-photo-glow"></div>
              <img src={profilePic} alt={personalInfo.name} className="hero-photo-img" />
              <div className="hero-photo-badge">
                <span className="hero-photo-badge-dot"></span>
                <span>Bengaluru, India</span>
              </div>
            </div>
          </div>
        </div>
      </Fade>

      {/* Infinite Tech Ticker */}
      <div className="tech-ticker-container">
        <div className="tech-ticker-track">
          {tickerSkills.concat(tickerSkills).map((item, index) => (
            <div key={index} className="tech-ticker-item">
              <span className="tech-ticker-icon" style={{ color: item.color }}>
                {item.icon}
              </span>
              <span className="tech-ticker-name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
