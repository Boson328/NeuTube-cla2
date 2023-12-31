import React from "react";

import { Box } from "@mui/material";
import Link from "next/link";

import AllLogo from "@/components/atoms/AllLogo";
import BannerMenu from "@/components/atoms/BannerMenu";
import IconLogo from "@/components/atoms/IconLogo";

export default function Logo() {
  return (
    <Link href="/">
      <Box
        sx={{
          color: "primary.main",
          cursor: "pointer",
          display: "flex",
          m: "28px",
          width: { lg: "180px", xs: "68px" }
        }}
      >
        <BannerMenu />
        <IconLogo size={33} sx={{ display: { lg: "none", xs: "block" } }} />
        <AllLogo size={33} sx={{ display: { lg: "block", xs: "none" } }} />
      </Box>
    </Link>
  );
}
