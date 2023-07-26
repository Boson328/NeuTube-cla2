import React from "react";

import { Avatar, IconButton } from "@mui/material";

export default function AccountIcon({ src = "" }: { src?: string }) {
  return (
    <IconButton
      sx={{
        color: "white",
        height: "50px",
        m: "20px",
        width: "50px"
      }}
    >
      <Avatar src={src} />
    </IconButton>
  );
}
