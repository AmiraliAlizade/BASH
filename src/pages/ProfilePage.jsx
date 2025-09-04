import { Link } from "react-router";

import "../components/Profile/ProfilePage.css";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

export default function ProfilePage() {
  return (
    <div>
      <ul className="profile-page-list">
        <li className="profile-page-item">
          <Link
            to="/editProfile"
            className="profile-page-link
          "
          >
            Edit your profile
          </Link>
          <FaRegEdit />
        </li>
        <li className="profile-page-item">
          <Link
            to="/editAD"
            className="profile-page-link
          "
          >
            Edit your AD
          </Link>
          <FaRegEdit />
        </li>
        <li className="profile-page-item">
          <span to="/editAD" className="profile-page-link-delete          ">
            Delete your AD
          </span>
          <FaRegTrashAlt className="profile-page-link-delete" />
        </li>
      </ul>
    </div>
  );
}
