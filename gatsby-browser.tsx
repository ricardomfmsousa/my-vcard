import "@fontsource/over-the-rainbow";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";

import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";

import theme from "./src/components/theme";

export const wrapPageElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {element}
    </ThemeProvider>
  );
};
