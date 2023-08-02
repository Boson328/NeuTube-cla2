import React from "react";

import {
  VolumeDown,
  VolumeMute,
  VolumeOff,
  VolumeUp
} from "@mui/icons-material";
import { Box, Slider } from "@mui/material";
import { useAtom } from "jotai";

import { volumeAtom } from "@/utils/atoms";

export default function Volume() {
  const [volume, setVolume] = useAtom(volumeAtom);
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        mb: 1,
        width: "150px"
      }}
    >
      {volume === 0 ? (
        <VolumeOff sx={{ marginRight: "20px" }} />
      ) : volume <= 33 ? (
        <VolumeMute sx={{ marginRight: "20px" }} />
      ) : volume <= 66 ? (
        <VolumeDown sx={{ marginRight: "20px" }} />
      ) : (
        <VolumeUp sx={{ marginRight: "20px" }} />
      )}
      <Slider
        aria-label="Volume"
        max={100}
        onChange={(e, v) => {
          setVolume(v as number);
        }}
        sx={{ marginRight: "20px" }}
        value={volume}
      />
    </Box>
  );
}
