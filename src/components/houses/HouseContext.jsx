import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, useState } from "react";
import { getUserHouse } from "../../services/apiHouses";
import { UseAuth } from "../../authentication/AuthContext";
import Spinner from "../../ui/Spinner";
import toast from "react-hot-toast";

const HouseContext = createContext();

function HouseContextProvider({ children }) {
  const { user, authChecked } = UseAuth();
  console.log(user);
  // if (!user) {
  //   <Spinner />;
  // }
  // console.log(user?.id);

  const {
    data: House,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["House", user?.id],
    queryFn: async () => {
      const data = await getUserHouse(user?.id);
      console.log("Fetched house inside queryFn:", data);
      return data;
    },
    enabled: authChecked,
  });
  console.log(House);
  if (!authChecked) return <Spinner />;

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    toast.error(error.message);
  }

  return (
    <HouseContext.Provider value={{ House: House || [], error, isLoading }}>
      {children}
    </HouseContext.Provider>
  );
}

export function useHouse() {
  return useContext(HouseContext);
}

export default HouseContextProvider;
