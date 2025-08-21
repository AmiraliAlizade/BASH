import React from "react";
import "./Sidebar.css";
import settings from "../../data/settings_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png";
import help from "../../data/help_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png";
import account from "../../data/account_circle_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png";
import { Link } from "react-router";
import { CiSquarePlus } from "react-icons/ci";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <ul className="sidebar-list">
          <Link to="/profile" className="sidebar-item">
            <li style={{ display: "flex", alignItems: "center", gap: "2px" }}>
              <img src={account} alt="" className="account-icon" />
              My profile
            </li>
          </Link>
          <Link to="/registerAd" className="sidebar-item">
            <li style={{ display: "flex", alignItems: "center", gap: "2px" }}>
              <CiSquarePlus size={30} />
              Register your AD
            </li>
          </Link>
          <li
            className="sidebar-item"
            style={{ display: "flex", alignItems: "center", gap: "2px" }}
          >
            <img src={settings} alt="" className="settings-icon" /> Settings
          </li>
          <li
            className="sidebar-item"
            style={{ display: "flex", alignItems: "center", gap: "2px" }}
          >
            <img src={help} alt="" className="help-icon" />
            Help
          </li>
        </ul>
      </div>
    </>
  );
}
