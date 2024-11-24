import { createContext, useEffect, useState } from "react";
import BaseUserImage from "../assets/logo_panda.png";
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
    uid: "",
    username: "",
    fullname: "",
    userImage: "",
    workouts: [],
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
