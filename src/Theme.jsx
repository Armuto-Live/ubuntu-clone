import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";
const theme = createTheme({
  breakpoints: {
    values: {
      xxs:0,
      xs: 460,
      sm: 620,
      md: 1036,
      lg: 1376,
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