import { useState } from "react";

import "./NavBar.css";

function NavBar() {
  return (
    <>
      <div className="navbar">
        
        <div className="titles">
          <h1 className="main-title">Robotech</h1>
          <h3 className="sub-title">Learn, Invent, Build, Disasemble</h3>
          
        </div>
        <div className="nav-links">
          <a href="#home" id="home" className="link">
            Home
          </a>
          <a href="#about" className="link">
            About
          </a>
          <a href="#contact"  className="link">
            Contact
          </a>
        </div>
      </div>
    </>
  );
}

export default NavBar;
