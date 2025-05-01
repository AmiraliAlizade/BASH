import "./Houses.css";
import house from "../../data/images.jpg";
import { TbMeterSquare } from "react-icons/tb";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa";
import Paragraph from "../../ui/Paragraph";
import { Link } from "react-router";

export default function Houses() {
  return (
    <div className="houses-list-container">
      <div className="">
        <ul className="houses-list">
        <Link to="/housereview" style={{listStyle:'none',textDecoration:'none', color:'black'}}>
            <li className="houses-item">
              <div className="house-img">
                <img src={house} alt="" />
              </div>
              <div className="house-props">
                <h1 className="house-title">A big villa in the LA</h1>
                <div className="house-description">
                  <Paragraph>
                    A beatiful almost new and big villa in the north of LA it
                    has 3 bathroom 2 at the building and one outside
                  </Paragraph>
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
          </Link>
          <Link to="/housereview" style={{listStyle:'none',textDecoration:'none', color:'black'}}>
            <li className="houses-item">
              <div className="house-img">
                <img src={house} alt="" />
              </div>
              <div className="house-props">
                <h1 className="house-title">A big villa in the LA</h1>
                <div className="house-description">
                  <Paragraph>
                    A beatiful almost new and big villa in the north of LA it
                    has 3 bathroom 2 at the building and one outside
                  </Paragraph>
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
          </Link>
          <Link to="/houseReview" style={{listStyle:'none',textDecoration:'none', color:'black'}}>
            <li className="houses-item">
              <div className="house-img">
                <img src={house} alt="" />
              </div>
              <div className="house-props">
                <h1 className="house-title">A big villa in the LA</h1>
                <div className="house-description">
                  <Paragraph>
                    A beatiful almost new and big villa in the north of LA it
                    has 3 bathroom 2 at the building and one outside
                  </Paragraph>
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
          </Link>
          <Link to="housereview" style={{listStyle:'none',textDecoration:'none', color:'black'}}>
            <li className="houses-item">
              <div className="house-img">
                <img src={house} alt="" />
              </div>
              <div className="house-props">
                <h1 className="house-title">A big villa in the LA</h1>
                <div className="house-description">
                  <Paragraph>
                    A beatiful almost new and big villa in the north of LA it
                    has 3 bathroom 2 at the building and one outside
                  </Paragraph>
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
          </Link>
        </ul>
      </div>
    </div>
  );
}
