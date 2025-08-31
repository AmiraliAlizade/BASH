import { Navigate } from "react-router";
import { UseAuth } from "./AuthContext";
import Spinner from "../ui/Spinner";

export default function ProtectedRoute({ children }) {
  const { user, isLoading } = UseAuth();

  if (isLoading) {
    return <Spinner />;
  }

  if (!user) {
    return <Navigate to="/signUp" replace />;
  }
  return children;
}
