import type { AppProps } from "next/app";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { Analytics } from "@vercel/analytics/react";
import NextNProgress from "nextjs-progressbar";

import Main from "@/components/templates/Main";
import { theme } from "@/utils/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Analytics />
        <CssBaseline />
        <NextNProgress color="#888" options={{ showSpinner: false }} />
        <Main>
          <Component {...pageProps} />
        </Main>
      </ThemeProvider>
    </>
  );
}
