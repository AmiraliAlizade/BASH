import { Route, Routes } from "react-router";
import Home from "./pages/HomePage";
import HouseReviewPage from "./pages/HouseReviewPage";
import ProfilePage from "./pages/ProfilePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CreateHouseForm from "./components/houses/CreateHouseForm";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route index element={<Home replace to="home" />} />
        <Route path="/houseReview" element={<HouseReviewPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/registerAd" element={<CreateHouseForm />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
