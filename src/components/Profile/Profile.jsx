import "./Profile.css";
import ProfileReducer from "./ProfileReducer";

export default function Profile() {
  const [{ ChangeEmail, ChangeInsta, ChangePhone, ChangeTel }, dispatch] =
    ProfileReducer();

  return (
    <div className="profile-container">
      <div className="profile">
        <header className="profile-name">
          <h1>Amirali Alizadeh</h1>
        </header>

        <form action="" className="profile-info-list">
          <ul className="profile-info-list">
            <li className="profile-info-item">
              <label className="item-title">Phone </label>
              {!ChangePhone && <span className="item-value">09123456789</span>}
              {!ChangePhone && (
                <button
                  className="change-value-button"
                  onClick={() => dispatch({ type: "ChangePhone" })}
                >
                  Change
                </button>
              )}
              {ChangePhone && (
                <input
                  type="number"
                  className="item-value"
                  placeholder="09123456789"
                />
              )}
            </li>
            <li className="profile-info-item">
              <label className="item-title">Email</label>
              {!ChangeEmail && (
                <span className="item-value">Amirali.z.fela</span>
              )}
              {!ChangeEmail && (
                <button
                  className="change-value-button"
                  onClick={() => dispatch({ type: "ChangeEmail" })}
                >
                  Change
                </button>
              )}
              {ChangeEmail && (
                <input
                  type="text"
                  className="item-value"
                  placeholder="Amirali.z.fela"
                />
              )}
            </li>
            <li className="profile-info-item">
              <label className="item-title">Instagram</label>
              {!ChangeInsta && (
                <span className="item-value">Amirali.z.fela</span>
              )}
              {!ChangeInsta && (
                <button
                  className="change-value-button"
                  onClick={() => dispatch({ type: "ChangeInsta" })}
                >
                  Change
                </button>
              )}
              {ChangeInsta && (
                <input
                  type="text"
                  className="item-value"
                  placeholder="Amirali.z.fela"
                />
              )}
            </li>
            <li className="profile-info-item">
              <label className="item-title">Telegram</label>
              {!ChangeTel && <span className="item-value">Amirali.z.fela</span>}
              {!ChangeTel && (
                <button
                  className="change-value-button"
                  onClick={() => dispatch({ type: "ChangeTel" })}
                >
                  Change
                </button>
              )}
              {ChangeTel && (
                <input
                  type="text"
                  className="item-value"
                  placeholder="Amirali.z.fela"
                />
              )}
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}
