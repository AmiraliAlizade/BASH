import { createContext, useContext, useState } from "react";

const HouseContext = createContext();

function HouseContextProvider({ children }) {
  const [house, setHouse] = useState({});

  return (
    <HouseContext.Provider value={{ house, setHouse }}>
      {children}
    </HouseContext.Provider>
  );
}

export function useHouse() {
  return useContext(HouseContext);
}

export default HouseContextProvider;
