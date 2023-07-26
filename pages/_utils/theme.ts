import { createTheme } from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    values: {
      lg: 915,
      md: 768,
      sm: 600,
      xl: 1600,
      xs: 0
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: "line seed";
        src:
          url("/fonts/woff2/LINESeedJP_OTF_Eb.woff2") format("woff2"),
          url("/fonts/woff/LINESeedJP_OTF_Eb.woff") format("woff");
        font-weight: 900;
      }
      
      @font-face {
        font-family: "line seed";
        src:
          url("/fonts/woff2/LINESeedJP_OTF_Bd.woff2") format("woff2"),
          url("/fonts/woff/LINESeedJP_OTF_Bd.woff") format("woff");
        font-weight: 600;
      }
      
      @font-face {
        font-family: "line seed";
        src:
          url("/fonts/woff2/LINESeedJP_OTF_Rg.woff2") format("woff2"),
          url("/fonts/woff/LINESeedJP_OTF_Rg.woff") format("woff");
        font-weight: 300;
      }
      
      @font-face {
        font-family: "line seed";
        src:
          url("/fonts/woff2/LINESeedJP_OTF_Th.woff2") format("woff2"),
          url("/fonts/woff/LINESeedJP_OTF_Th.woff") format("woff");
        font-weight: 100;
      }
      `
    }
  },
  palette: {
    mode: "dark",
    primary: {
      dark: "#121212",
      main: "#ffffff"
    },
    secondary: {
      main: "#262626"
    }
  },
  typography: {
    fontFamily: "LINE Seed JP_OTF"
  }
});
