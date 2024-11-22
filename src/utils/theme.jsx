import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { SettingsContext } from "../contexts/settings.context";

export const lightTheme = {
  name: "light",

  color: {
    blue: "rgb(67, 140, 250)",
    lightBlue: "rgb(232, 242, 253)",
    grey: "rgb(108, 115, 127)",
    lightGrey: "rgb(243, 244, 246)",

    textMain: "black",
    bodyBackground: "#f9fafb",
    sectionBackground: "white",

    hover: "rgb(243, 244, 246)",
    input: "rgb(243, 244, 246)",
    select: "white",
  },

  borders: `0.5px solid rgb(211, 211, 211)`,
};

export const darkTheme = {
  name: "dark",

  color: {
    blue: "rgb(23, 128, 234)",
    lightBlue: "rgb(32, 59, 86)",
    grey: "rgb(41, 43, 47)",
    lightGrey: "rgb(157, 164, 174)",

    textMain: "white",
    bodyBackground: "rgb(25, 26, 28)",
    sectionBackground: "rgb(31, 32, 34)",

    hover: "rgb(41, 43, 47)",
    input: "rgb(41, 43, 47)",
    select: "rgb(41, 43, 47)",
  },

  borders: `0.5px solid rgb(45, 47, 50)`,
};

export const Theme = ({ children }) => {
  const { settings } = useContext(SettingsContext);
  const { theme } = settings;

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
};
