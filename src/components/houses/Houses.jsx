import "./Houses.css";
import house from "../../data/bash-high-resolution-logo.png";

export default function Houses() {
  return (
    <div className="houses-list-container">
      <ul className="houses-list">
        <li className="houses-item">
          <div className="house-img">
            <img src={house} alt="" />
          </div>
          <div className="house-props">
            <h1 className="house-title">A big villa in the LA</h1>
            <div className="house-info">
              <span className="house-price">$200000</span>
              <span className="house-madein">2023</span>
              <span className="house-size">995</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
