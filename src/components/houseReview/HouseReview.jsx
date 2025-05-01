import house from "../../data/images.jpg"
import './HouseReview.css'
export default function HouseReview() {
  return (
    <div className="house-review-wrapper">
      <div className="house-review">
        <header className="house-review-img">
          <img src={house} alt="" />
        </header>
        <div className="house-review-props">
          <div className="house-review-info">
            <div className="title-wrapper">
              <h1 className="house-review-title">A big villa in the LA</h1>
            </div>
            <ul className="review-info-list">
              <li className="review-info-item">
                <span className="info-item-title">Price</span>
                <span className="info-item-value">200000</span>
              </li>
              <li className="review-info-item">
                <span className="info-item-title">Made in</span>
                <span className="info-item-value">2023</span>
              </li>
              <li className="review-info-item">
                <span className="info-item-title">Size</span>
                <span className="info-item-value">400</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
