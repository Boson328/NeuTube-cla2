import React from "react";

import { Box, Skeleton } from "@mui/material";

export default function SkeletonVideo({ width = 300 }: { width?: number }) {
  const imageAspect = 135 / 240;
  const avatarSize = 40;
  const height = width * imageAspect + width / 2;
  return (
    <Box
      sx={{ height: height + "px", m: width / 12 + "px", width: width + "px" }}
    >
      <Skeleton
        sx={{
          bgcolor: "#ffffff08",
          borderRadius: "10px",
          height: width * imageAspect + "px",
          mb: "10px",
          width: width + "px"
        }}
        variant="rounded"
      />
      <Box sx={{ display: "flex" }}>
        <Skeleton
          sx={{
            bgcolor: "#ffffff08",
            height: avatarSize + "px",
            m: "5px",
            mt: "10px",
            width: avatarSize + "px"
          }}
          variant="circular"
        />
        <Box>
          <Skeleton
            sx={{
              bgcolor: "#ffffff08",
              fontSize: "20px",
              m: "5px",
              width: width - avatarSize - width / 15 + "px"
            }}
            variant="text"
          />
          <Skeleton
            sx={{
              bgcolor: "#ffffff08",
              fontSize: "14px",
              m: "5px",
              width: width - avatarSize - width / 15 + "px"
            }}
            variant="text"
          />
        </Box>
      </Box>
    </Box>
  );
}
