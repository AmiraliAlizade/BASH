import { useUserInfo } from "../Users/UserInfoContextProvider";
import "./ContactModal.css";

export default function ContactModal({ isOpen, setIsOpen }) {
  const { userInfo } = useUserInfo();

  const { fullName, phoneNumber, email, instagram, telegram } = userInfo[0];


  if (isOpen)
    return (
      <div
        className="contact-modal-container"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <div className="contact-modal">
          <header className="modal-header">
            <h1 className="contact-name">{fullName}</h1>
          </header>
          <ul className="contact-info-list">
            <li className="contact-info-item">
              <span className="item-title">Email</span>
              <span className="item-value">{email}</span>
            </li>
            <li className="contact-info-item">
              <span className="item-title">Phone </span>
              <span className="item-value">{phoneNumber}</span>
            </li>
            <li className="contact-info-item">
              <span className="item-title">Instagram</span>
              <span className="item-value">{instagram}</span>
            </li>
            <li className="contact-info-item">
              <span className="item-title">Telegram</span>
              <span className="item-value">{telegram}</span>
            </li>
          </ul>
        </div>
      </div>
    );
}
