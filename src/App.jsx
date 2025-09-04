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
import AuthContextProvider from "./authentication/AuthContext";

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
              <AuthContextProvider>
                <ProtectedRoute>
                  <Home replace to="home" />
                </ProtectedRoute>
              </AuthContextProvider>
            }
          />
          <Route
            path="/houseReview"
            element={
              <ProtectedRoute>
                <HouseReviewPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <HouseContextProvider>
                  <ProfilePage />
                </HouseContextProvider>
              </ProtectedRoute>
            }
          />
          <Route
            path="/registerAd"
            element={
              <AuthContextProvider>
                <ProtectedRoute>
                  <UserInfoContextProvider>
                    <HouseContextProvider>
                      <CreateHouseForm />
                    </HouseContextProvider>
                  </UserInfoContextProvider>
                </ProtectedRoute>
              </AuthContextProvider>
            }
          />
          <Route
            path="/createUser"
            element={
              <AuthContextProvider>
                <ProtectedRoute>
                  <UserInfoContextProvider>
                    <CreateUserForm />
                  </UserInfoContextProvider>
                </ProtectedRoute>
              </AuthContextProvider>
            }
          />
          <Route
            path="/editProfile"
            element={
              <AuthContextProvider>
                <ProtectedRoute>
                  <UserInfoContextProvider>
                    <Profile></Profile>
                  </UserInfoContextProvider>
                </ProtectedRoute>
              </AuthContextProvider>
            }
          />
          <Route
            path="/editAD"
            element={
              <AuthContextProvider>
                <ProtectedRoute>
                  <UserInfoContextProvider>
                    <HouseContextProvider>
                      <EditHouseFrom />
                    </HouseContextProvider>
                  </UserInfoContextProvider>
                </ProtectedRoute>
              </AuthContextProvider>
            }
          />
        </Routes>
      </QueryClientProvider>
      <Toaster />
    </>
  );
}

export default App;
