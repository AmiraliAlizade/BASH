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
export default function HouseReview() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="house-review-wrapper">
        <div className="house-review">
          <div className="house-review-contact">
            <div className="house-review-img">
              <img src={house} alt="" />
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
                <h1 className="house-review-title">A big villa in the LA</h1>
              </div>
              <ul className="review-info-list">
                <li className="review-info-item">
                  <span className="info-item-title">Price</span>
                  <span className="info-item-value">
                    <img src={dollar} alt="" />
                    200000
                  </span>
                </li>
                <li className="review-info-item">
                  <span className="info-item-title">Made in</span>
                  <span className="info-item-value">
                    <img src={event} alt="" />
                    2023
                  </span>
                </li>
                <li className="review-info-item">
                  <span className="info-item-title">Size</span>
                  <span className="info-item-value">
                    <img src={measuring} alt="" />
                    400
                  </span>
                </li>
              </ul>

              <ul className="info-card-list">
                <li className="card-list-item">
                  <img src={bathroom} alt="" />2
                </li>
                <li className="card-list-item">
                  <img src={bedroom} alt="" />2
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
                  <p className="info-address">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley
                  </p>
                </div>
              </div>
              <div className="info-description-wrapper">
                <div className="icon-wrapper">
                  <img src={description} alt="" />
                </div>
                <p className="info-description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
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
