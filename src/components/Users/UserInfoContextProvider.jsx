import { useMutation, useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { getUserInfo, updateUserInfo } from "../../services/apiUsers";
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
  const { mutateAsync: updateUserInfoMutation, isPending: isUpdating } =
    useMutation({
      mutationFn: ({ updatedUser, id }) => updateUserInfo(updatedUser, id),
    });

  async function UpdateUserInfo(updatedUser, id) {
    const firstUser = userInfo?.[0];
    const userId = firstUser?.id;
    if (!userId) return;
    await updateUserInfoMutation({ updatedUser, id: userId });
  }
  return (
    <UserContext.Provider
      value={{ userInfo, isLoading, error, UpdateUserInfo, isUpdating }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserInfo() {
  return useContext(UserContext);
}

export default UserInfoContextProvider;
