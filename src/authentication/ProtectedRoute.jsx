import { Navigate } from "react-router";
import { UseAuth } from "./AuthContext";
import Spinner from "../ui/Spinner";

export default function ProtectedRoute({ children }) {
  const { token, authChecked } = UseAuth();
  const access_token = localStorage.getItem("access_token");

  if (!authChecked) {
    return <Spinner />;
  }

  if (!token && !access_token) {
    return <Navigate to="/signUp" replace />;
  }
  return children;
}
