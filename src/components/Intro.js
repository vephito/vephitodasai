import React from "react";
import Typist from "react-typist";
import MailIcon from "@mui/icons-material/Mail";
import "../styles/intro.css";
import Fade from "react-reveal/Fade";
import images from "../assets/images/me.jpeg" 
export default function Intro() {
  return (
    <section className="intro" id="home">
      <Typist avgTypingDelay={120}>
        <span className="intro-title">
          {"Hello, I'm "}
          <span className="intro-name">{"Vephito Dasai"}</span>
          {/* {" here."} */}
          {/* <Typist.Backspace count={5} delay={200} />
          <span className="intro-name">{"dasai "}</span>
          {"here."} */}
        </span>
      </Typist>

      <Fade bottom >
        <div className="desc-container">
        <div className="intro-desc">
          A software engineer in India. I have profound interest in
          full-stack development, Machine Learning and everything in between.
          My aim is to deepen my understanding in various areas of technology and product development.
        </div>
        

        <img src={images} alt="Profile" className="profile-picture" />
        </div>
        <a href="mailto:vephitodasai5@mail.com" className="intro-contact">
          <MailIcon></MailIcon>
          <b>{"  " + "Say hello"}</b>
        </a> 
      </Fade>

    </section>
  );
}
