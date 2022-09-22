import { alpha, Components, Theme } from "@mui/material";

export const createComponentOverrides = (theme: Theme): Components => ({
  MuiCssBaseline: {
    styleOverrides: {
      "*": {
        scrollbarWidth: "thin",
        scrollbarColor: `${theme.palette.background.default} ${theme.palette.action.selected}`,
        "&::-webkit-scrollbar": {
          width: "10px",
          height: "10px",
        },
        "&::-webkit-scrollbar-track": {
          background: theme.palette.background.default,
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: theme.palette.action.selected,
          borderRadius: "6px",
          border: `3px solid ${theme.palette.background.default}`,
        },
      },
      ":root": {
        colorScheme: "dark",
        scrollBehavior: "smooth",
      },
      body: {
        background: theme.palette.background.default,
        color: theme.palette.text.primary,
      },
      "::selection": { background: alpha(theme.palette.primary.main, 0.6) },
      "::-moz-selection": {
        background: alpha(theme.palette.primary.main, 0.6),
      },
      "#___gatsby": {
        position: "relative",
      },
    },
  },
});
