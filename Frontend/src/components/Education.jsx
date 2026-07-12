import React from 'react'

import "../CSS/Education.css";

function Education() {
  return (
    <section className="education-section" id="Education">

      <div className="education-header">
        <span>MY JOURNEY</span>
        <h1>Education</h1>
        <div className="education-line"></div>
      </div>

      <div className="education-container">

    

        <div className="education-card blue">

          <div className="status completed">
            Completed
          </div>

          <div className="edu-icon">
            <i className="fa-solid fa-graduation-cap"></i>
          </div>

          <h3>B.Tech — Computer Science & Engineering</h3>

          <h4>JECRC University, Jaipur</h4>

          <div className="edu-details">
            <p>
              <i className="fa-regular fa-calendar"></i>
              2021 - 2025
            </p>

            <p>
              <i className="fa-solid fa-award"></i>
              CGPA: 7.89 / 10
            </p>
          </div>

          <p className="edu-description">
            Focused on Data Structures, Algorithms, DBMS,
            OOP, Web Development and Software Engineering.
          </p>


        </div>

        

        <div className="education-card purple">

          <div className="status completed">
            Completed
          </div>

          <div className="edu-icon">
            <i className="fa-solid fa-book-open"></i>
          </div>

          <h3>Class XII — CBSE</h3>

          <h4>Central Academy School</h4>

          <div className="edu-details">
            <p>
              <i className="fa-regular fa-calendar"></i>
              2020 - 2021
            </p>

            <p>
              <i className="fa-solid fa-award"></i>
              78.6%
            </p>
          </div>

          <p className="edu-description">
            Physics, Chemistry, Mathematics with Computer
            Science.
          </p>

         
        </div>

 

        <div className="education-card green">

          <div className="status completed">
            Completed
          </div>

          <div className="edu-icon">
            <i className="fa-solid fa-school"></i>
          </div>

          <h3>Class X — CBSE</h3>

          <h4>Central Academy School</h4>

          <div className="edu-details">
            <p>
              <i className="fa-regular fa-calendar"></i>
              2018 - 2019
            </p>

            <p>
              <i className="fa-solid fa-award"></i>
              77.8%
            </p>
          </div>

          <p className="edu-description">
            Built a strong foundation in Mathematics,
            Science and English.
          </p>

         

        </div>

      </div>

    </section>
  );
}



export default Education
