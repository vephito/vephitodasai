import React, { useState, useEffect, useRef } from "react";
import "../styles/experience.css";
import Fade from "react-reveal/Fade";
import { FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
import { experienceData } from "../data/portfolioData";

export default function Experience() {
  const containerRef = useRef(null);
  const [lineProgress, setLineProgress] = useState(0.2);
  const [activeIndices, setActiveIndices] = useState([0]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) return;
          const rect = containerRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // Compute scroll progress through the timeline container
          const triggerPoint = windowHeight * 0.72;
          const currentDistance = triggerPoint - rect.top;
          const totalDistance = rect.height;

          const progress = Math.min(Math.max(currentDistance / totalDistance, 0.15), 1);
          setLineProgress(progress);

          // Determine which cards are reached by the following line
          const rowEls = containerRef.current.querySelectorAll(".timeline-row");
          const reached = [];
          rowEls.forEach((el, index) => {
            const rowRect = el.getBoundingClientRect();
            if (rowRect.top < triggerPoint + 60) {
              reached.push(index);
            }
          });

          // Ensure at least the first role is always illuminated
          if (reached.length === 0) reached.push(0);
          setActiveIndices(reached);

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container" ref={containerRef}>
        <Fade bottom>
          <div className="section-header">
            <h2 className="section-title">Professional Journey</h2>
            <p className="section-desc">
              Career progression building high-availability database infrastructure, Kubernetes platforms, and distributed telemetry at Pagesoft.
            </p>
          </div>
        </Fade>

        <div className="timeline-interactive-wrapper">
          {/* Static background spine rail */}
          <div className="timeline-spine-track" aria-hidden="true"></div>

          {/* Dynamic flowing neon beam */}
          <div
            className="timeline-spine-beam"
            style={{
              transform: `scaleY(${lineProgress})`
            }}
            aria-hidden="true"
          >
            <div className="timeline-beam-head"></div>
          </div>

          {/* Timeline Milestones */}
          <div className="timeline-rows-list">
            {experienceData.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const isReached = activeIndices.includes(index);

              return (
                <div
                  key={exp.id}
                  className={`timeline-row ${isLeft ? "row-left" : "row-right"} ${
                    isReached ? "is-reached" : ""
                  }`}
                >
                  {/* Central Node Checkpoint */}
                  <div className="timeline-checkpoint" aria-hidden="true">
                    <div className={`checkpoint-dot ${isReached ? "dot-active" : ""}`}>
                      <span className="dot-core"></span>
                      <span className="dot-pulse-ring"></span>
                    </div>
                    <div
                      className={`checkpoint-connector ${
                        isReached ? "connector-active" : ""
                      }`}
                    ></div>
                  </div>

                  {/* Animated Experience Card */}
                  <div
                    className={`timeline-card-wrapper ${
                      isReached ? "card-revealed" : ""
                    }`}
                  >
                    <article className="experience-card" aria-label={`${exp.role} at ${exp.company}`}>
                      <div className="card-ambient-glow" aria-hidden="true"></div>

                      {/* Header Row: Company & Period */}
                      <div className="card-top-header">
                        <div className="company-badge-group">
                          <span className="company-name-text">{exp.company}</span>
                          <span className="meta-bullet">•</span>
                          <span className="location-pill">
                            <FaMapMarkerAlt className="meta-icon" />
                            <span>{exp.location}</span>
                          </span>
                        </div>

                        <div className="period-badge-pill">
                          <FaCalendarAlt className="meta-icon" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Role Title */}
                      <h3 className="role-heading-text">{exp.role}</h3>

                      {/* Key Impact Metric Chips */}
                      {exp.metrics && (
                        <div className="role-metrics-row">
                          {exp.metrics.map((metric, mIdx) => (
                            <span key={mIdx} className="role-metric-chip">
                              <span className="metric-chip-beacon"></span>
                              <span>{metric}</span>
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Bullet Highlights */}
                      <ul className="highlights-bullet-list">
                        {exp.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="highlight-bullet-item">
                            <FaCheckCircle className="highlight-check-icon" />
                            <span className="highlight-text">{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Tags */}
                      <div className="tech-tags-list">
                        {exp.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="tech-badge-pill">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </article>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
