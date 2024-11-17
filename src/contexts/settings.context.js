import { createContext, useEffect, useState } from "react";

export const SettingsContext = createContext({
  settings: {},
  setSettings: () => {},
  activeNavLink: "",
  setActiveNavLink: () => {},
});

const getInitialSettings = () => {
  const settingsStored = localStorage.getItem("settings");
  return settingsStored
    ? JSON.parse(settingsStored)
    : {
        theme: "light",
        weightUnit: "kg",
        distanceUnit: "kilometers",
        bodyMeasurementUnit: "cm",
        name: "",
        bio: "",
        private: true,
        password: "testPass",
      };
};

export const SettingsProvider = ({ children }) => {
  const [activeNavLink, setActiveNavLink] = useState("feed");
  const [settings, setSettings] = useState(getInitialSettings);

  useEffect(() => {
    localStorage.setItem("settings", JSON.stringify(settings));
  }, [settings]);

  const value = { settings, setSettings, activeNavLink, setActiveNavLink };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};
