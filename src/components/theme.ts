import {
  alpha,
  Components,
  createTheme,
  responsiveFontSizes,
  Theme,
} from "@mui/material";

const theme = responsiveFontSizes(
  createTheme({
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
      mode: "dark",
      background: {
        default: "#121212",
        darker: "#020202",
      },
    },
  })
);

const createOverrides = (theme: Theme): Components => ({
  MuiCssBaseline: {
    styleOverrides: {
      ":root": {
        colorScheme: "dark",
        scrollBehavior: "smooth",
      },
      body: {
        background: theme.palette.background.default,
        color: theme.palette.text.primary,
        scrollbarWidth: "thin",
        scrollbarColor: `${theme.palette.background.default} ${theme.palette.action.selected}`,
        "&::-webkit-scrollbar": {
          width: "10px",
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

theme.components = createOverrides(theme);

export default theme;
