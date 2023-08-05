import React from "react";

import { Grid } from "@mui/material";

export default function Key({
  name,
  length
}: {
  length: number;
  name: string;
}) {
  return (
    <Grid
      item
      sx={{
        backgroundColor: "#ffffff10",
        borderRadius: "7px",
        fontSize: "14px",
        height: "27px",
        lineHeight: "27px",
        margin: "4px",
        textAlign: "center",
        width: length + "px"
      }}
    >
      {name}
    </Grid>
  );
}
