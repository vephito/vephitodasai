import React from "react";
import "../styles/projects.css";
import Fade from "react-reveal/Fade";
import { FaGithub, FaExternalLinkAlt, FaLock } from "react-icons/fa";
import { projectsData } from "../data/portfolioData";
import huntsmenImg from "../assets/images/huntsmen-preview.png";
import qrcafeImg from "../assets/images/qrcafe-menu-preview.png";
import posImg from "../assets/images/orderkit-pos-preview.png";

const projectImages = {
  huntsmen: huntsmenImg,
  qrcafe: qrcafeImg,
  "orderkit-pos": posImg
};

const scriptSnippet = {
  filename: "lambda_handler.py",
  lang: "Python",
  lines: [
    {
      num: 1,
      tokens: [<span className="code-kw">import</span>, " boto3, selenium"]
    },
    {
      num: 2,
      tokens: [
        <span className="code-kw">from</span>,
        " twilio.rest ",
        <span className="code-kw">import</span>,
        " Client"
      ]
    },
    { num: 3, tokens: [] },
    {
      num: 4,
      tokens: [
        <span className="code-kw">def</span>,
        " ",
        <span className="code-fn">lambda_handler</span>,
        "(event, context):"
      ]
    },
    {
      num: 5,
      tokens: [
        "    ",
        <span className="code-comment">{"# Headless scraping of academic attendance records"}</span>
      ]
    },
    {
      num: 6,
      tokens: [
        "    portal = ",
        <span className="code-fn">AttendanceScraper</span>,
        "(headless=",
        <span className="code-kw">True</span>,
        ")"
      ]
    },
    {
      num: 7,
      tokens: [
        "    percentage = portal.",
        <span className="code-fn">get_attendance</span>,
        "()"
      ]
    },
    { num: 8, tokens: [] },
    {
      num: 9,
      tokens: [
        "    ",
        <span className="code-kw">if</span>,
        " percentage < ",
        <span className="code-var">75.0</span>,
        ":"
      ]
    },
    {
      num: 10,
      tokens: [
        "        twilio.messages.",
        <span className="code-fn">create</span>,
        "(to=",
        <span className="code-str">\"+917005181283\"</span>,
        ", body=",
        <span className="code-str">\"Alert: Attendance low\"</span>,
        ")"
      ]
    },
    {
      num: 11,
      tokens: [
        "    ",
        <span className="code-kw">return</span>,
        " {",
        <span className="code-str">\"status\"</span>,
        ": ",
        <span className="code-str">\"dispatched\"</span>,
        "}"
      ]
    }
  ]
};

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <Fade bottom>
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-desc">
              Production web applications, real-time cafe operations, and cloud automation systems built with clean architecture.
            </p>
          </div>
        </Fade>

        <div className="projects-list">
          {projectsData.map((project, index) => {
            const isReverse = index % 2 === 1;
            const previewImg = projectImages[project.id];

            return (
              <Fade bottom key={project.id}>
                <article
                  className={`project-row ${isReverse ? "reverse" : ""}`}
                  aria-label={project.title}
                >
                  {/* Visual Column: Browser Screenshot Window OR Code Editor Window */}
                  <div className="project-code-col">
                    {previewImg ? (
                      <div className="browser-mockup-window">
                        <div className="browser-window-header">
                          <div className="browser-window-dots">
                            <span className="browser-dot red"></span>
                            <span className="browser-dot yellow"></span>
                            <span className="browser-dot green"></span>
                          </div>
                          <div className="browser-address-bar">
                            <FaLock className="browser-lock-icon" />
                            <span className="browser-url-text">
                              https://{project.displayUrl}
                            </span>
                          </div>
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="browser-open-btn"
                            aria-label={`Open ${project.title} in new tab`}
                          >
                            <FaExternalLinkAlt />
                          </a>
                        </div>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="browser-screenshot-link"
                          tabIndex={-1}
                          aria-hidden="true"
                        >
                          <img
                            src={previewImg}
                            alt={`${project.title} live interface preview`}
                            className="browser-screenshot-img"
                            loading="lazy"
                          />
                          <div className="browser-screenshot-overlay">
                            <span className="overlay-badge">
                              <FaExternalLinkAlt />
                              <span>Open Live App</span>
                            </span>
                          </div>
                        </a>
                      </div>
                    ) : (
                      <div className="code-mockup-window">
                        <div className="code-window-header">
                          <div className="code-window-dots">
                            <span className="code-dot red"></span>
                            <span className="code-dot yellow"></span>
                            <span className="code-dot green"></span>
                          </div>
                          <span className="code-window-filename">
                            {scriptSnippet.filename}
                          </span>
                          <span className="code-window-lang">
                            {scriptSnippet.lang}
                          </span>
                        </div>
                        <div className="code-window-body">
                          <div className="code-lines-wrapper">
                            {scriptSnippet.lines.map((line) => (
                              <div key={line.num} className="code-line">
                                <span className="code-line-num">{line.num}</span>
                                <span className="code-line-content">
                                  {line.tokens.length > 0 ? (
                                    line.tokens.map((tok, tIdx) => (
                                      <React.Fragment key={tIdx}>
                                        {tok}
                                      </React.Fragment>
                                    ))
                                  ) : (
                                    "\u00A0"
                                  )}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Project Info Column */}
                  <div className="project-info-col">
                    <div className="project-meta-row">
                      <span className="project-number">0{index + 1}</span>
                      <span className="project-meta-divider">•</span>
                      <span className="project-subtitle-text">
                        {project.subtitle}
                      </span>
                      {project.live ? (
                        <span className="project-status-badge live">
                          <span className="status-beacon-dot"></span>
                          <span>Live</span>
                        </span>
                      ) : (
                        <span className="project-status-badge serverless">
                          <span>Serverless</span>
                        </span>
                      )}
                    </div>

                    <h3 className="project-title-text">{project.title}</h3>
                    <p className="project-desc-text">{project.description}</p>

                    <div className="project-tech-pills">
                      {project.technologies.map((tech, tIdx) => (
                        <span key={tIdx} className="project-tech-pill">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="project-actions-row">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-btn project-btn-primary"
                          aria-label={`Open live demo for ${project.title}`}
                        >
                          <FaExternalLinkAlt className="btn-icon" />
                          <span>Live Preview</span>
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-btn project-btn-secondary"
                          aria-label={`View source code on GitHub for ${project.title}`}
                        >
                          <FaGithub className="btn-icon" />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Fade>
            );
          })}
          </div>
        </div>
      </section>
    );
  }
