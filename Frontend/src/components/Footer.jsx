import React from "react";
import "../CSS/Footer.css";

import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaCircle,
  FaChevronUp,
} from "react-icons/fa";

function Footer() {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left */}

        <div className="footer-about">
          <div className="footer-logo">
            <div className="logo-circle">TD</div>

            <div>
              <h2>Tushar Dungarwal</h2>
            </div>
          </div>

          <p>
            Full Stack Developer crafting scalable web applications with clean
            UI and efficient backend systems.
          </p>

          <div className="footer-social">
            <a
              href="https://github.com/TusharJain0411"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=jtushar3568@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Quick Links */}

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#Home">Home</a>
          <a href="#About">About</a>
          <a href="#Skills">Skills</a>
          <a href="#Projects">Projects</a>
          <a href="#Education">Education</a>
          <a href="#Contact">Contact</a>
        </div>

        {/* Tech */}

        <div className="footer-tech">
          <h3>Tech Stack</h3>

          <span>React.js</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>Express.js</span>
          <span>JavaScript</span>
        </div>

        {/* Status */}

        <div className="footer-status">
          <h3>Status</h3>

          <div className="status-item">
            <FaCircle />
            <span>Open to opportunities</span>
          </div>

          <div className="status-item">
            <FaCircle />
            <span>Actively building</span>
          </div>
        </div>
      </div>

      {/* Bottom */}

      <div className="footer-bottom">
        <span>
          Designed & Developed by
          <strong> Tushar Dungarwal</strong>
        </span>

        <span>© 2026 All Rights Reserved</span>
      </div>

      <button className="scroll-top" onClick={scrollTop}>
        <FaChevronUp />
      </button>
    </footer>
  );
}

export default Footer;
