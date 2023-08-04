import React from "react";

import type { VideoType } from "@/utils/types";

import {
  Favorite,
  FavoriteBorder,
  Flag,
  FlagOutlined
} from "@mui/icons-material";
import { Avatar, Box } from "@mui/material";
import Link from "next/link";

import A from "../atoms/A";
import PlayerButton from "../atoms/PlayerButton";
import Volume from "../atoms/Volume";

export default function PlayerButtons({ info }: { info: VideoType }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        position: "relative"
      }}
    >
      <Link
        href={"/channel/" + info.channel.id}
        style={{
          display: "flex",
          justifyContent: "space-between",
          textDecoration: "none"
        }}
      >
        <Avatar
          src={info.channel.icon}
          sx={{ height: "35px", m: "10px", width: "35px" }}
        />
        <Box
          component="h3"
          sx={{
            color: "primary.main",
            fontSize: "16px",
            height: "20px",
            lineHeight: "20px"
          }}
        >
          {info.channel.title}
        </Box>
      </Link>
      <Box
        component="h4"
        sx={{
          color: "gray",
          fontSize: "15px",
          fontWeight: "500",
          height: "20px",
          lineHeight: "20px",
          ml: "50%",
          position: "absolute",
          transform: "translateX(-50%)"
        }}
      >
        制作: <A href="/user/boson">@boson</A> / {info.played} 回プレイ
      </Box>
      <Box sx={{ display: "flex", mb: "4px" }}>
        <Volume />
        <PlayerButton
          fill={<Flag />}
          onClick={() => {
            console.log("click");
          }}
          outline={<FlagOutlined />}
          size={45}
        />
        <PlayerButton
          fill={<Favorite />}
          isFill={true}
          onClick={() => {
            console.log("click");
          }}
          outline={<FavoriteBorder />}
          size={45}
        />
      </Box>
    </Box>
  );
}
