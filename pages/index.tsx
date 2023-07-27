import React from "react";

import { Box } from "@mui/material";

import VideosList from "@/components/organisms/VideosList";
import Heading from "@/components/templates/Heading";

export default function Home() {
  return (
    <Box>
      <Heading />
      <VideosList />
    </Box>
  );
}
