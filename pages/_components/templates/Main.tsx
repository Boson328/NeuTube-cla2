import React from "react";

import { Box } from "@mui/material";

import Banner from "../organisms/Banner";
import Body from "../organisms/Body";
import Header from "../organisms/Header";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ bgcolor: "primary.dark", height: "100vh", width: "100vw" }}>
      <Header />
      <Box
        sx={{
          display: "flex",
          height: "calc(100% - 120px)",
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
