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
        height: "35px",
        lineHeight: "35px",
        textAlign: "center",
        width: length + "px"
      }}
    >
      {name}
    </Grid>
  );
}
