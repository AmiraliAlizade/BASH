import Navbar from "../components/navbar/Navbar";
import Houses from "../components/houses/Houses";
import Sidebar from "../components/sidebar/Sidebar";
import { getHouses } from "../services/apiHouses";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
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
