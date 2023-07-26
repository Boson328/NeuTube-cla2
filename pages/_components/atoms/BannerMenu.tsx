import React from "react";

import { Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export default function BannerMenu() {
  return (
    <IconButton
      sx={{
        display: { lg: "none", xs: "block" },
        height: "60px",
        marginLeft: "-30px",
        marginRight: "10px",
        marginTop: "-10px",
        width: "60px"
      }}
    >
      <Menu sx={{ height: "30px", width: "30px" }} />
    </IconButton>
  );
}
