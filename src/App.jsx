import { Route, Routes } from "react-router";
import Home from "./pages/HomePage";
import HouseReviewPage from "./pages/HouseReviewPage";

function App() {
  return (
    <>
      <Routes>
        <Route index  element={<Home replace to="home"></Home>} />
        <Route
          index
          path="/houseReview"
          element={<HouseReviewPage></HouseReviewPage>}
        />
      </Routes>
    </>
  );
}

export default App;
