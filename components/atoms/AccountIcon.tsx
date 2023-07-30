import React from "react";

import { Avatar, IconButton } from "@mui/material";

export default function AccountIcon({
  src = "",
  m = 20,
  size = 50
}: {
  m?: number;
  size?: number;
  src?: string;
}) {
  return (
    <IconButton
      sx={{
        height: size + "px",
        m: m + "px",
        width: size + "px"
      }}
    >
      <Avatar src={src} sx={{ bgcolor: "primary.main" }} />
    </IconButton>
  );
}
