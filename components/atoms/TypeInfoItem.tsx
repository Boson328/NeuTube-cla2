import React from "react";

import { Box, Grid } from "@mui/material";

export default function TypeInfoItem({
  prop,
  value,
  unit
}: {
  prop: string;
  unit: string;
  value: string | number;
}) {
  return (
    <Grid
      container
      justifyContent="space-between"
      sx={{ fontSize: "15px", m: "3px" }}
    >
      <Grid item>{prop}</Grid>
      <Grid item>
        {value}
        <Box component="span" sx={{ fontSize: "13px", mx: "2px" }}>
          {unit}
        </Box>
      </Grid>
    </Grid>
  );
}
