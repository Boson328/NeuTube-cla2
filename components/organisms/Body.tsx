import React from "react";

import { Box } from "@mui/material";

export default function Body({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        bgcolor: "secondary.main",
        borderRadius: "18px",
        height: "calc(100% - 30px)",
        marginLeft: { lg: "140px", xs: "20px" },
        marginRight: { lg: "50px", xs: "20px" },
        marginTop: "10px",
        maxWidth: "1120px",
        overflowX: "hidden",
        overflowY: "scroll",
        position: "relative",
        width: "100%"
      }}
    >
      {children}
    </Box>
  );
}
