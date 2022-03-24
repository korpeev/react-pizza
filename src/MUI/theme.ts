import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FE5F1E",
    },
    bgColor: {
      main: "#FFDF8C",
    },
    btnColorActive: {
      main: "#282828",
      contrastText: '#fff'
    },
    btnColor: {
      main: "#f9f9f9",
      contrastText: '#282828'
    },
    cardBtnColor: {
      main: '#f3f3f3',
      contrastText: '#282828'
    }

  },
});
