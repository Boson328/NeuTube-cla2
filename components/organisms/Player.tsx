import React from "react";

import type { VideoInfo } from "@/utils/types";

import { Box } from "@mui/material";

import PlayerButtons from "../molecules/PlayerButtons";
import YouTube from "../molecules/YouTube";

export default function Player({ info }: { info: VideoInfo }) {
  return (
    <Box>
      <PlayerButtons info={info} />
      <YouTube id={info.id} words={info.words} />
    </Box>
  );
}
