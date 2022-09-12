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

const consoleStyles = {
  h1: `
    color: ${theme.palette.primary.main};
    font-family: monospace;
    font-size: 60px;
    font-weight: bold;
`,
  h2: `
    color: ${theme.palette.primary.main};
    font-family: monospace;
    font-size: 40px;
    font-weight: bold;
`,
  p: `
    color: ${theme.palette.primary.main};
    font-family: monospace;
    font-size: 15px;
`,
  pb: `
    color: ${theme.palette.primary.main};
    font-family: monospace;
    font-size: 15px;
    font-weight: bold;
`,
};

console.log("%c👋 HI THERE!", consoleStyles.h1);
console.log("%cWelcome to my vCard website.\n", consoleStyles.h2);
console.log("%cYou can check my source code at Github:", consoleStyles.p);
console.log("%chttps://github.com/ricardomfmsousa/my-vcard", consoleStyles.pb);
console.log(
  "%cFeel free to open an issue if you've found the slightest bug (thanks in advance :)",
  consoleStyles.p
);
