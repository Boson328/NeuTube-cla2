import React from "react";

import { Search } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function SearchButton({ search }: { search: () => void }) {
  return (
    <Button
      onClick={() => search()}
      startIcon={<Search />}
      sx={{
        ":hover": { backgroundColor: "#444444" },
        backgroundColor: "#333333",
        borderRadius: "0px 50px 50px 0px",
        color: "white"
      }}
    />
  );
}
