import HouseContextProvider from "../houses/HouseContext";
import StyledHousesList from "./StyledHousesList";

export default function Houses() {
  return (
    <HouseContextProvider>
      <StyledHousesList />
    </HouseContextProvider>
  );
}
