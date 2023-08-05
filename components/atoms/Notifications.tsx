import React from "react";

import { NotificationsOutlined } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

export default function Notifications({ size = 50 }: { size?: number }) {
  return (
    <IconButton
      sx={{
        height: `${size}px`,
        m: "20px",
        position: "relative",
        width: `${size}px`
      }}
    >
      <NotificationsOutlined
        sx={{ height: `${(size * 3) / 5}px`, width: `${(size * 3) / 5}px` }}
      />
      <Box
        sx={{
          backgroundColor: "primary.main",
          borderRadius: `${size}px`,
          color: "secondary.main",
          fontSize: `${size / 5}px`,
          fontWeight: "700",
          height: `${(size * 15) / 50}px`,
          left: `${size / 1.8}px`,
          lineHeight: `${(size * 15) / 50}px`,
          minWidth: `${size / 8}px`,
          padding: "2px 5px",
          position: "absolute",
          textAlign: "center",
          top: "10px"
        }}
      >
        12
      </Box>
    </IconButton>
  );
}
