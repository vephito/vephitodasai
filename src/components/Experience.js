import React from "react";
import "../styles/experience.css";
import Fade from "react-reveal/Fade";
import { FaCalendarAlt } from "react-icons/fa";
import { experienceData } from "../data/portfolioData";

export default function Experience() {
  const getVariant = (id) => {
    if (id === "platform-engineer") return "variant-platform";
    if (id === "backend-developer") return "variant-backend";
    return "variant-intern";
  };

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <Fade bottom>
          <div className="section-header">
            <h2 className="section-title">Professional Journey</h2>
            <p className="section-desc">
              A timeline of building scalable backend systems, Kubernetes platforms, and production observability.
            </p>
          </div>
        </Fade>

        <div className="experience-list">
          {experienceData.map((exp, index) => {
            const isReverse = index % 2 === 1;
            return (
              <Fade bottom key={exp.id}>
                <div className={`experience-row ${isReverse ? "reverse" : ""}`}>
                  {/* Visual Left/Right Card */}
                  <div className="experience-visual">
                    <div className={`experience-visual-card ${getVariant(exp.id)}`}>
                      <div className="experience-card-bg-gradient"></div>
                      <div className="experience-visual-content">
                        <h3 className="experience-visual-company">{exp.company}</h3>
                        <div className="experience-visual-meta">
                          <span className="experience-dot"></span>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Info Left/Right Block */}
                  <div className="experience-info">
                    <div className="experience-period-pill">
                      <FaCalendarAlt />
                      <span>{exp.period}</span>
                    </div>

                    <h3 className="experience-role-title">{exp.role}</h3>

                    <ul className="experience-bullet-list">
                      {exp.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="experience-bullet-item">
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <div className="experience-tech-tags">
                      {exp.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="experience-tag-pill">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
