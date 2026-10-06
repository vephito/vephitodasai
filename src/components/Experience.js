import React from "react";
import "../styles/experience.css";
import Fade from "react-reveal/Fade";
import {
  FaCalendarAlt,
  FaBuilding,
  FaMapMarkerAlt,
  FaArrowRight,
  FaCheck
} from "react-icons/fa";
import { experienceData } from "../data/portfolioData";

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <Fade bottom>
          <div className="section-header">
            <h2 className="section-title">Professional Journey</h2>
            <p className="section-desc">
              Track record of rapid engineering progression at Pagesoft — architecting Kubernetes platforms, high-availability database layers, and distributed systems.
            </p>
          </div>
        </Fade>

        {/* Career Trajectory Stepper Banner */}
        <Fade bottom>
          <div className="trajectory-banner">
            <div className="trajectory-company-info">
              <div className="trajectory-company-icon">
                <FaBuilding />
              </div>
              <div>
                <h3 className="trajectory-company-name">Pagesoft Technologies</h3>
                <div className="trajectory-company-meta">
                  <span>
                    <FaMapMarkerAlt className="meta-icon" /> Bengaluru, Karnataka
                  </span>
                  <span className="meta-dot">•</span>
                  <span>2+ Years Production Infrastructure</span>
                </div>
              </div>
            </div>

            <div className="trajectory-stepper">
              <div className="stepper-step completed">
                <span className="step-num">01</span>
                <span className="step-label">Backend Intern</span>
              </div>
              <FaArrowRight className="stepper-arrow" />
              <div className="stepper-step completed">
                <span className="step-num">02</span>
                <span className="step-label">Backend Developer</span>
              </div>
              <FaArrowRight className="stepper-arrow" />
              <div className="stepper-step active">
                <span className="step-num">03</span>
                <span className="step-label">Platform Engineer</span>
              </div>
            </div>
          </div>
        </Fade>

        {/* Vertical Engineering Timeline */}
        <div className="timeline-wrapper">
          <div className="timeline-spine"></div>

          <div className="timeline-nodes-list">
            {experienceData.map((exp, index) => {
              const isCurrent = exp.status === "Current";

              return (
                <Fade bottom key={exp.id}>
                  <div
                    className={`timeline-entry ${isCurrent ? "is-current" : ""}`}
                  >
                    {/* Spine Node Marker */}
                    <div className="timeline-marker-wrapper">
                      <div className="timeline-marker">
                        {isCurrent ? (
                          <span className="timeline-beacon"></span>
                        ) : (
                          <span className="timeline-dot"></span>
                        )}
                      </div>
                      <span className="timeline-phase-label">PHASE {exp.phase}</span>
                    </div>

                    {/* Timeline Role Card */}
                    <article className="timeline-card" aria-label={exp.role}>
                      <div className="timeline-card-header">
                        <div className="role-heading-group">
                          <div className="role-meta-row">
                            <span className="role-type-tag">{exp.type}</span>
                            <span className="role-status-badge">
                              {exp.status}
                            </span>
                            <div className="role-period-pill">
                              <FaCalendarAlt className="period-icon" />
                              <span>{exp.period}</span>
                            </div>
                          </div>

                          <h3 className="role-title">{exp.role}</h3>
                          <p className="role-tagline">{exp.tagline}</p>
                        </div>
                      </div>

                      {/* Production Impact Metric Chips */}
                      {exp.metrics && exp.metrics.length > 0 && (
                        <div className="metrics-strip">
                          {exp.metrics.map((m, mIdx) => (
                            <div key={mIdx} className="metric-chip">
                              <span className="metric-label">{m.label}</span>
                              <strong className="metric-value">{m.value}</strong>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Architecture Highlights */}
                      <ul className="highlights-list">
                        {exp.highlights.map((item, hIdx) => (
                          <li key={hIdx} className="highlight-item">
                            <span className="highlight-bullet">
                              <FaCheck />
                            </span>
                            <span className="highlight-text">{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies Owned */}
                      <div className="timeline-tech-footer">
                        <span className="tech-footer-label">Stack Owned:</span>
                        <div className="tech-tags-wrapper">
                          {exp.tags.map((tag, tIdx) => (
                            <span key={tIdx} className="tech-tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  </div>
                </Fade>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
