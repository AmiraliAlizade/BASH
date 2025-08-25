import React from "react";
import "./Navbar.css";
import house from "../../data/bash-high-resolution-logo.png";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router";

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
            <Link to="/login">
              <li>
                <button className="login-button">
                  <FaUser className="user-icon"></FaUser>Login
                </button>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
}
