import React from "react";
import "../styles/about.css";
import Fade from "react-reveal/Fade";
import { FaCogs, FaServer, FaChartLine, FaDatabase, FaCode, FaGraduationCap } from "react-icons/fa";
import { technicalSkills, educationData } from "../data/portfolioData";

const categoryIcons = {
  "Platform & DevOps": <FaCogs />,
  "Backend & APIs": <FaServer />,
  "Observability & Telemetry": <FaChartLine />,
  "Databases & Streaming": <FaDatabase />,
  "Languages": <FaCode />
};

export default function Aboutme() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        {/* Technical Arsenal Heading */}
        <Fade bottom>
          <div className="section-header">
            <h2 className="section-title">Technical Arsenal</h2>
            <p className="section-desc">
              A curated stack of technologies for building high-performance, resilient, and observable distributed systems.
            </p>
          </div>
        </Fade>

        {/* Skills Grid */}
        <div className="skills-grid">
          {technicalSkills.map((cat, idx) => (
            <Fade bottom key={idx}>
              <div className="skill-category-box">
                <div className="skill-category-header">
                  <div className="skill-category-icon">
                    {categoryIcons[cat.category] || <FaCogs />}
                  </div>
                  <h3 className="skill-category-title">{cat.category}</h3>
                </div>

                <div className="skill-pills-wrap">
                  {cat.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Fade>
          ))}
        </div>

        {/* Education Section */}
        <div className="education-section-wrap" id="education">
          <Fade bottom>
            <div className="section-header">
              <h2 className="section-title">
                <FaGraduationCap style={{ marginRight: "12px", verticalAlign: "middle" }} />
                Education
              </h2>
              <p className="section-desc">
                Academic foundation in computer applications and software engineering.
              </p>
            </div>
          </Fade>

          <div className="education-cards-grid">
            {educationData.map((edu, idx) => (
              <Fade bottom key={idx}>
                <div className="education-card">
                  <div className="education-card-top">
                    <h3 className="education-degree-text">{edu.degree}</h3>
                    <span className="education-period-badge">{edu.period}</span>
                  </div>

                  <p className="education-school-text">
                    {edu.institution} · {edu.location}
                  </p>

                  <div className="education-tags-list">
                    <span className="education-tag">Distributed Systems</span>
                    <span className="education-tag">Data Structures & Algorithms</span>
                    <span className="education-tag">Operating Systems</span>
                    <span className="education-tag">Database Management</span>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
