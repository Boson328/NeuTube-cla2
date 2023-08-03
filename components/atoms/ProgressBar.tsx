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
          MozTransitionDuration: "0.1s",
          backgroundColor: "error.main",
          borderRadius: "50px"
        },
        "::-ms-fill": {
          backgroundColor: "error.main",
          borderRadius: "50px",
          msTransitionDuration: "0.1s"
        },
        "::-webkit-progress-bar": {
          backgroundColor: "transparent"
        },
        "::-webkit-progress-value": {
          WebkitTransitionDuration: "0.1s",
          backgroundColor: "error.main",
          borderRadius: "50px"
        },
        WebkitAppearance: "none",
        borderRadius: "50px",
        bottom: "20px",
        height: "6px",
        ml: "10px",
        position: "relative",
        width: "calc(100% - 20px)"
      }}
      value={value}
    />
  );
}
