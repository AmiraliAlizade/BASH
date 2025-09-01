import { Navigate } from "react-router";
import { UseAuth } from "./AuthContext";
import Spinner from "../ui/Spinner";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("access_token");

  if (!token) {
    return <Navigate to="/signUp" replace />;
  }
  return children;
}
