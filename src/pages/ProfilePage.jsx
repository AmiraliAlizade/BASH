import Profile from "../components/Profile/Profile";
import UserInfoContextProvider from "../components/Users/UserInfoContextProvider";
import UserContextProvider from "../components/Users/UserInfoContextProvider";

export default function ProfilePage() {
  return (
    <div>
      <UserInfoContextProvider>
        <Profile></Profile>
      </UserInfoContextProvider>
    </div>
  );
}
