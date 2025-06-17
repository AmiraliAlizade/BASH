import React, { useState } from "react";

import "./Profile.css";

export default function Profile() {
  const [isChange, setIsChange] = useState(false);
  return (
    <div className="profile-container">
      <div className="profile">
        <header className="profile-name">
          <h1>Amirali Alizadeh</h1>
        </header>

        <ul className="profile-info-list">
          <li className="profile-info-item">
            <label className="item-title">Phone </label>
            {!isChange && <span className="item-value">09123456789</span>}
            {!isChange && (
              <button
                className="change-value-button"
                onClick={() => setIsChange(true)}
              >
                Change
              </button>
            )}
            {isChange && (
              <input
                type="number"
                className="item-value"
                placeholder="09123456789"
              />
            )}
          </li>
          <li className="profile-info-item">
            <label className="item-title">Email</label>
            {!isChange && <span className="item-value">Amirali.z.fela</span>}
            {!isChange && (
              <button
                className="change-value-button"
                onClick={() => setIsChange(true)}
              >
                Change
              </button>
            )}
            {isChange && (
              <input
                type="number"
                className="item-value"
                placeholder="Amirali.z.fela"
              />
            )}
          </li>
          <li className="profile-info-item">
            <label className="item-title">Instagram</label>
            {!isChange && <span className="item-value">Amirali.z.fela</span>}
            {!isChange && (
              <button
                className="change-value-button"
                onClick={() => setIsChange(true)}
              >
                Change
              </button>
            )}
            {isChange && (
              <input
                type="number"
                className="item-value"
                placeholder="Amirali.z.fela"
              />
            )}
          </li>
          <li className="profile-info-item">
            <label className="item-title">Telegram</label>
            {!isChange && <span className="item-value">Amirali.z.fela</span>}
            {!isChange && (
              <button
                className="change-value-button"
                onClick={() => setIsChange(true)}
              >
                Change
              </button>
            )}
            {isChange && (
              <input
                type="number"
                className="item-value"
                placeholder="Amirali.z.fela"
              />
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
