import React from 'react'
import "../CSS/Layout.css"
import Navbar from '../components/Navbar'
import Home from "../components/Home";
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import ScrollReveal from "../components/ScrollReveal";
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Layout() {
  return (
    <>
      <div className="Layout-background">
        <Navbar />
        <ScrollReveal>
          <Home />
        </ScrollReveal>

        <ScrollReveal>
          <About />
        </ScrollReveal>

        <ScrollReveal >
          <Skills />
        </ScrollReveal>

        <ScrollReveal>
          <Projects />
        </ScrollReveal>

        <ScrollReveal>
          <Education />
        </ScrollReveal>

        <ScrollReveal>
          <Contact/>
        </ScrollReveal>
      </div>
      <Footer/>
    </>
  );
}

export default Layout
