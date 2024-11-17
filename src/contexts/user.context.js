import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({
  username: "",
  setUsername: () => {},
  fullname: "",
  setFullname: () => {},
  followers: "",
  setFollowers: () => {},
  following: "",
  setFollowing: () => {},
  workouts: [],
  setWorkouts: () => {},
});

const initialWorkouts = [];

const getInitialWorkouts = () => {
  const workoutsStored = localStorage.getItem("workouts");
  return workoutsStored ? JSON.parse(workoutsStored) : initialWorkouts;
};

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("Vailorg");
  const [fullname, setFullname] = useState("Gary Ben Attar");
  const [followers, setFollowers] = useState("135");
  const [following, setFollowing] = useState("52");
  const [workouts, setWorkouts] = useState(getInitialWorkouts);

  useEffect(() => {
    localStorage.setItem("workouts", JSON.stringify(workouts));
  }, [workouts]);

  const value = {
    username,
    setUsername,
    fullname,
    setFullname,
    followers,
    setFollowers,
    following,
    setFollowing,
    workouts,
    setWorkouts,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
