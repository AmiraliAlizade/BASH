import { Route, Routes } from "react-router";
import Home from "./pages/HomePage";
import HouseReviewPage from "./pages/HouseReviewPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home replace to="home"></Home>} />
        <Route
          path="/houseReview"
          element={<HouseReviewPage></HouseReviewPage>}
        />
        <Route path="/profile" element={<ProfilePage></ProfilePage>} />
      </Routes>
    </>
  );
}

export default App;
