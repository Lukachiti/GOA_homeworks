import { useState } from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <h1 className="navbar-h1">PC MALL</h1>
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
