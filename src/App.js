import React from "react"; // Import React from 'react'
import "./App.css";
// import Name from "./components/Name"; // Import the 'Name' component
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ToggleButton from "./components/ToggleButton";
function App() {
  return (
    <div className="App">
      {/* <Name /> */}
      <ToggleButton />
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
