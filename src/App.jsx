import React from 'react';
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Expertise from './Components/Expertise';
import Education from './Components/Education';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Services from './Components/Services';
import Projects from './Components/Projects';

function App() {
  return (
    <>
      <nav>
        <Header />
      </nav>
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="expertise">
          <Expertise />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="education">
          <Education/>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App;

