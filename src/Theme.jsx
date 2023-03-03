import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 460,
      md: 620,
      lg: 1036,
      xl: 1681,
    },
    palette: {
      primary: {
        main: "#000e35",
      },
      secondary: {
        main: "#f50057",
      },
    },
  },
});

export default theme;