import { createContext, useEffect, useState } from "react";

const ROUTINES_ACTION_TYPE = {
  SET_ROUTINES: "routines/SET_ROUTINES",
  SET_EXERCISES: "routines/SET_EXERCISES",
  SET_ROUTINE_TITLE: "routines/SET_ROUTINE_TITLE",
};

export const RoutinesContext = createContext({
  routines: [],
  setRoutines: () => {},
  routineTitle: "",
  setRoutineTitle: () => null,
  routineExercises: [],
  setRoutineExercises: () => null,
  exerciseSets: [],
  setExerciseSets: () => {},
  editRoutine: {},
  setEditRoutine: () => {},
  inProgress: false,
  setInProgress: () => {},
});

const getInitalRoutines = () => {
  const routinesStored = localStorage.getItem("routines");
  return routinesStored ? JSON.parse(routinesStored) : [];
};

export const RoutinesProvider = ({ children }) => {
  const [routineTitle, setRoutineTitle] = useState("");

  const [routineExercises, setRoutineExercises] = useState([]);

  const [inProgress, setInProgress] = useState(false);
  const [routines, setRoutines] = useState(getInitalRoutines);

  const [editRoutine, setEditRoutine] = useState({});

  useEffect(() => {
    localStorage.setItem("routines", JSON.stringify(routines));
  }, [routines]);

  const value = {
    routines,
    setRoutines,
    routineTitle,
    setRoutineTitle,
    routineExercises,
    setRoutineExercises,
    inProgress,
    setInProgress,
    editRoutine,
    setEditRoutine,
  };

  return (
    <RoutinesContext.Provider value={value}>
      {children}
    </RoutinesContext.Provider>
  );
};
