import { Navigate } from "react-router";
import { UseAuth } from "./AuthContext";

export default function ProtectedRoute({ children }) {
  const { user } = UseAuth();

  if (!user) {
    <Navigate to="/signUp" />;
  }

  return children;
}
