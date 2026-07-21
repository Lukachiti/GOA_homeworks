import { useState } from "react";
import "./Navbar.css";
import Image from "./../assets/Logo.webp";
function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <img
          src={Image}
          alt="Logo"
          className="navbar-logo"
        />  
          
        
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <a href="/">Hero</a>
            </li>
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="/customs">Customs</a>
            </li>

            <li>
              <a href="/cart">Cart</a>
            </li>
            <li>
              <a href="/support">Support</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
