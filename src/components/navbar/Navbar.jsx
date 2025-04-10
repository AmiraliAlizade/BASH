import React from "react";
import './Navbar.css'
import house from "../../data/bash-high-resolution-logo.png";
import { FaUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="navbar-header">
      <div className="navbar-items">
        <div className="navbar-logo">
          <img src={house}></img>
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
            <li><button className="login-button"><FaUser className="user-icon"></FaUser>Login</button></li>
          </ul>
        </div>
      </div>
    </header>
  );
}
