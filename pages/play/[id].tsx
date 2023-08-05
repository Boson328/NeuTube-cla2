import React from "react";

import type { VideoType } from "@/utils/types";
import type { GetServerSidePropsContext } from "next";

import { Box, Grid } from "@mui/material";
import { sql } from "@vercel/postgres";

import TypeInfo from "@/components/molecules/TypeInfo";
import Keyboard from "@/components/organisms/Keyboard";
import Player from "@/components/organisms/Player";
import Typing from "@/components/organisms/Typing";
import Heading from "@/components/templates/Heading";
import { usKeyboard } from "@/utils/keyboards";
import { toVideo } from "@/utils/toVideo";
import { StrToRoman } from "@/utils/typing";

export default function Play({ info }: { info: VideoType }) {
  StrToRoman("aa");
  return (
    <Box sx={{ padding: "20px 40px" }}>
      <Heading title={info.title} />
      <Player info={info} />
      <Typing words={info.words} />
      <Grid container direction="row" justifyContent="space-between">
        <TypeInfo
          accuracy={0}
          kps={0}
          missed={0}
          ranking={0}
          title={"@boson"}
        />
        <Keyboard keyboard={usKeyboard} />
        <TypeInfo
          accuracy={0}
          kps={0}
          missed={0}
          ranking={0}
          title={"@boson"}
        />
      </Grid>
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
