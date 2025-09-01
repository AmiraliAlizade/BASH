import { Navigate, Route, Routes } from "react-router";
import Home from "./pages/HomePage";
import HouseReviewPage from "./pages/HouseReviewPage";
import ProfilePage from "./pages/ProfilePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CreateHouseForm from "./components/houses/CreateHouseForm";
import { Toaster } from "react-hot-toast";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Profile from "./components/Profile/Profile";
import CreateUserForm from "./components/Users/createUserForm";
import ProtectedRoute from "./authentication/ProtectedRoute";
import UserInfoContextProvider from "./components/Users/UserInfoContextProvider";
import EditHouseFrom from "./components/houses/EditHouseForm";
import HouseContextProvider from "./components/houses/HouseContext";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route
            index
            element={
              <ProtectedRoute>
                <Home replace to="home" />
              </ProtectedRoute>
            }
          />
          <Route path="/houseReview" element={<HouseReviewPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route
            path="/registerAd"
            element={
              <ProtectedRoute>
                <UserInfoContextProvider>
                  <HouseContextProvider>
                    <CreateHouseForm />
                  </HouseContextProvider>
                </UserInfoContextProvider>
              </ProtectedRoute>
            }
          />
          <Route
            path="/createUser"
            element={
              <ProtectedRoute>
                <UserInfoContextProvider>
                  <CreateUserForm />
                </UserInfoContextProvider>
              </ProtectedRoute>
            }
          />
          <Route
            path="/editProfile"
            element={
              <ProtectedRoute>
                <UserInfoContextProvider>
                  <Profile></Profile>
                </UserInfoContextProvider>
              </ProtectedRoute>
            }
          />
          <Route
            path="/editAD"
            element={
              <ProtectedRoute>
                <EditHouseFrom />
              </ProtectedRoute>
            }
          />
        </Routes>
      </QueryClientProvider>
      <Toaster />
    </>
  );
}

export default App;
