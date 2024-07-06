// src/components/ProgressBar.js
import React, { useEffect, useState } from 'react';
import '../styles/ProgressBar.css';

const ProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScrollPercentage(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="progress-bar" style={{ width: `${scrollPercentage}%` }}></div>
  );
};

export default ProgressBar;
