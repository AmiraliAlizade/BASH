import { Navigate } from "react-router";
import { UseAuth } from "./AuthContext";
import Spinner from "../ui/Spinner";

export default function ProtectedRoute({ children }) {
  const { token, authChecked } = UseAuth();

  if (!authChecked) {
    return <Spinner />;
  }

  if (!token) {
    return <Navigate to="/signUp" replace />;
  }
  return children;
}
