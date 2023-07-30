import React from "react";

import { IconButton } from "@mui/material";

export default function PlayerButton({
  m = 10,
  size = 50,
  onClick,
  isFill = false,
  fill,
  outline
}: {
  fill: JSX.Element;
  isFill?: boolean;
  m?: number;
  onClick: () => void;
  outline: JSX.Element;
  size?: number;
}) {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        ":hover": {
          bgcolor: "#fff4"
        },
        bgcolor: "#fff2",
        color: isFill ? "#F42A42" : "primary.main",
        height: size - 3 + "px",
        m: m + "px",
        width: size - 3 + "px"
      }}
    >
      {isFill ? fill : outline}
    </IconButton>
  );
}
