import Navbar from "../components/navbar/Navbar";
import Houses from "../components/houses/Houses";
import Sidebar from "../components/sidebar/Sidebar";
import { getHouses } from "../services/apiHouses";
import AuthContextProvider from "../ui/AuthContext";

export default function Home() {
  return (
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
  );
}
