import React from "react";

import { Box } from "@mui/material";
import Link from "next/link";

import AllLogo from "../atoms/AllLogo";
import BannerMenu from "../atoms/BannerMenu";
import IconLogo from "../atoms/IconLogo";

export default function Logo() {
  return (
    <Link href="/">
      <Box
        sx={{
          color: "primary.main",
          cursor: "pointer",
          display: "flex",
          m: "32px"
        }}
      >
        <BannerMenu />
        <IconLogo size={37} sx={{ display: { lg: "none", xs: "block" } }} />
        <AllLogo size={37} sx={{ display: { lg: "block", xs: "none" } }} />
      </Box>
    </Link>
  );
}
