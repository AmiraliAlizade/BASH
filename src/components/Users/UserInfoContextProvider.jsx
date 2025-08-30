import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { getUserInfo } from "../../services/apiUsers";
import { UseAuth } from "../../authentication/AuthContext";

const UserContext = createContext();

function UserInfoContextProvider({ children }) {
  const { user } = UseAuth();
  const {
    data: userInfo,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["UserInfo", user?.id],
    queryFn: () => getUserInfo(user?.id),
    enabled: !!user?.id,
  });
  return (
    <UserContext.Provider value={{ userInfo, isLoading, error }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserInfo() {
  return useContext(UserContext);
}

export default UserInfoContextProvider;
