import React from 'react'
import "../CSS/Skills.css"

function Skills() {
  return (
    <>
      <div className="Skill_section" id="Skills">
        <div className="skill-header">
          <span>MY ARSENAL</span>
          <h1>Skills & Technologies</h1>
          <div className="sillsActive"></div>
        </div>

        <div className="skills-cards">
          <div className="skillCard  blue">
            <div className="skillcard_header">
              <i className="fa-solid fa-display"></i>Frontend
            </div>

            <div className="skillcard_element">
              <span>
                <i className="fa-solid fa-file-code"></i>HTML5
              </span>
              <div className="meter">
                <div className="meter-range html"></div>
              </div>
            </div>

            <div className="skillcard_element">
              <span>
                <i className="fa-solid fa-palette"></i>CSS3
              </span>
              <div className="meter">
                <div className="meter-range css"></div>
              </div>
            </div>

            <div className="skillcard_element">
              <span>
                <i className="fa-brands fa-node-js"></i>JavaScript
              </span>
              <div className="meter">
                <div className="meter-range js"></div>
              </div>
            </div>

            <div className="skillcard_element">
              <span>
                <i className="fa-brands fa-react"></i>React
              </span>
              <div className="meter">
                <div className="meter-range react"></div>
              </div>
            </div>

            <div className="skillcard_element">
              <span>
                <i className="fa-solid fa-laptop-code"></i>Next.js
              </span>
              <div className="meter">
                <div className="meter-range next"></div>
              </div>
            </div>
          </div>

          <div className="skillCard  purple">
            <div className="skillcard_header">
              <i className="fa-solid fa-server"></i>Backend
            </div>

            <div className="skillcard_element">
              <span>
                <i className="fa-brands fa-node-js"></i>Node.js
              </span>
              <div className="meter">
                <div className="meter-range node"></div>
              </div>
            </div>

            <div className="skillcard_element">
              <span>
                <i className="fa-solid fa-terminal"></i>Express.js
              </span>
              <div className="meter">
                <div className="meter-range express"></div>
              </div>
            </div>
          </div>

          <div className="skillCard  Green">
            <div className="skillcard_header">
              <i className="fa-solid fa-database"></i>Database
            </div>

            <div className="skillcard_element">
              <span>
                <i className="fa-solid fa-database"></i>MongoDB
              </span>
              <div className="meter">
                <div className="meter-range md"></div>
              </div>
            </div>

            <div className="skillcard_element">
              <span>
                <i className="fa-solid fa-table"></i>MySQL
              </span>
              <div className="meter">
                <div className="meter-range sql"></div>
              </div>
            </div>
          </div>

          <div className="skillCard  orange">
            <div className="skillcard_header">
              <i className="fa-solid fa-code"></i>Programming
            </div>

            <div className="skillcard_element">
              <span>
                <i className="fa-solid fa-terminal"></i>C++
              </span>
              <div className="meter">
                <div className="meter-range cpp"></div>
              </div>
            </div>

            <div className="skillcard_element">
              <span>
                <i className="fa-brands fa-java"></i>Java
              </span>
              <div className="meter">
                <div className="meter-range java"></div>
              </div>
            </div>
          </div>

          <div className="skillCard  pink">
            <div className="skillcard_header">
              <i className="fa-solid fa-wrench"></i>Tools
            </div>

            <div className="skillcard_element">
              <span>
                <i className="fa-brands fa-git"></i>Git
              </span>
              <div className="meter">
                <div className="meter-range git"></div>
              </div>
            </div>

            <div className="skillcard_element">
              <span>
                <i className="fa-brands fa-github"></i>GitHub
              </span>
              <div className="meter">
                <div className="meter-range github"></div>
              </div>
            </div>

            <div className="skillcard_element">
              <span>
                <i className="fa-solid fa-code"></i>VS Code
              </span>
              <div className="meter">
                <div className="meter-range vs"></div>
              </div>
            </div>

            <div className="skillcard_element">
              <span>
                <i className="fa-regular fa-paper-plane"></i>Postman
              </span>
              <div className="meter">
                <div className="meter-range postman"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills
