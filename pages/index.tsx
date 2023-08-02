import React from "react";

import type { VideoInfo } from "@/utils/types";

import { Box } from "@mui/material";
import { db } from "@vercel/postgres";

import BlockVideo from "@/components/atoms/BlockVideo";
import Heading from "@/components/templates/Heading";
import { toVideo } from "@/utils/toVideo";

export default function Home({ videos }: { videos: VideoInfo[] }) {
  console.log(videos);
  return (
    <Box>
      <Heading />
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {videos.map((video) => (
          <BlockVideo info={video} key={video.id} />
        ))}
      </Box>
      {/* <VideosList ids={["P_CSdxSGfaA", "ZB75e7vzX0I", "U3zRlUaG-0w"]} /> */}
    </Box>
  );
}

export async function getServerSideProps() {
  const client = await db.connect();
  const result = await client.sql`SELECT * FROM videos`;
  const videos: VideoInfo[] = result.rows.map((row) => {
    return toVideo(row);
  });
  return { props: { videos } };
}
