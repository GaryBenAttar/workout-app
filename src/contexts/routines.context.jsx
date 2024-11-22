import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export const RoutinesContext = createContext({
  routinesList: [],
  setRoutinesList: () => {},
});

const getInitalRoutines = () => {
  const routinesStored = localStorage.getItem("routines");
  return routinesStored ? JSON.parse(routinesStored) : [];
};

export const RoutinesProvider = () => {
  const [routinesList, setRoutinesList] = useState(getInitalRoutines);

  useEffect(() => {
    localStorage.setItem("routines", JSON.stringify(routinesList));
  }, [routinesList]);

  const value = {
    routinesList,
    setRoutinesList,
  };

  return (
    <RoutinesContext.Provider value={value}>
      <Outlet />
    </RoutinesContext.Provider>
  );
};
