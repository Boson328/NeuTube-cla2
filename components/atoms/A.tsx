import type { ReactNode } from "react";
import React from "react";

import type { SxProps, Theme } from "@mui/material";

import { Box } from "@mui/material";
import Link from "next/link";

export default function A({
  children,
  href,
  sx
}: {
  children?: ReactNode;
  href: string;
  sx?: SxProps<Theme>;
}) {
  return (
    <Link href={href} style={{ color: "inherit", textDecoration: "none" }}>
      <Box
        sx={{
          display: "inline",
          ...sx
        }}
      >
        {children}
      </Box>
    </Link>
  );
}
