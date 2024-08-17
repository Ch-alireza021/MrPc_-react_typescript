// import { createTheme } from "@mui/material/styles";
// import { createTheme } from '@mui/material';
import createTheme from "@mui/material/styles/createTheme";
import "./font.css";
// Augment the palette to include an customGray color
declare module "@mui/material/styles" {
  interface Palette {
    customGray: Palette["primary"];
    darkBlue: Palette["primary"];
    customRed: Palette["primary"];
  }

  interface PaletteOptions {
    customGray?: PaletteOptions["primary"];
    darkBlue?: PaletteOptions["primary"];
    customRed?: PaletteOptions["primary"];
  }
}

export const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: 'farsi,IranSans, Arial, sans-serif',
  },
  palette: {
    secondary: {
      main: "#03c03c",
      light: "#03c03c",
      // dark:"#007d25",
      dark: "#2f5f3e",
    },
    customGray: {
      main: "#696969",
      light: "#9DA8B7",
      dark: "#303740",
    },
    darkBlue: { main: "#2b2d42" },
    customRed: { main: "#790000" },
  },
  components: {
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "0px",
        },
      },
    },
  
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          "& ::-webkit-scrollbar": {
            width: "8px",
          },
          "& ::-webkit-scrollbar-track": {
            backgroundColor: "inherit",
          },
          "& ::-webkit-scrollbar-thumb": {
            borderRadius: "20px",
            backgroundColor: "#a0a0a0",
          },
          "& ::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#696969",
          },
        },
      },
    },

    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
});

export const red = theme.palette.customRed.main;
export const darkGreen = theme.palette.secondary.dark;
