import React from "react";
import "../styles/about.css";
import Fade from 'react-reveal/Fade'
export default function Aboutme() {
  return (
    <section className="about" id="about">
      <Fade bottom>
        <div className="about-tit-des">
          <span className="about-title">about me.</span>
          <span className="about-desc">
            <p>
              I have completed my Masters degree in <b>Computer Application</b>{" "}
              at <b> Kristu Jayanti College </b> I am currently interning as a backend developer at Pagesoft, 
              where I am honing my skills and gaining practical experience.
            </p>
            <p>
              My interest include Web Development and Machine Learning. In
              my free time i play a lot of video games.
              <br></br> Here are some of the technologies I have been working with:
              <ul>
                <li>JavaScript/TypeScript</li>
                <li>Node.js & Express</li>
                <li>Python</li>
                <li>Java</li>
                <li>React.js</li>
                <li>HTML & CSS</li>
              </ul>
            </p>

          </span>
        </div>


      </Fade>
    </section>
  );
}
