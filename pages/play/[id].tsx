import React from "react";

import { Box } from "@mui/material";
import { db } from "@vercel/postgres";
import YouTubePlayer from "react-youtube";

import type { VideoInfo } from "@/utils/types";
import type { GetStaticPropsContext } from "next";

// eslint-disable-next-line import/order

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
  const client = await db.connect();
  const result = await client.sql`SELECT * FROM videos`;
  const videos: VideoInfo[] = result.rows.map((row) => {
    return {
      channel: {
        icon: row.channel_icon,
        id: row.channel_id,
        title: row.channel_title
      },
      id: row.id,
      kps: row.kps,
      played: row.played,
      thumbnail: row.thumbnail,
      title: row.title
    };
  });
  const paths = videos.map((video) => `/play/${video.id}`);
  return { fallback: false, paths };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const id: string = params?.id
    ? Array.isArray(params?.id)
      ? params?.id[0]
      : params?.id
    : "";
  const client = await db.connect();
  const result = await client.sql`SELECT * FROM videos WHERE id = ${id}`;
  const row = result.rows[0];
  const video: VideoInfo = {
    channel: {
      icon: row.channel_icon,
      id: row.channel_id,
      title: row.channel_title
    },
    id: row.id,
    kps: row.kps,
    played: row.played,
    thumbnail: row.thumbnail,
    title: row.title
  };

  return { props: { info: video } };
}
