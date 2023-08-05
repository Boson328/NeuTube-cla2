import React from "react";

import { Box, Grid } from "@mui/material";

import TypeInfoItem from "../atoms/TypeInfoItem";

export default function TypeInfo({
  title,
  kps,
  accuracy,
  ranking,
  missed,
  size = 220
}: {
  accuracy: number;
  kps: number;
  missed: number;
  ranking: number | "圏外";
  size: number;
  title: string;
}) {
  return (
    <Box
      sx={{
        background: "#ffffff10",
        borderRadius: "18px",
        height: "170px",
        my: "5px",
        padding: `${size / 12}px`,
        width: `${size}px`
      }}
    >
      <Box
        sx={{
          fontSize: `${size / 13}px`,
          fontWeight: "bold",
          mb: "10px",
          textAlign: "center"
        }}
      >
        {title}
      </Box>
      <Grid container>
        <TypeInfoItem prop="速度" unit="打/秒" value={kps} />
        <TypeInfoItem prop="正確性" unit="%" value={accuracy} />
        <TypeInfoItem prop="順位" unit="位" value={ranking} />
        <TypeInfoItem prop="ミス数" unit="回" value={missed} />
      </Grid>
    </Box>
  );
}
