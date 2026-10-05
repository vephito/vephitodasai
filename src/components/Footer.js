import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <span className="footer-copy">
        Designed & Built by <span className="footer-copy-highlight">Vephito Dasai</span>
      </span>
      <span className="footer-meta">
        React · Node.js · Kubernetes
      </span>
    </footer>
  );
}
