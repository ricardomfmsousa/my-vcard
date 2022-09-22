import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import { IconButtonProps } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import * as React from "react";

import { useThemeContext } from "../../context/ThemeContext";

export const ThemeSwitcher: React.FC<IconButtonProps> = (props) => {
  const { isDarkMode, toggleDarkMode } = useThemeContext();

  return (
    <IconButton onClick={toggleDarkMode} color="inherit" {...props}>
      {isDarkMode ? <ModeNightIcon /> : <LightModeIcon />}
    </IconButton>
  );
};
