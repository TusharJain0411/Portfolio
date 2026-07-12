import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";
import HireModal from "./HireModal";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);

  const handleMenulist = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

useEffect(() => {
  const sections = document.querySelectorAll("[id]");

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 3;

    let currentSection = "Home";

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;

      if (scrollPosition >= top && scrollPosition < top + height) {
        currentSection = section.id;
      }
    });

    setActive(currentSection);
  };

  window.addEventListener("scroll", handleScroll);

  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  
  return (
    <>
      <div className="Navbar">
        <div className="heading">
          <div className="Logo">
            <span>TD</span>
          </div>
          <h3 className="typing">Tushar Dungarwal</h3>
        </div>
        <div className="menu-list">
          <ul>
            <a
              href="#Home"
              className={active === "Home" ? "active" : ""}
              onClick={() => setActive("Home")}
            >
              <span> Home</span>
            </a>
            <a
              href="#About"
              className={active === "About" ? "active" : ""}
              onClick={() => setActive("About")}
            >
              <span> About</span>
            </a>
            <a
              href="#Skills"
              className={active === "Skills" ? "active" : ""}
              onClick={() => setActive("Skills")}
            >
              <span> Skills</span>
            </a>
            <a
              href="#Projects"
              className={active === "Projects" ? "active" : ""}
              onClick={() => setActive("Projects")}
            >
              <span>Projects</span>
            </a>
            <a
              href="#Education"
              className={active === "Education" ? "active" : ""}
              onClick={() => setActive("Education")}
            >
              <span>Education</span>
            </a>
            <a
              href="#Contact"
              className={active === "Contact" ? "active" : ""}
              onClick={() => setActive("Contact")}
            >
              <span>Contact</span>
            </a>
          </ul>
        </div>
        <div className="btn">
          <button className="hire-me" onClick={() => setOpenModal(true)}>
            Hire Me
          </button>
          <button
            ref={buttonRef}
            className={`menu-btn ${isOpen ? "tilt" : ""}`}
            onClick={handleMenulist}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
      <div
        ref={menuRef}
        className={`sidemenu-list ${isOpen ? "menu-open" : "menu-close"} `}
      >
        <ul>
          <a
            href="#Home"
            className={active === "Home" ? "active" : ""}
            onClick={() => {
              setActive("Home");
              setIsOpen(false);
            }}
          >
            Home
          </a>
          <a
            href="#About"
            className={active === "About" ? "active" : ""}
            onClick={() => {
              setActive("About");
              setIsOpen(false);
            }}
          >
            About
          </a>
          <a
            href="#Skills"
            className={active === "Skills" ? "active" : ""}
            onClick={() => {
              setActive("Skills");
              setIsOpen(false);
            }}
          >
            Skills
          </a>
          <a
            href="#Projects"
            className={active === "Projects" ? "active" : ""}
            onClick={() => {
              setActive("Projects");
              setIsOpen(false);
            }}
          >
            Projects
          </a>
          <a
            href="#Education"
            className={active === "Education" ? "active" : ""}
            onClick={() => {
              setActive("Education");
              setIsOpen(false);
            }}
          >
            Education
          </a>
          <a
            href="#Contact"
            className={active === "Contact" ? "active" : ""}
            onClick={() => {
              setActive("Contact");
              setIsOpen(false);
            }}
          >
            Contact
          </a>
        </ul>
      </div>

      <HireModal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
}

export default Navbar;
