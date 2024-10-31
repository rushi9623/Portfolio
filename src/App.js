import React from 'react';
import NavBar from './components/Navbar';  // Assuming NavBar is inside the 'components' folder
import Home from './sections/Home';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';


function App() {
  return (
    <div>
      {/* <AnimatedComponent/> */}
      <NavBar />
      <Home />
      <About />
      <Experience/>
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
