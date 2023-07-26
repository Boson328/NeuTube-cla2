import { ThemeProvider } from "@mui/material";
import NextNprogress from "nextjs-progressbar"; // ここ！

import Main from "./_components/templates/Main";
import { theme } from "./_utils/theme";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NextNprogress color="#ddd" />
        <Main>
          <Component {...pageProps} />
        </Main>
      </ThemeProvider>
    </>
  );
}
