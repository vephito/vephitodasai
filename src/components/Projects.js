import React from "react";
import "../styles/projects.css";
import Fade from "react-reveal/Fade";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projectsData } from "../data/portfolioData";

const projectSnippets = {
  "attendance-notifier": {
    filename: "lambda_handler.py",
    code: (
      <>
        <span className="code-kw">import</span> boto3, selenium{"\n"}
        <span className="code-kw">from</span> twilio.rest <span className="code-kw">import</span> Client{"\n"}
        {"\n"}
        <span className="code-kw">def</span> <span className="code-fn">lambda_handler</span>(event, context):{"\n"}
        {"  "}<span className="code-comment"># Scrape university portal with headless driver</span>{"\n"}
        {"  "}<span className="code-var">portal</span> = AttendanceScraper(headless=<span className="code-kw">True</span>){"\n"}
        {"  "}<span className="code-var">percentage</span> = portal.get_attendance_records(){"\n"}
        {"  "}{"\n"}
        {"  "}<span className="code-kw">if</span> percentage &lt; <span className="code-var">75.0</span>:{"\n"}
        {"    "}twilio.messages.create(to=<span className="code-str">"+917005181283"</span>, body=<span className="code-str">"Alert"</span>){"\n"}
        {"  "}<span className="code-kw">return</span> &#123;<span className="code-str">"status"</span>: <span className="code-str">"dispatched"</span>&#125;
      </>
    )
  },
  "chat-app": {
    filename: "socket_server.ts",
    code: (
      <>
        <span className="code-kw">import</span> &#123; Server &#125; <span className="code-kw">from</span> <span className="code-str">"socket.io"</span>;{"\n"}
        <span className="code-kw">import</span> &#123; createServer &#125; <span className="code-kw">from</span> <span className="code-str">"http"</span>;{"\n"}
        {"\n"}
        <span className="code-var">io</span>.<span className="code-fn">on</span>(<span className="code-str">"connection"</span>, (socket) =&gt; &#123;{"\n"}
        {"  "}socket.<span className="code-fn">on</span>(<span className="code-str">"join_room"</span>, (roomId) =&gt; &#123;{"\n"}
        {"    "}socket.join(roomId);{"\n"}
        {"    "}socket.to(roomId).emit(<span className="code-str">"user_connected"</span>);{"\n"}
        {"  "}&#125;);{"\n"}
        {"  "}socket.<span className="code-fn">on</span>(<span className="code-str">"send_message"</span>, (payload) =&gt; &#123;{"\n"}
        {"    "}io.to(payload.roomId).emit(<span className="code-str">"receive_message"</span>, payload);{"\n"}
        {"  "}&#125;);{"\n"}
        &#125;);
      </>
    )
  },
  "campus-trade": {
    filename: "auction_service.js",
    code: (
      <>
        <span className="code-kw">const</span> mongoose = require(<span className="code-str">"mongoose"</span>);{"\n"}
        <span className="code-kw">const</span> Auction = require(<span className="code-str">"./models/Auction"</span>);{"\n"}
        {"\n"}
        <span className="code-kw">async function</span> <span className="code-fn">placeBid</span>(auctionId, userId, amount) &#123;{"\n"}
        {"  "}<span className="code-kw">const</span> session = <span className="code-kw">await</span> mongoose.startSession();{"\n"}
        {"  "}<span className="code-kw">try</span> &#123;{"\n"}
        {"    "}<span className="code-comment">&#47;&#47; Execute atomic bid update</span>{"\n"}
        {"    "}<span className="code-kw">await</span> session.withTransaction(<span className="code-kw">async</span> () =&gt; &#123;{"\n"}
        {"      "}<span className="code-kw">await</span> Auction.findOneAndUpdate(&#123; _id: auctionId &#125;, ...);{"\n"}
        {"    "}&#125;);{"\n"}
        {"  "}&#125; <span className="code-kw">finally</span> &#123; session.endSession(); &#125;{"\n"}
        &#125;
      </>
    )
  },
  "gamezone": {
    filename: "engine.js",
    code: (
      <>
        <span className="code-kw">class</span> <span className="code-fn">ArcadeEngine</span> &#123;{"\n"}
        {"  "}<span className="code-fn">constructor</span>(canvas) &#123;{"\n"}
        {"    "}<span className="code-kw">this</span>.ctx = canvas.getContext(<span className="code-str">"2d"</span>);{"\n"}
        {"    "}<span className="code-kw">this</span>.entities = [];{"\n"}
        {"  "}&#125;{"\n"}
        {"  "}<span className="code-fn">loop</span>(timestamp) &#123;{"\n"}
        {"    "}<span className="code-kw">this</span>.update();{"\n"}
        {"    "}<span className="code-kw">this</span>.render();{"\n"}
        {"    "}requestAnimationFrame((t) =&gt; <span className="code-kw">this</span>.loop(t));{"\n"}
        {"  "}&#125;{"\n"}
        &#125;
      </>
    )
  }
};

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <Fade bottom>
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-desc">
              Architecting scalable backend systems, serverless automation, and real-time distributed applications.
            </p>
          </div>
        </Fade>

        <div className="projects-list">
          {projectsData.map((project, index) => {
            const isReverse = index % 2 === 1;
            const snippet = projectSnippets[project.id] || projectSnippets["attendance-notifier"];

            return (
              <Fade bottom key={project.id}>
                <div className={`project-row ${isReverse ? "reverse" : ""}`}>
                  {/* Code Mockup Column */}
                  <div className="project-code-col">
                    <div className="code-mockup-window">
                      <div className="code-window-header">
                        <div className="code-window-dots">
                          <span className="code-dot red"></span>
                          <span className="code-dot yellow"></span>
                          <span className="code-dot green"></span>
                        </div>
                        <span className="code-window-filename">{snippet.filename}</span>
                      </div>
                      <div className="code-window-body">{snippet.code}</div>
                    </div>
                  </div>

                  {/* Project Info Column */}
                  <div className="project-info-col">
                    <div className="project-number-badge">
                      <span className="project-number">0{index + 1}</span>
                      <span className="project-number-line"></span>
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

                    <div className="project-links-row">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-action-link"
                        >
                          <FaGithub />
                          <span>View Source</span>
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-action-link"
                        >
                          <FaExternalLinkAlt />
                          <span>Live Demo</span>
                        </a>
                      )}
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
