import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createContext, useContext, useState } from "react";
import { deleteHouse, getUserHouse } from "../../services/apiHouses";
import { UseAuth } from "../../authentication/AuthContext";
import Spinner from "../../ui/Spinner";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const HouseContext = createContext();

function HouseContextProvider({ children }) {
  const { user, authChecked } = UseAuth();
  const queryClient  = useQueryClient()
  const navigate = useNavigate()

  if (!user) {
    <Spinner />;
  }

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

  const firstHouse = House?.[0] || {};

  const { mutateAsync: DeleteHouse } = useMutation({
    mutationFn: () => deleteHouse(firstHouse?.id),
    onSuccess: () => {
      toast.success("The house was successfully deleted !", {
        duration: 3000,
        position: "top-center",
      });
      queryClient.invalidateQueries({
        queryKey: ["Houses"],
      });
      navigate("/");
    },
    onError(error) {
      toast.error(`The house can't be deleted !${error.message}`, {
        duration: 5000,
        position: "top-center",
      });
    },
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
    <HouseContext.Provider
      value={{ House: House || [], error, isLoading, DeleteHouse }}
    >
      {children}
    </HouseContext.Provider>
  );
}

export function useHouse() {
  return useContext(HouseContext);
}

export default HouseContextProvider;
