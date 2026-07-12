import React from 'react'
import { useRef } from "react";
import "../CSS/home.css"
import Resume from "./MyResume.pdf";
function Home() {

  const cardRef = useRef(null);

  const handleMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 20;
    const rotateX = ((rect.height / 2 - y) / rect.height) * 20;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleLeave = () => {
    cardRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

const handleProjects = () => {
  const section = document.getElementById("Projects");

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const openGithub = () => {
  window.open("https://github.com/TusharJain0411", "_blank");
};

const openEmail = () => {
  window.open(
    "https://mail.google.com/mail/?view=cm&fs=1&to=jtushar3568@gmail.com",
    "_blank",
  );
};

const handleDownloadResume = () => {
  const link = document.createElement("a");
  link.href = Resume;
  link.download = "Tushar_Dungarwal_Resume.pdf";
  link.click();
};



  return (
    <>
      <div className="Home-section" id="Home">
        <div className="Intro">
          <span className="available">
            <div className="glow"></div> Available for hire
          </span>
          <span className="hello">hello, I'M</span>
          <h1 className="first-name">Tushar</h1>
          <h1 className="last-name">Dungarwal</h1>
          <div className="role">
            <div className="role-line"></div>
            <span className="role-name">Full Stack Developer</span>
          </div>
          <span className="description">
            I build responsive and scalable web applications using modern web
            technologies with a focus on clean UI and efficient backend systems.
          </span>
          <div className="btn-class">
            <div className="view-btns">
              <button className="project-view" onClick={handleProjects}>
                <i className="fa-regular fa-folder-open"></i>View Projects
              </button>
              <a href="./TusharDungarwal.pdf" className="download-resume">
                <i className="fa-solid fa-download"></i>Download Resume
              </a>
            </div>
            <div className="contact-btns">
              <button onClick={openGithub}>
                <i className="fa-brands fa-github"></i>
              </button>
              <button onClick={openEmail}>
                <i className="fa-regular fa-envelope"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="codeProfile">
          <div className="code-header">
            <div className="dot-cls">
              <div className="red"></div>
              <div className="yellow"></div>
              <div className="green"></div>
            </div>
            <span>-/tushar/portfolio.js</span>
          </div>

          <div className="code-card">
            <p className="comment">// Developer profile</p>

            <p>
              <span className="keyword">const</span>{" "}
              <span className="variable">dev</span>{" "}
              <span className="symbol">= {"{"}</span>
            </p>

            <div className="indent">
              <p>
                <span className="property">name</span>:{" "}
                <span className="string">"Tushar Jain"</span>,
              </p>

              <p>
                <span className="property">degree</span>:{" "}
                <span className="string">"B.Tech CSE"</span>,
              </p>

              <p>
                <span className="property">stack</span>:{" "}
                <span className="symbol">[</span>
              </p>

              <div className="indent">
                <p>
                  <span className="string2">"React"</span>,{" "}
                  <span className="string2">"Node"</span>,
                </p>

                <p>
                  <span className="string2">"MongoDB"</span>,{" "}
                  <span className="string2">"Express"</span>
                </p>
              </div>

              <p>
                <span className="symbol">]</span>,
              </p>

              <p>
                <span className="property">available</span>:{" "}
                <span className="boolean">true</span>,
              </p>

              <p>
                <span className="property">passion</span>:{" "}
                <span className="string">"Clean UI & Scalability"</span>
              </p>
            </div>

            <p>
              <span className="symbol">{"}"}</span>;
            </p>

            <br />

            <p>
              <span className="variable">console</span>.
              <span className="keyword">log</span>
              <span style={{ color: "white" }}> (dev);</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home
