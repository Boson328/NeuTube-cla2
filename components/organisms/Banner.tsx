import React from "react";

import type { Item } from "@/utils/types";

import {
  Home,
  HomeOutlined,
  Edit,
  EditOutlined,
  Favorite,
  FavoriteBorder
} from "@mui/icons-material";
import { Box } from "@mui/material";

import BannerButtons from "../molecules/BannerButtons";

const iconSx = {
  height: "30px",
  width: "30px"
};

const items: Item[] = [
  {
    fill: <Home sx={iconSx} />,
    href: "/",
    outline: <HomeOutlined sx={iconSx} />,
    title: "ホーム"
  },
  {
    fill: <Edit sx={iconSx} />,
    href: "/edit",
    outline: <EditOutlined sx={iconSx} />,
    title: "制作"
  },
  {
    fill: <Favorite sx={iconSx} />,
    href: "/favorite",
    outline: <FavoriteBorder sx={iconSx} />,
    title: "お気に入り"
  }
];
export default function Banner() {
  return (
    <Box
      sx={{
        display: { lg: "flex", xs: "none" },
        flexDirection: "column",
        height: "75%",
        left: "0px",
        marginTop: "10px",
        position: "absolute",
        width: "140px"
      }}
    >
      <BannerButtons items={items} />
    </Box>
  );
}
