import { useQuery } from "@tanstack/react-query";
import { getHouses } from "../../services/apiHouses";
import StyledHousesList from "./StyledHousesList";

export default function Houses() {
  const {
    data: houses,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["Houses"],
    queryFn: getHouses,
  });

  return (
    <>
      <StyledHousesList Houses={houses} isLoading={isLoading} error={error} />
    </>
  );
}






