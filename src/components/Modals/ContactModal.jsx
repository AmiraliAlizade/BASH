import { useUserInfo } from "../Users/UserInfoContextProvider";
import "./ContactModal.css";

export default function ContactModal({ isOpen, setIsOpen, House }) {
  const { userInfo } = useUserInfo();

  const {
    user_fullName,
    user_phoneNumber,
    user_email,
    user_instagram,
    user_telegram,
  } = House;

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
            <h1 className="contact-name">{user_fullName}</h1>
          </header>
          <ul className="contact-info-list">
            <li className="contact-info-item">
              <span className="item-title">Email</span>
              <span className="item-value">{user_email}</span>
            </li>
            <li className="contact-info-item">
              <span className="item-title">Phone </span>
              <span className="item-value">{user_phoneNumber}</span>
            </li>
            <li className="contact-info-item">
              <span className="item-title">Instagram</span>
              <span className="item-value">{user_instagram}</span>
            </li>
            <li className="contact-info-item">
              <span className="item-title">Telegram</span>
              <span className="item-value">{user_telegram}</span>
            </li>
          </ul>
        </div>
      </div>
    );
}
