import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  palette: {
    mode: "dark",
  },
});

export default theme;
