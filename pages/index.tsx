import React from "react";

import { Box } from "@mui/material";
import useSWR from "swr";

import BlockVideo from "@/components/atoms/BlockVideo";
import SkeletonVideo from "@/components/atoms/SkeletonVideo";
import Heading from "@/components/templates/Heading";

export default function Home() {
  async function fetcher(url: string): Promise<boolean | null> {
    const response = await fetch(url);
    return response.json();
  }
  const { data: videos } = useSWR("/api/getServer", fetcher);

  return (
    <Box>
      <Heading />
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {videos && Array.isArray(videos) ? (
          videos.map((video: any) => <BlockVideo info={video} key={video.id} />)
        ) : (
          <>
            <SkeletonVideo />
            <SkeletonVideo />
            <SkeletonVideo />
            <SkeletonVideo />
            <SkeletonVideo />
            <SkeletonVideo />
            <SkeletonVideo />
          </>
        )}
      </Box>
    </Box>
  );
}
