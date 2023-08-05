import React from "react";

import type { VideoType } from "@/utils/types";

import { Avatar, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function BlockVideo({
  info,
  width = 300
}: {
  info: VideoType;
  width?: number;
}) {
  // 横 / 縦
  const imageAspect = 135 / 240;
  const avatarSize = 40;
  const height = width * imageAspect + width / 2;
  return (
    <Link
      href={"/play/" + info.id}
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
          height={width * imageAspect}
          src={info.thumbnail}
          style={{
            borderRadius: "10px",
            marginBottom: "10px",
            objectFit: "cover"
          }}
          width={width}
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
                fontSize: `${width / 20}px`,
                fontWeight: "600",
                margin: "0 0 4px 0",
                maxHeight: `${width / 4.8}px`,
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: `${width - avatarSize - width / 30}px`
              }}
            >
              {info.title}
            </Box>
            <Box
              component="p"
              sx={{
                color: "#aaaaaa",
                fontSize: `${width / 40}px`,
                fontWeight: "400",
                margin: "2px 0",
                maxHeight: `${width / 10}px`,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                width: `${width - avatarSize - width / 30}px`
              }}
            >
              {info.channel.title}
            </Box>
            <Box
              component="p"
              sx={{
                color: "#aaaaaa",
                fontSize: `${width / 40}px`,
                margin: "0"
              }}
            >
              {`${info.played} プレイ・${info.kps} /秒`}
            </Box>
          </Box>
        </Box>
      </Box>
    </Link>
  );
}
