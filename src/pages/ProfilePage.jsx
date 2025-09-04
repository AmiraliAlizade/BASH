import { Link, Navigate, useNavigate } from "react-router";

import "../components/Profile/ProfilePage.css";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { deleteHouse } from "../services/apiHouses";
import { useHouse } from "../components/houses/HouseContext";
import Spinner from "../ui/Spinner";
import { CiSquarePlus } from "react-icons/ci";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const { House, DeleteHouse } = useHouse();
  const firstHouse = House?.[0];
  const navigate = useNavigate();
  const { id: houseId } = firstHouse || {};
  if (!firstHouse) {
    <Navigate to="/editProfile" />;
  }
  return (
    <div>
      <ul className="profile-page-list">
        {firstHouse && (
          <>
            <Link to="/editAD" className="profile-page-link">
              <li className="profile-page-item">
                Edit your AD
                <FaRegEdit />
              </li>
            </Link>
            <li
              className="profile-page-item"
              onClick={() => {
                DeleteHouse();
              }}
            >
              <span to="/editAD" className="profile-page-link-delete">
                Delete your AD
              </span>
              <FaRegTrashAlt className="profile-page-link-delete" />
            </li>
          </>
        )}

        <Link to="/editProfile" className="profile-page-link ">
          <li className="profile-page-item">
            Edit your profile
            <FaRegEdit />
          </li>
        </Link>
        {!firstHouse && (
          <Link to="/registerAd" className="profile-page-link">
            <li className="profile-page-item">
              Register your AD
              <CiSquarePlus size={30} />
            </li>
          </Link>
        )}
      </ul>
    </div>
  );
}
