import { createTheme, responsiveFontSizes, Theme } from "@mui/material";

import { createComponentOverrides } from "./overrides";

export const theme: Theme = {
  typography: {
    fontFamily: "Poppins, sans-serif",
    fontWeightLight: 200,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    body1: {
      fontSize: 15,
      lineHeight: 1.95,
    },
    h1: {
      fontSize: "4rem",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "3rem",
      fontWeight: "bold",
    },
    h3: {
      fontSize: "2rem",
      fontWeight: "bold",
      lineHeight: 1.6,
    },
    h4: {
      fontSize: "1.55rem",
      lineHeight: 1.2,
    },
  },
  palette: {
    background: {
      default: "#121212",
      darker: "#020202",
    },
  },
};

export const light: Theme = responsiveFontSizes(
  createTheme({
    ...theme,
    palette: { ...theme.palette, mode: "light" },
  })
);

export const dark: Theme = responsiveFontSizes(
  createTheme({
    ...theme,
    palette: { ...theme.palette, mode: "dark" },
  })
);

light.components = createComponentOverrides(light);
dark.components = createComponentOverrides(dark);
