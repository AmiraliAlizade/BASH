import Navbar from "../components/navbar/Navbar";
import Houses from "../components/houses/Houses";
import Sidebar from "../components/sidebar/Sidebar";
import { getHouses } from "../services/apiHouses";
import AuthContextProvider from "../authentication/AuthContext";
import ProtectedRoute from "../authentication/ProtectedRoute";
import UserInfoContextProvider from "../components/Users/UserInfoContextProvider";
import HouseContextProvider from "../components/houses/HouseContext";

export default function Home() {
  return (
    <UserInfoContextProvider>
      <AuthContextProvider>
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
            <AuthContextProvider>
              <HouseContextProvider>
                <Sidebar />
              </HouseContextProvider>
            </AuthContextProvider>
          </div>
        </div>
      </AuthContextProvider>
    </UserInfoContextProvider>
  );
}
