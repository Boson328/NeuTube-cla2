import React from "react";

import type { VideoType } from "@/utils/types";
import type { GetServerSidePropsContext } from "next";

import { Box } from "@mui/material";
import { sql } from "@vercel/postgres";

import Keyboard from "@/components/organisms/Keyboard";
import Player from "@/components/organisms/Player";
import Typing from "@/components/organisms/Typing";
import Heading from "@/components/templates/Heading";
import { usKeyboard } from "@/utils/keyboards";
import { toVideo } from "@/utils/toVideo";

export default function Play({ info }: { info: VideoType }) {
  return (
    <Box sx={{ padding: "20px 40px" }}>
      <Heading title={info.title} />
      <Player info={info} />
      <Typing words={info.words} />
      <Keyboard keyboard={usKeyboard} />
    </Box>
  );
}

export async function getServerSideProps({
  params
}: GetServerSidePropsContext) {
  const id: string =
    (Array.isArray(params?.id) ? params?.id[0] : params?.id) || "";
  const result = await sql`SELECT * FROM videos WHERE id = ${id}`;
  const row = result.rows[0];
  const info: VideoType = toVideo(row);

  return { props: { info } };
}
