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
        height: "30px",
        lineHeight: "30px",
        margin: "5px",
        textAlign: "center",
        width: length + "px"
      }}
    >
      {name}
    </Grid>
  );
}
