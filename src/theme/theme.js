import { createTheme } from "@mui/material/styles";
import blue from '@mui/material/colors/blue';
import { green } from "@mui/material/colors";

let theme = createTheme({
  palette: {
    primary: {
      // main: blue[500],
      main: green[500]
    },
    secondary: {
      main: "#edf2ff",
    },
  },
});

export default theme;