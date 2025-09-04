import "./Navbar.css";
import house from "../../data/bash-high-resolution-logo.png";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import Spinner from "../../ui/Spinner";
import { UseAuth } from "../../authentication/AuthContext";

export default function Navbar() {
  const { LogOut, user } = UseAuth();
  const navigate = useNavigate();


  return (
    <header className="navbar-header">
      <div className="navbar-items">
        <div className="navbar-logo">
          <img src={house}></img>
        </div>
        <div className="navbar-search">
          <input
            type="text"
            className="search-input"
            placeholder="Search for houses"
          />
        </div>
        <div className="navbar-links">
          <ul>
            {!user?.email ? //   <li> // <Link to="/signUp">
            //     <button className="login-button">
            //       <FaUser className="user-icon"></FaUser>
            //       Sign up/Sign In
            //     </button>
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
