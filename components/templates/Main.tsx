import React from "react";

import { Box } from "@mui/material";

import Banner from "@/components/organisms/Banner";
import Body from "@/components/organisms/Body";
import Header from "@/components/organisms/Header";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        bgcolor: "primary.dark",
        height: "100vh",
        width: "100vw"
      }}
    >
      <Header />
      <Box
        sx={{
          display: "flex",
          height: "calc(100% - 110px)",
          justifyContent: "center",
          width: "100%"
        }}
      >
        <Banner />
        <Body>{children}</Body>
      </Box>
    </Box>
  );
}
