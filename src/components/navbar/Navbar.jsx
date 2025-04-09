import React from "react";
import './Navbar.css'
import home from "../../data/home_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png";

export default function Navbar() {
  return (
    <header className="navbar-header">
      <div className="navbar-items">
        <div className="navbar-logo">
          <img src={home}></img>
        </div>
        <div className="navbar-search">
          <input
            type="text"
            className="search-input"
            placeholder="Search for houses"
          />
        </div>
        <div className="navbar-links">
          <ul>
            <li><button>Login</button></li>
          </ul>
        </div>
      </div>
    </header>
  );
}
