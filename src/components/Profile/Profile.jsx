import toast from "react-hot-toast";
import Spinner from "../../ui/Spinner";
import { useUserInfo } from "../Users/UserInfoContextProvider";
import "./Profile.css";
import ProfileReducer from "./ProfileReducer";
import { useForm } from "react-hook-form";

export default function Profile() {
  const [{ ChangeEmail, ChangeInsta, ChangePhone, ChangeTel }, dispatch] =
    ProfileReducer();
  const { userInfo, isLoading, error, UpdateUserInfo, isUpdating } =
    useUserInfo();

  const firstUser = userInfo?.[0] || {};

  const { id, fullName, phoneNumber, email, instagram, telegram } = firstUser;
  const { register, handleSubmit, trigger } = useForm();
  const userId = firstUser?.id;

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    toast.error(error);
  }
  function onSubmit(data) {
    UpdateUserInfo(data, userId);
  }

  return (
    <div className="profile-container">
      <div className="profile">
        <header className="profile-name">
          <h1>{fullName}</h1>
        </header>

        <form className="profile-info-list">
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
                  {...register("phoneNumber")}
                  type="number"
                  className="item-value"
                  placeholder={phoneNumber}
                  disabled={isUpdating}
                  onBlur={async () => {
                    const isValid = await trigger("phoneNumber");
                    if (isValid) {
                      handleSubmit((data) => onSubmit(data, id))();

                      dispatch({ type: "StopChange" });
                    }
                  }}
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
                <input
                  type="email"
                  className="item-value"
                  placeholder={email}
                  {...register("email")}
                  disabled={isUpdating}
                  onBlur={async () => {
                    const isValid = await trigger("email");
                    if (isValid) {
                      handleSubmit((data) => onSubmit(data, id))();
                    }
                  }}
                />
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
                  disabled={isUpdating}
                  className="item-value"
                  placeholder={instagram}
                  {...register("instagram")}
                  onBlur={async () => {
                    const isValid = await trigger("email");
                    if (isValid) {
                      handleSubmit((data) => onSubmit(data, id))();
                      dispatch({ type: "ChangeInsta" });
                    }
                  }}
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
                  disabled={isUpdating}
                  type="text"
                  onBlur={async () => {
                    const isValid = await trigger("email");
                    if (isValid) {
                      handleSubmit((data) => onSubmit(data, id))();
                      dispatch({ type: "ChangeTel" });
                    }
                  }}
                  className="item-value"
                  placeholder={telegram}
                  {...register("telegram")}
                />
              )}
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}
