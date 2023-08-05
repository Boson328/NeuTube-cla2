import React, { useEffect, useRef } from "react";

import {
  VolumeDown,
  VolumeMute,
  VolumeOff,
  VolumeUp
} from "@mui/icons-material";
import { Box, IconButton, Slider } from "@mui/material";
import { useAtom } from "jotai";

import { settingsAtom } from "@/utils/atoms";

export default function Volume() {
  const [settings, setSettings] = useAtom(settingsAtom);
  const previous = useRef<number>(settings.volume);
  const volumeSx = { height: "20px", width: "20px" };

  useEffect(() => {
    if (settings.volume === 0) previous.current = 50;
    else previous.current = settings.volume;
  }, []);
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        width: "150px"
      }}
    >
      <IconButton
        onClick={() => {
          if (settings.volume === 0)
            setSettings({ ...settings, volume: previous.current });
          else setSettings({ ...settings, volume: 0 });
        }}
        sx={{ height: "35px", width: "35px" }}
      >
        {settings.volume === 0 ? (
          <VolumeOff sx={volumeSx} />
        ) : settings.volume <= 33 ? (
          <VolumeMute sx={volumeSx} />
        ) : settings.volume <= 66 ? (
          <VolumeDown sx={volumeSx} />
        ) : (
          <VolumeUp sx={volumeSx} />
        )}
      </IconButton>
      <Slider
        aria-label="Volume"
        max={100}
        onChange={(e, v) => {
          setSettings({ ...settings, volume: v as number });
        }}
        onChangeCommitted={(e, v) => {
          if (v !== 0) previous.current = v as number;
        }}
        size="small"
        sx={{ mx: "15px" }}
        value={settings.volume}
      />
    </Box>
  );
}
