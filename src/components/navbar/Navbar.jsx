import React from "react";
import "./Navbar.css";
import house from "../../data/bash-high-resolution-logo.png";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router";
import { UseAuth } from "../../ui/AuthContext";

export default function Navbar() {
  const { SignUp, SignIn } = UseAuth();
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
            <Link to="/signUp">
              <li>
                <button className="login-button">
                  <FaUser className="user-icon"></FaUser>
                  Sign up/Sign In
                </button>
              </li>
            </Link>

            <li>
              <button className="login-button">
                <FaUser className="user-icon"></FaUser>
                Log out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
