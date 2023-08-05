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
        height: "50px",
        justifyContent: "space-between",
        mb: "10px",
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
            fontSize: "15px",
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
          fontSize: "13px",
          fontWeight: "500",
          height: "20px",
          lineHeight: "14px",
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
          m="5px 10px"
          onClick={() => {
            console.log("click");
          }}
          outline={<FlagOutlined />}
          size={42}
        />
        <PlayerButton
          fill={<Favorite />}
          isFill={true}
          m="5px 10px"
          onClick={() => {
            console.log("click");
          }}
          outline={<FavoriteBorder />}
          size={42}
        />
      </Box>
    </Box>
  );
}
