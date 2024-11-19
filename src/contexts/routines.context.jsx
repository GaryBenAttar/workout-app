import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export const RoutinesContext = createContext({
  routines: [],
  setRoutines: () => {},
});

const getInitalRoutines = () => {
  const routinesStored = localStorage.getItem("routines");
  return routinesStored ? JSON.parse(routinesStored) : [];
};

export const RoutinesProvider = () => {
  const [routines, setRoutines] = useState(getInitalRoutines);

  useEffect(() => {
    localStorage.setItem("routines", JSON.stringify(routines));
  }, [routines]);

  const value = {
    routines,
    setRoutines,
  };

  return (
    <RoutinesContext.Provider value={value}>
      <Outlet />
    </RoutinesContext.Provider>
  );
};
