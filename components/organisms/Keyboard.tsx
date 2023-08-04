import React from "react";

import type { KeyboardType } from "@/utils/types";

import { Box } from "@mui/material";

import KeyLine from "../molecules/KeyLine";

export default function Keyboard({ keyboard }: { keyboard: KeyboardType }) {
  return (
    <Box>
      {keyboard.map((keyline, index) => (
        <KeyLine key={index + "keyline"} keyline={keyline} />
      ))}
    </Box>
  );
}
