import React from 'react'
import "../CSS/projects.css"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import medicare from "../Assets/medicare.png"
import ecommerce from "../Assets/ecommerce.png"

function Projects() {


const projects = [
  {
    id: 1,
    category: "DOCTOR APPOINTMENT BOOKING SYSTEM",
    title: "MediCare",
    image: medicare,
    type: "MERN Stack",
    description:
      "A full-featured healthcare platform allowing patients to book appointments, manage profiles, and track appointments with dedicated dashboards for users, doctors and admins.",

    features: [
      "Auth & Roles",
      "Doctor Dashboard",
      "Appointment Booking",
      "Image Upload",
      "Admin Panel",
      "Profile Management",
    ],

    tech: ["React", "Node.js", "Express", "MongoDB"],

    github: "https://github.com/TusharJain0411/MediCare",
    demo: "https://medi-care-ruddy-beta.vercel.app/",
    class: "Green",
  },

  {
    id: 2,
    category: "FULL-STACK E-COMMERCE PLATFORM",
    title: "Ecommmerce",

    image: ecommerce,

    type: "MERN Stack",

    description:
      "A modern full-stack e-commerce platform featuring secure authentication, product browsing, shopping cart, wishlist, order management, and an intuitive admin dashboard for seamless online shopping.",

    features: [
      "User Authentication",
      "Product Catalog",
      "Shopping Cart",
      "Wishlist",
      "Payment",
      "Order Management",
      "Admin Dashboard",
    ],

    tech: ["React", "Node.js", "Express", "MongoDB"],

    github: "https://github.com/TusharJain0411/Ecommerce",
    demo: "https://ecommerce-tawny-nine-15.vercel.app/",
    class: "purple",
  },
];

  return (
    <>
      <div className="project_section" id="Projects">
        <div className="project-header">
          <span>MY ARSENAL</span>
          <h1>Featured Projects</h1>
          <div className="projectActive"></div>
        </div>

        <div className="projects-container">
          {projects.map((project) => (
            <div className={`project-card  ${project.class}`} key={project.id}>
              {/* Left */}

              <div className={`project-image `}>
                <span className="badge">{project.type}</span>

                <img src={project.image} alt={project.title} />
              </div>

              {/* Right */}

              <div className="project-content">
                <small>{project.category}</small>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="feature-list">
                  {project.features.map((item, index) => (
                    <span key={index}>{item}</span>
                  ))}
                </div>

                <div className="stack">
                  <span className="stack-title">Stack:</span>

                  {project.tech.map((tech, index) => (
                    <span className="tech" key={index}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-buttons">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="github-btn"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="live-btn"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects
