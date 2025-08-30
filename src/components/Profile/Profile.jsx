import toast from "react-hot-toast";
import Spinner from "../../ui/Spinner";
import { useUserInfo } from "../Users/UserInfoContextProvider";
import "./Profile.css";
import ProfileReducer from "./ProfileReducer";

export default function Profile() {
  const [{ ChangeEmail, ChangeInsta, ChangePhone, ChangeTel }, dispatch] =
    ProfileReducer();
  const { userInfo, isLoading, error } = useUserInfo();

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    toast.error(error);
  }
  const firstUser = userInfo?.[0] || {};

  const { fullName, phoneNumber, email, instagram, telegram } = firstUser;

  return (
    <div className="profile-container">
      <div className="profile">
        <header className="profile-name">
          <h1>{fullName}</h1>
        </header>

        <form action="" className="profile-info-list">
          <ul className="profile-info-list">
            <li className="profile-info-item">
              <label className="item-title">Phone </label>
              {!ChangePhone && (
                <span className="item-value">{phoneNumber}</span>
              )}
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
                  placeholder={phoneNumber}
                />
              )}
            </li>
            <li className="profile-info-item">
              <label className="item-title">Email</label>
              {!ChangeEmail && <span className="item-value">{email}</span>}
              {!ChangeEmail && (
                <button
                  className="change-value-button"
                  onClick={() => dispatch({ type: "ChangeEmail" })}
                >
                  Change
                </button>
              )}
              {ChangeEmail && (
                <input type="text" className="item-value" placeholder={email} />
              )}
            </li>
            <li className="profile-info-item">
              <label className="item-title">Instagram id</label>
              {!ChangeInsta && <span className="item-value">{instagram}</span>}
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
                  placeholder={instagram}
                />
              )}
            </li>
            <li className="profile-info-item">
              <label className="item-title">Telegram id</label>
              {!ChangeTel && <span className="item-value">{telegram}</span>}
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
                  placeholder={telegram}
                />
              )}
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}
