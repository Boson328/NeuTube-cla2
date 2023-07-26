import React from "react";

import { Box } from "@mui/material";

import AccountIcon from "../atoms/AccountIcon";
import Notifications from "../atoms/Notifications";

export default function RightButtons() {
  return (
    <Box sx={{ display: "flex" }}>
      <Notifications />
      <AccountIcon src="https://lh3.googleusercontent.com/a/AAcHTtcSjnjYf6a-pKUn9hORsulXzo1_dmjyG2fLazsv=s524-c-no" />
    </Box>
  );
}
