// ToggleButton.js

import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "./ToggleButton.css";

const ToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode-body", !isDarkMode);
  };

  return (
    <button
      className={`toggle-button ${isDarkMode ? "dark-mode" : ""}`}
      onClick={toggleMode}
    >
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ToggleButton;
