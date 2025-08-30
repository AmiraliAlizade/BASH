import house from "../../data/images.jpg";
import bathroom from "../../data/bathroom_100dp_1F1F1F_FILL0_wght600_GRAD0_opsz48.png";
import bedroom from "../../data/bedroom_parent_100dp_1F1F1F_FILL0_wght400_GRAD0_opsz48.png";
import event from "../../data/event_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png";
import location from "../../data/location_on_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png";
import dollar from "../../data/attach_money_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png";
import description from "../../data/description_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png";
import measuring from "../../data/measuring_tape_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png";

import "./HouseReview.css";

import { useState } from "react";
import ContactModal from "../Modals/ContactModal";
import { useLocation, useSearchParams } from "react-router";
import { useUserInfo } from "../Users/UserInfoContextProvider";
export default function HouseReview() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { House } = location.state || {};


  return (
    <>
      <div className="house-review-wrapper">
        <div className="house-review">
          <div className="house-review-contact">
            <div className="house-review-img">
              <img src={House.image} alt="" />
            </div>
            <div className="contact-button-wrapper">
              <button
                className="contact-button"
                onClick={() => setIsOpen(!isOpen)}
              >
                Contact
              </button>
            </div>
          </div>
          <div className="house-review-props">
            <div className="house-review-info">
              <div className="title-wrapper">
                <h1 className="house-review-title">{House.title}</h1>
              </div>
              <ul className="review-info-list">
                <li className="review-info-item">
                  <span className="info-item-title">Price</span>
                  <span className="info-item-value">
                    <img src={dollar} alt="" />
                    {House.price}
                  </span>
                </li>
                <li className="review-info-item">
                  <span className="info-item-title">Made in</span>
                  <span className="info-item-value">
                    <img src={event} alt="" />
                    {House.madeIn}
                  </span>
                </li>
                <li className="review-info-item">
                  <span className="info-item-title">Size</span>
                  <span className="info-item-value">
                    <img src={measuring} alt="" />
                    {House.size}
                  </span>
                </li>
              </ul>

              <ul className="info-card-list">
                <li className="card-list-item">
                  <img src={bathroom} alt="" />
                  {House.numBathroom}
                </li>
                <li className="card-list-item">
                  <img src={bedroom} alt="" />
                  {House.numBedroom}
                </li>
              </ul>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="info-address-wrapper">
                  <div className="icon-wrapper">
                    <img src={location} alt="" />
                  </div>
                  <p className="info-address">{House.address}</p>
                </div>
              </div>
              <div className="info-description-wrapper">
                <div className="icon-wrapper">
                  <img src={description} alt="" />
                </div>
                <p className="info-description">{House.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen ? (
        <ContactModal isOpen={isOpen} setIsOpen={setIsOpen}></ContactModal>
      ) : null}
    </>
  );
}
