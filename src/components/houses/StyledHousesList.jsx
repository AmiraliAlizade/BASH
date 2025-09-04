import "./Houses.css";

import { TbMeterSquare } from "react-icons/tb";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa";
import Paragraph from "../../ui/Paragraph";
import Error from "../../ui/Error";
import { Link, useSearchParams } from "react-router";
import Spinner from "../../ui/Spinner";
import { useHouse } from "./HouseContext";

function StyledHousesList() {
  const { Houses, error, isLoading } = useHouse();
  const [searchParam] = useSearchParams();
  const search = searchParam.get("q")?.toLocaleLowerCase() || "";

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <Error>Could not load the Houses!</Error>;
  }

  const filteredHouses = Houses.filter((House) => {
    const titleMatch = House.title?.toLowerCase().includes(search);
    const addressMatch = House.address?.toLowerCase().includes(search);

    return titleMatch || addressMatch;
  });
  return (
    <>
      <div className="houses-list-container">
        <div className="">
          <ul className="houses-list">
            {filteredHouses?.map((House) => (
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
                      <span className="house-size">
                        {House.province}
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
