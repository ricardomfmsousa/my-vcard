import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontWeightLight: 200,
      fontWeightRegular: 400,
      fontWeightMedium: 700,
      h1: {
        fontSize: "4.5rem",
        fontWeight: "bold",
      },
      h2: {
        fontSize: "3rem",
        fontWeight: "bold",
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

export default theme;
