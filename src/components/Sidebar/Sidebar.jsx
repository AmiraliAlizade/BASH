import React from "react";
import "./Sidebar.css";
import settings from "../../data/settings_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png";
import help from "../../data/help_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png";
import account from "../../data/account_circle_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <img src={account} alt="" className="account-icon" />
            My profile
          </li>
          <li className="sidebar-item">
            <img src={settings} alt="" className="settings-icon" /> Settings
          </li>
          <li className="sidebar-item">
            <img src={help} alt="" className="help-icon" />
            Help
          </li>
        </ul>
      </div>
    </>
  );
}
