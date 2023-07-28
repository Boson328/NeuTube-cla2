import React from "react";

import { Box } from "@mui/material";

import Video from "@/components/molecules/Video";

export default function VideosList({ ids }: { ids: string[] }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
      }}
    >
      {ids.map((id) => (
        <Video id={id} key={id} />
      ))}
    </Box>
  );
}
