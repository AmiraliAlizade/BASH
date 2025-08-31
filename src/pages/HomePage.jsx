import Navbar from "../components/navbar/Navbar";
import Houses from "../components/houses/Houses";
import Sidebar from "../components/sidebar/Sidebar";
import { getHouses } from "../services/apiHouses";
import AuthContextProvider from "../authentication/AuthContext";
import ProtectedRoute from "../authentication/ProtectedRoute";

export default function Home() {
  return (
    <AuthContextProvider>
      <ProtectedRoute>
        <div>
          <AuthContextProvider>
            <Navbar></Navbar>
          </AuthContextProvider>
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "space-between",
            }}
          >
            <Houses></Houses>
            <Sidebar></Sidebar>
          </div>
        </div>
      </ProtectedRoute>
    </AuthContextProvider>
  );
}
