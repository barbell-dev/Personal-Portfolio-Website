import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <p className="name">Varun Dunna</p>
      <div className="navbar-links">
        <p className="navbar-field">About</p>
        <p className="navbar-field">Education</p>
        <p className="navbar-field">Projects</p>
        <p className="navbar-field">Contact</p>
      </div>
    </div>
  );
}
