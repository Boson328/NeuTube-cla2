import React from "react";

import { Box } from "@mui/material";

import VideosList from "@/components/organisms/VideosList";
import Heading from "@/components/templates/Heading";

export default function Home({ videos }: { videos: string[] }) {
  return (
    <Box>
      <Heading />
      <VideosList ids={["P_CSdxSGfaA", "ZB75e7vzX0I", "U3zRlUaG-0w"]} />
    </Box>
  );
}
