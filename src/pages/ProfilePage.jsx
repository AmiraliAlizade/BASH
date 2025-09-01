import { Link } from "react-router";

export default function ProfilePage() {
  return (
    <div>
      <ul className="profile-page-list">
        <li className="profile-page-item">
          <Link to="/editProfile">Edit your profile</Link>
          <Link to="/editAD">Edit your AD</Link>
        </li>
      </ul>
    </div>
  );
}
