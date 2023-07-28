import React from "react";

import { Box } from "@mui/material";

import VideosList from "@/components/organisms/VideosList";
import Heading from "@/components/templates/Heading";

export default function Home({ videos }: { videos: string[] }) {
  console.log(videos);
  return (
    <Box>
      <Heading />
      <VideosList ids={["P_CSdxSGfaA"]} />
    </Box>
  );
}
