import React from "react";

import { Box } from "@mui/material";
import YouTubePlayer from "react-youtube";

import type { VideoInfo } from "@/utils/types";

// eslint-disable-next-line import/order
import { baseUrl } from "@/utils/baseUrl";

export default function Play({ info }: { info: VideoInfo }) {
  console.log(info.id);
  return (
    <Box sx={{ padding: "20px" }}>
      <Box component="h2">{info.title}</Box>
      <YouTubePlayer
        iframeClassName="iframe"
        opts={{
          height: "300px",
          playerVars: { allowfullscreen: 0, controls: 0 },
          width: "900px"
        }}
        videoId={info.id}
      />
    </Box>
  );
}

export async function getStaticPaths() {
  const res = await fetch(baseUrl() + "/api/server");
  const videos: VideoInfo[] = await res.json();
  const paths = videos.map((repo) => `/play/${repo.id}`);
  return { fallback: false, paths };
}

// ルーティングの情報が入ったparamsを受け取る
export async function getStaticProps({ params }: { params: { id: string } }) {
  const id = params.id;
  const res = await fetch(baseUrl() + "/api/server", {
    body: JSON.stringify({ id }),
    method: "POST"
  });
  const info = await res.json();

  return { props: { info } };
}
