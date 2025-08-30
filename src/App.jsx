import { Route, Routes } from "react-router";
import Home from "./pages/HomePage";
import HouseReviewPage from "./pages/HouseReviewPage";
import ProfilePage from "./pages/ProfilePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CreateHouseForm from "./components/houses/CreateHouseForm";
import { Toaster } from "react-hot-toast";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import CreateUserForm from "./components/Users/createUserForm";
import UserContextProvider from "./components/Users/UserInfoContextProvider";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route index element={<Home replace to="home" />} />
          <Route path="/houseReview" element={<HouseReviewPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/registerAd" element={<CreateHouseForm />} />
          <Route path="/createUser" element={<CreateUserForm />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
      </QueryClientProvider>
      <Toaster />
    </>
  );
}

export default App;
