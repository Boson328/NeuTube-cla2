import React from "react";

import type { VideoInfo } from "@/utils/types";

import {
  Favorite,
  FavoriteBorder,
  Flag,
  FlagOutlined
} from "@mui/icons-material";
import { Box } from "@mui/material";

import AccountIcon from "../atoms/AccountIcon";
import PlayerButton from "../atoms/PlayerButton";

export default function PlayerButtons({ info }: { info: VideoInfo }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        position: "relative"
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <AccountIcon m={10} src={info.channel.icon} />
        <Box component="h3">{info.channel.title}</Box>
      </Box>
      <Box
        component="h4"
        sx={{
          color: "gray",
          fontWeight: "500",
          ml: "50%",
          position: "absolute",
          transform: "translateX(-50%)"
        }}
      >
        制作: @boson / {info.played} 回プレイ
      </Box>
      <Box>
        <PlayerButton
          fill={<Flag />}
          onClick={() => {
            console.log("click");
          }}
          outline={<FlagOutlined />}
        />
        <PlayerButton
          fill={<Favorite />}
          isFill={true}
          onClick={() => {
            console.log("click");
          }}
          outline={<FavoriteBorder />}
        />
      </Box>
    </Box>
  );
}
