import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 460,
      md: 620,
      lg: 1036,
      xl: 1681,
    },
  },
});

export default theme;