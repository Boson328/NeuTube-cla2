import React from "react";

import { NotificationsOutlined } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

export default function Notifications() {
  return (
    <IconButton
      sx={{ height: "50px", m: "20px", position: "relative", width: "50px" }}
    >
      <NotificationsOutlined sx={{ height: "30px", width: "30px" }} />
      <Box
        sx={{
          backgroundColor: "primary.main",
          borderRadius: "50px",
          color: "black",
          fontSize: "10px",
          fontWeight: "700",
          height: "13px",
          left: "28px",
          lineHeight: "14px",
          minWidth: "8px",
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
