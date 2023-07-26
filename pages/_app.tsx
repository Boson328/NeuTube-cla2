import { ThemeProvider } from "@mui/material";
import NextNprogress from "nextjs-progressbar";

// eslint-disable-next-line import/order
import type { AppProps } from "next/app";

import Main from "@/components/templates/Main";
import { theme } from "@/utils/theme";

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
