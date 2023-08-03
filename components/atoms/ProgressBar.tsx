import React from "react";

import { Box } from "@mui/material";

export default function ProgressBar({
  value,
  max
}: {
  max: number;
  value: number;
}) {
  return (
    <Box
      component="progress"
      max={max}
      sx={{
        "::-moz-progress-bar": {
          MozTransitionDuration: "0.05s",
          backgroundColor: "error.main",
          borderRadius: "50px"
        },
        "::-ms-fill": {
          backgroundColor: "error.main",
          borderRadius: "50px",
          msTransitionDuration: "0.05s"
        },
        "::-webkit-progress-bar": {
          backgroundColor: "transparent"
        },
        "::-webkit-progress-value": {
          WebkitTransitionDuration: "0.05s",
          backgroundColor: "error.main",
          borderRadius: "50px"
        },
        MozAppearance: "none",
        WebkitAppearance: "none",
        backgroundColor: "transparent",
        borderRadius: "50px",
        borderWidth: "0px",
        bottom: "20px",
        height: "6px",
        ml: "10px",
        outlineWidth: "0px",
        position: "relative",
        width: "calc(100% - 20px)"
      }}
      value={value}
    />
  );
}
