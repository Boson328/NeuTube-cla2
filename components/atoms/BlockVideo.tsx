import React from "react";

import { Avatar, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import type { VideoInfo } from "@/utils/types";

export default function BlockVideo({
  info,
  width = 300
}: {
  info: VideoInfo;
  width?: number;
}) {
  // 横 / 縦
  const imageAspect = 135 / 240;
  const avatarSize = 40;
  const height = width * imageAspect + width / 2;
  return (
    <Link
      href={info.id}
      style={{
        textDecoration: "none"
      }}
    >
      <Box
        sx={{
          height: height + "px",
          margin: width / 12 + "px",
          width: width + "px"
        }}
      >
        <Image
          alt=""
          src={info.thumbnail}
          style={{
            borderRadius: "10px",
            height: width * imageAspect + "px",
            marginBottom: "10px",
            objectFit: "cover",
            width: width + "px"
          }}
        />
        <Box sx={{ display: "flex" }}>
          <Avatar
            src={info.channel.icon}
            sx={{ height: avatarSize, m: "5px", width: avatarSize }}
          />
          <Box color="white" margin={width / 480}>
            <Box
              component="h3"
              sx={{
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: "2",
                display: "-webkit-box",
                fontSize: "15px",
                fontWeight: "600",
                margin: "0",
                maxHeight: width / 4.8 + "px",
                maxWidth: width - avatarSize - width / 15 + "px",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }}
            >
              {info.title}
            </Box>
            <Box
              component="p"
              sx={{
                color: "#aaaaaa",
                fontSize: "12px",
                fontWeight: "400",
                margin: "0",
                maxHeight: width / 10 + "px",
                maxWidth: width - avatarSize - width / 15 + "px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
              }}
            >
              {info.channel.title}
            </Box>
            <Box
              component="p"
              sx={{ color: "#aaaaaa", fontSize: "11px", margin: "0" }}
            >
              {info.played + "プレイ・" + info.kps + "/秒"}
            </Box>
          </Box>
        </Box>
      </Box>
    </Link>
  );
}
