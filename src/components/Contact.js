import React from 'react';
import {  FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';
import '../styles/contact.css';
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <section id="contact" className="contact ">
      <Fade bottom>
      <span className="about-title contact-title">Contact.</span>
      <h1 className="big-text">Get in touch.</h1>
      {/* <span className="about-title">Contacts</span> */}
      <div className="social-icons">
        {/* <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer" className='facebook'>
          <FaFacebook size={40} />
        </a> */}
        <a href="mailto:vephitodasai5@example.com" className="email">
          <FaEnvelope size={40} />
        </a>
        <a href="https://x.com/vephito_dasai" target="_blank" rel="noopener noreferrer" className='twitter'>
          <FaTwitter size={40} />
        </a>
        <a href="https://www.linkedin.com/in/vephito-dasai-b33003235/" target="_blank" rel="noopener noreferrer"   className='linkedin'>
          <FaLinkedin size={40} />
        </a>
        <a href="https://www.instagram.com/vephito_/" target="_blank" rel="noopener noreferrer" className='instagram'>
          <FaInstagram size={40} />
        </a>
        <a href="https://github.com/vephito" target="_blank" rel="noopener noreferrer" className="github">
        <FaGithub size={40} />
        </a>

      </div>
      {/* <div>
          <h2>Download Resume</h2>
            <p>Click below to download my resume:</p>
            <a href="/path/to/your/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFilePdf} /> Download Resume
            </a>
        </div> */}

      </Fade>
    </section>
  );
}

export default Contact;
