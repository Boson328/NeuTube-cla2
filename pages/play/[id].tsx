import React from "react";

import type { VideoInfo } from "@/utils/types";
import type { GetServerSidePropsContext } from "next";

import { Box } from "@mui/material";
import { db } from "@vercel/postgres";

import Player from "@/components/organisms/Player";
import Typing from "@/components/organisms/Typing";
import Heading from "@/components/templates/Heading";
import { toVideo } from "@/utils/toVideo";

export default function Play({ info }: { info: VideoInfo }) {
  return (
    <Box sx={{ padding: "20px" }}>
      <Heading title={info.title} />
      <Player info={info} />
      <Typing />
    </Box>
  );
}

export async function getServerSideProps({
  params
}: GetServerSidePropsContext) {
  const id: string = params?.id
    ? Array.isArray(params?.id)
      ? params?.id[0]
      : params?.id
    : "";
  const client = await db.connect();
  const result = await client.sql`SELECT * FROM videos WHERE id = ${id}`;
  const row = result.rows[0];
  const info: VideoInfo = toVideo(row);

  return { props: { info } };
}
