import HouseReview from "../components/HouseReview/HouseReview";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import ContactModal from "../components/Modals/ContactModal";

export default function HouseReviewPage() {
  return (
    <>
      <Navbar></Navbar>
      <div style={{display:"flex", width:"100%"}}>
        <Sidebar></Sidebar>
        <HouseReview></HouseReview>
     
      </div>
    </>
  );
}
