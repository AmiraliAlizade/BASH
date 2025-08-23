import "./Houses.css";

import { TbMeterSquare } from "react-icons/tb";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa";
import Paragraph from "../../ui/Paragraph";
import Error from "../../ui/Error";
import { Link } from "react-router";
import Spinner from "../../ui/Spinner";

function StyledHousesList({ Houses, isLoading, error }) {
  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <Error>Could not load the Houses!</Error>;
  }
  return (
    <>
      <div className="houses-list-container">
        <div className="">
          <ul className="houses-list">
            {Houses?.map((House) => (
              <Link
                to="/housereview"
                style={{
                  listStyle: "none",
                  textDecoration: "none",
                  color: "black",
                }}
                state={{ House }}
                key={House.id}
              >
                <li className="houses-item">
                  <div className="house-img">
                    <img src={House.image} alt="" />
                  </div>
                  <div className="house-props">
                    <h1 className="house-title">{House.title}</h1>
                    <div className="house-description">{House.description}</div>
                    <div className="house-info">
                      <span className="house-price">
                        <FaDollarSign></FaDollarSign>
                        {House.price}
                      </span>
                      <span className="house-madein">
                        {House.madeIn}
                        <BsFillCalendarDateFill className="date-icon"></BsFillCalendarDateFill>
                      </span>
                      <span className="house-size">
                        {House.size}
                        <TbMeterSquare className="meter-icon"></TbMeterSquare>
                      </span>
                    </div>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default StyledHousesList;
