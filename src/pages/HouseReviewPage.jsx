import HouseReview from "../components/HouseReview/HouseReview";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import ContactModal from "../components/Modals/ContactModal";
import AuthContextProvider from "../authentication/AuthContext";

export default function HouseReviewPage() {
  return (
    <>
      <AuthContextProvider>
        <Navbar></Navbar>
      </AuthContextProvider>
      <div style={{ display: "flex", width: "100%" }}>
        <Sidebar></Sidebar>
        <HouseReview></HouseReview>
      </div>
    </>
  );
}
