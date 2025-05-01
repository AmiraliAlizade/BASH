import HouseReview from "../components/houseReview/houseReview";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";

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
