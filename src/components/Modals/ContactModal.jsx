import "./ContactModal.css";

export default function ContactModal({ isOpen, setIsOpen }) {
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
            <h1 className="contact-name">Amirali Alizadeh</h1>
          </header>
          <ul className="contact-info-list">
            <li className="contact-info-item">
              <span className="item-title">Email</span>
              <span className="item-value">Amirpsee@gmail.com</span>
            </li>
            <li className="contact-info-item">
              <span className="item-title">Phone </span>
              <span className="item-value">09123456789</span>
            </li>
            <li className="contact-info-item">
              <span className="item-title">Instagram</span>
              <span className="item-value">Amirpsee@gmail.com</span>
            </li>
            <li className="contact-info-item">
              <span className="item-title">Telegram</span>
              <span className="item-value">Amirpsee@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
    );
}
