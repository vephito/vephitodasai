// src/components/ProgressBar.js
import React, { useEffect, useState } from "react";
import "../styles/ProgressBar.css";

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (docHeight > 0) {
      setScrollProgress(Math.min(1, Math.max(0, scrollTop / docHeight)));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="progress-bar"
      style={{ transform: `scaleX(${scrollProgress})` }}
      aria-hidden="true"
    />
  );
};

export default ProgressBar;
