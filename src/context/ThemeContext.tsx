import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { window } from "browser-monads-ts";
import React from "react";

import { dark, light } from "../styles/theme";

export interface ThemeProviderProps {
  children: React.ReactNode;
}

interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const ThemeContext = React.createContext({} as ThemeContextType);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const storedState = window.localStorage.getItem("dark-theme");
  const initialState = storedState === null ? true : storedState === "true";
  const [isDarkMode, setDarkMode] = React.useState(initialState);
  const toggleDarkMode = () =>
    setDarkMode((prevState) => {
      const mode = !prevState;
      window.localStorage.setItem("dark-theme", String(mode));
      return mode;
    });

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <MuiThemeProvider theme={isDarkMode ? dark : light}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => React.useContext(ThemeContext);
