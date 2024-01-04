import React from "react"; // Import React from 'react'
import "./App.css";
// import Name from "./components/Name"; // Import the 'Name' component
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ToggleButton from "./components/ToggleButton";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
      {/* <Name /> */}
      <ToggleButton />
      <Navbar />
      <Home />
      <About />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
