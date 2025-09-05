import "./Navbar.css";
import house from "../../data/bash-high-resolution-logo.png";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import Spinner from "../../ui/Spinner";
import { UseAuth } from "../../authentication/AuthContext";
import SearchInput from "../../ui/SearchInput";

export default function Navbar() {
  const { LogOut, user } = UseAuth();

  const navigate = useNavigate();

  return (
    <header className="navbar-header">
      <div className="navbar-items">
        <div className="navbar-logo">
          <img src={house}></img>
        </div>
        <SearchInput />
        <div className="navbar-links">
          <ul>
            {!user?.email ? //     </button> //       Sign up/Sign In //       <FaUser className="user-icon"></FaUser> //     <button className="login-button"> //   <li> // <Link to="/signUp">
            //   </li>
            // </Link>
            null : (
              <li>
                <button
                  className="login-button"
                  onClick={async () => {
                    await LogOut(user?.access_token), navigate("/signIn");
                  }}
                >
                  <FaUser className="user-icon"></FaUser>
                  Log out
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}
