import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <div className="navbar">
        
        <div className="titles">
          
          <h1 className="main-title">RoboX</h1>
          <h3 className="sub-title">Learn, Invent, Build, Disasemble</h3>
          
        </div>
        <div className="nav-links">
          <Link to="/" id="home" className="link">
            Home
          </Link>
          <Link to="/about" className="link">
            About
          </Link>
          <Link to="/contact" className="link">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;
