import React from "react";

import {
  VolumeDown,
  VolumeMute,
  VolumeOff,
  VolumeUp
} from "@mui/icons-material";
import { Box, Slider } from "@mui/material";
import { useAtom } from "jotai";

import { settingsAtom } from "@/utils/atoms";

export default function Volume() {
  const [settings, setSettings] = useAtom(settingsAtom);
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
      {settings.volume === 0 ? (
        <VolumeOff sx={{ marginRight: "20px" }} />
      ) : settings.volume <= 33 ? (
        <VolumeMute sx={{ marginRight: "20px" }} />
      ) : settings.volume <= 66 ? (
        <VolumeDown sx={{ marginRight: "20px" }} />
      ) : (
        <VolumeUp sx={{ marginRight: "20px" }} />
      )}
      <Slider
        aria-label="Volume"
        max={100}
        onChange={(e, v) => {
          setSettings({ ...settings, volume: v as number });
        }}
        sx={{ marginRight: "20px" }}
        value={settings.volume}
      />
    </Box>
  );
}
