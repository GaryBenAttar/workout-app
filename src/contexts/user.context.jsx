import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({
  user: {},
  setUser: () => null,
});

const initialWorkouts = [];

const getInitialWorkouts = () => {
  const workoutsStored = localStorage.getItem("workouts");
  return workoutsStored ? JSON.parse(workoutsStored) : initialWorkouts;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "Vailorg",
    fullname: "Gary Ben Attar",
    followers: 135,
    following: 46,
    workouts: getInitialWorkouts(),
  });

  useEffect(() => {
    localStorage.setItem("workouts", JSON.stringify(user.workouts));
  }, [user]);

  const value = {
    user,
    setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
