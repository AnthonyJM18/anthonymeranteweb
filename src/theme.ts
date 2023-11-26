import { useMediaQuery } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { createBreakpoints } from "@mui/system";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxs: true;
    xs: true;
    sm: true;
    mdsm: true;
    md: true;
    lg: true;
    xl: true;
  }
}

let theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0,
      xs: 400,
      sm: 600,
      mdsm: 750,
      md: 890,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#007eb9",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ffee58",
    },
    info: {
      main: "#9c27b0",
    },
  },
  components: {
    MuiMenu: {
      styleOverrides: {
        list: {
          padding: "2px",
          backgroundColor: "#ffee58",
        },
        paper: {
          backgroundColor: "#fff",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          marginTop: "2px",
          backgroundColor: "#007eb9",
          ":first-child": {
            marginTop: 0,
          },
          ":hover": {
            backgroundColor: "rgb(0, 88, 129)",
          },
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        img: {
          objectFit: "contain",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);
theme.typography.h1 = {
  fontSize: "2.5rem",
  [theme.breakpoints.up("xxs")]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.up("xs")]: {
    fontSize: "2.7129rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "3.7129rem",
  },
  [theme.breakpoints.up("mdsm")]: {
    fontSize: "3.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "4.3556rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "4.3556rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "4.3556rem",
  },
};


export default theme;
