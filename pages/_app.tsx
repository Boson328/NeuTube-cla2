import { CssBaseline, ThemeProvider } from "@mui/material";
import NextNProgress from "nextjs-progressbar";

// eslint-disable-next-line import/order
import type { AppProps } from "next/app";

import Main from "@/components/templates/Main";
import { theme } from "@/utils/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NextNProgress color="#888" options={{ showSpinner: false }} />
        <CssBaseline />
        <Main>
          <Component {...pageProps} />
        </Main>
      </ThemeProvider>
    </>
  );
}
