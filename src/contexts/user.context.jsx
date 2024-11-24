import { createContext, useEffect, useState } from "react";
export const UserContext = createContext({
  user: {},
  setUser: () => null,
});

const initialUser = {};

const getInitialUserData = () => {
  const userStored = localStorage.getItem("user");
  return userStored ? JSON.parse(userStored) : initialUser;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getInitialUserData);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const value = {
    user,
    setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
