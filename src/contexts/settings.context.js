import { createContext, useState } from "react";

export const SettingsContext = createContext({
  settings: {},
  setSettings: () => {},
});

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    theme: "light",
    weightUnit: "kg",
    distanceUnit: "kilometers",
    bodyMeasurementUnit: "cm",
    name: "",
    bio: "",
    private: true,
    password: "testPass",
  });

  const value = { settings, setSettings };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};
