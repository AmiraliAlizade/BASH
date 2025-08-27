import { Navigate } from "react-router";


export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("access_token");

  if (!token) {
    // not signed in → go to login page
    return <Navigate to="/signUp" replace />;
  }

  // signed in → render the page
  return children;
}
