import React from "react";

import { Box } from "@mui/material";

import Logo from "@/components/molecules/Logo";
import RightButtons from "@/components/molecules/RightButtons";
import Search from "@/components/molecules/Search";

export default function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100px",
        justifyContent: "space-between",
        mx: "20px"
      }}
    >
      <Logo />
      <Search />
      <RightButtons />
    </Box>
  );
}
