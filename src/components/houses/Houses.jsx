import "./Houses.css";
import house from "../../data/bash-high-resolution-logo.png";
import { TbMeterSquare } from "react-icons/tb";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa";

export default function Houses() {
  return (
    <div className="houses-list-container">
      <div className="">
        <ul className="houses-list">
          <li className="houses-item">
            <div className="house-img">
              <img src={house} alt="" />
            </div>
            <div className="house-props">
              <h1 className="house-title">A big villa in the LA</h1>
              <div className="house-description">
                <p>
                  A beatiful almost new and big villa in the north of LA it has
                  3 bathroom 2 at the building and one outside
                </p>
              </div>
              <div className="house-info">
                <span className="house-price">
                  <FaDollarSign></FaDollarSign>200000
                </span>
                <span className="house-madein">
                  2023
                  <BsFillCalendarDateFill className="date-icon"></BsFillCalendarDateFill>
                </span>
                <span className="house-size">
                  995<TbMeterSquare className="meter-icon"></TbMeterSquare>
                </span>
              </div>
            </div>
          </li>
          <li className="houses-item">
            <div className="house-img">
              <img src={house} alt="" />
            </div>
            <div className="house-props">
              <h1 className="house-title">A big villa in the LA</h1>
              <div className="house-description">
                <p>
                  A beatiful almost new and big villa in the north of LA it has
                  3 bathroom 2 at the building and one outside
                </p>
              </div>
              <div className="house-info">
                <span className="house-price">
                  <FaDollarSign></FaDollarSign>200000
                </span>
                <span className="house-madein">
                  2023
                  <BsFillCalendarDateFill className="date-icon"></BsFillCalendarDateFill>
                </span>
                <span className="house-size">
                  995<TbMeterSquare className="meter-icon"></TbMeterSquare>
                </span>
              </div>
            </div>
          </li>
          <li className="houses-item">
            <div className="house-img">
              <img src={house} alt="" />
            </div>
            <div className="house-props">
              <h1 className="house-title">A big villa in the LA</h1>
              <div className="house-description">
                <p>
                  A beatiful almost new and big villa in the north of LA it has
                  3 bathroom 2 at the building and one outside
                </p>
              </div>
              <div className="house-info">
                <span className="house-price">
                  <FaDollarSign></FaDollarSign>200000
                </span>
                <span className="house-madein">
                  2023
                  <BsFillCalendarDateFill className="date-icon"></BsFillCalendarDateFill>
                </span>
                <span className="house-size">
                  995<TbMeterSquare className="meter-icon"></TbMeterSquare>
                </span>
              </div>
            </div>
          </li>
          <li className="houses-item">
            <div className="house-img">
              <img src={house} alt="" />
            </div>
            <div className="house-props">
              <h1 className="house-title">A big villa in the LA</h1>
              <div className="house-description">
                <p>
                  A beatiful almost new and big villa in the north of LA it has
                  3 bathroom 2 at the building and one outside
                </p>
              </div>
              <div className="house-info">
                <span className="house-price">
                  <FaDollarSign></FaDollarSign>200000
                </span>
                <span className="house-madein">
                  2023
                  <BsFillCalendarDateFill className="date-icon"></BsFillCalendarDateFill>
                </span>
                <span className="house-size">
                  995<TbMeterSquare className="meter-icon"></TbMeterSquare>
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
