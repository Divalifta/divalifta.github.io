import React from "react";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import About from "./components/About";  
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import FadeInSection from "./components/FadeInSection";
import Credits from "./components/Credits";
// ...other imports

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="content">
        <FadeInSection>
        <Intro />
        </FadeInSection>

          <About />
          <Projects />
          
        <FadeInSection>
          <Contact />
        </FadeInSection>

        <FadeInSection>
          <Credits />
        </FadeInSection>
      </div>
    </div>
  );
}

export default App;


