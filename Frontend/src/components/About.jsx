import React from 'react'
import { useRef } from "react";
import "../CSS/about.css"
function About() {

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


  return (
    <>
      <div className="About-class" id="About">
        {/* laptop */}
        <div
          className="img-section"
          ref={cardRef}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
        >
          <span className="smoke"></span>
          <div className="profile-intro">
            <span>Tushar Dungarwal</span>
            <span>Full Stack Developer</span>
            <div className="softskill">
              <p>
                <i className="fa-solid fa-code"></i> Clean Code Advocate
              </p>
              <p>
                <i className="fa-solid fa-bolt"></i>Adaptability
              </p>
              <p>
                <i className="fa-solid fa-user-group"></i>Team Player
              </p>
            </div>
          </div>
        </div>
        <div className="my-intro-section">
          <span>About Me</span>
          <span>Passionate Developer &</span>
          <span>Creative Thinker</span>
          <p>
            I'm a B.Tech Computer Science student with a deep passion for
            building digital products. I specialize in the MERN stack and love
            crafting elegant, performant web experiences that solve real-world
            problems.
          </p>
          <p>
            When I'm not coding, I'm exploring new technologies, and continuously expanding my skill set to stay ahead in
            the ever-evolving tech landscape.
          </p>
          <div className="achivements">
            <div className="ach-inner-block blue">
              <span>
                <i className="fa-solid fa-folder-open"></i> 2+
              </span>
              <span>Projects</span>
            </div>
            <div className="ach-inner-block purple">
              <span>
                <i className="fa-solid fa-layer-group"></i> 10+
              </span>
              <span>Technologies</span>
            </div>
            <div className="ach-inner-block green">
              <span>
                <i className="fa-solid fa-clock"></i> 3+
              </span>
              <span>Yrs Coding</span>
            </div>
          </div>
        </div>

        {/* tab */}

        <div className="intro_section_tab">
          <div className="tab_intro">
            <span>About Me</span>
            <span>Passionate Developer &</span>
            <span>Creative Thinker</span>
            <p>
              I'm a B.Tech Computer Science student with a deep passion for
              building digital products. I specialize in the MERN stack and love
              crafting elegant, performant web experiences that solve real-world
              problems.
            </p>
            <p>
              When I'm not coding, I'm exploring new technologies, and
              continuously expanding my skill set to stay ahead in the
              ever-evolving tech landscape.
            </p>

            <div className="achivements_tab">
              <div className="ach-inner-block_tab blue">
                <span>
                  <i className="fa-solid fa-folder-open"></i> 2+
                </span>
                <span>Projects</span>
              </div>
              <div className="ach-inner-block_tab purple">
                <span>
                  <i className="fa-solid fa-layer-group"></i> 10+
                </span>
                <span>Technologies</span>
              </div>
              <div className="ach-inner-block_tab green">
                <span>
                  <i className="fa-solid fa-clock"></i> 3+
                </span>
                <span>Yrs Coding</span>
              </div>
            </div>

            <div className="softskill_tab">
              <p>
                <i className="fa-solid fa-code"></i> Clean Code Advocate
              </p>
              <p>
                <i className="fa-solid fa-bolt"></i>Adaptability
              </p>
              <p>
                <i className="fa-solid fa-user-group"></i>Team Player
              </p>
            </div>
          </div>

          <div
            className="tab_img"
            ref={cardRef}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
          >
            <div className="profile-intro_tab">
              <span>Tushar Dungarwal</span>
              <span>Full Stack Developer</span>
            </div>
          </div>
        </div>

        {/* phone */}
        <div className="intro_section_phone">
          <div
            className="img_section_phone"
            ref={cardRef}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
          >
            <div className="profile-intro_phone">
              <span>Tushar Dungarwal</span>
              <span>Full Stack Developer</span>
              <div className="softskill_phone">
                <p>
                  <i className="fa-solid fa-code"></i> Clean Code Advocate
                </p>
                <p>
                  <i className="fa-solid fa-bolt"></i>Adaptability
                </p>
                <p>
                  <i className="fa-solid fa-user-group"></i>Team Player
                </p>
              </div>
            </div>
          </div>

          <div className="tab_intro_phone">
            <span>About Me</span>
            <span>Passionate Developer &</span>
            <span>Creative Thinker</span>
            <p>
              I'm a B.Tech Computer Science student with a deep passion for
              building digital products. I specialize in the MERN stack and love
              crafting elegant, performant web experiences that solve real-world
              problems.
            </p>
            <p>
              When I'm not coding, I'm exploring new technologies, and
              continuously expanding my skill set to stay ahead in the
              ever-evolving tech landscape.
            </p>

            <div className="achivements_phone">
              <div className="ach-inner-block_phone blue">
                <span>
                  <i className="fa-solid fa-folder-open"></i> 2+
                </span>
                <span>Projects</span>
              </div>
              <div className="ach-inner-block_phone purple">
                <span>
                  <i className="fa-solid fa-layer-group"></i> 10+
                </span>
                <span>Technologies</span>
              </div>
              <div className="ach-inner-block_phone green">
                <span>
                  <i className="fa-solid fa-clock"></i> 3+
                </span>
                <span>Yrs Coding</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About
