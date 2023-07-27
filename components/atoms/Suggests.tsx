import React from "react";

import { Box } from "@mui/material";

export default function Suggests({
  suggests,
  search,
  inputRef,
  isFocus
}: {
  inputRef: React.RefObject<HTMLInputElement>;
  isFocus: boolean;
  search: () => void;
  suggests: string[];
}) {
  return (
    <Box
      sx={{
        backgroundColor: "#222222",
        borderRadius: "10px",
        display: isFocus ? "block" : "none",
        fontSize: "16px",
        left: "0px",
        marginTop: "10px",
        padding: "10px 0px",
        position: "absolute",
        userSelect: "none",
        width: "calc(100% - 65px)",
        zIndex: "20"
      }}
    >
      {suggests.map((suggest) => (
        <Box
          key={suggest + "suggestion"}
          onMouseDown={() => {
            if (inputRef.current) inputRef.current.value = suggest;
            search();
          }}
          sx={{
            ":hover": { bgcolor: "secondary.dark" },
            bgcolor: "transparent",
            color: "white",
            cursor: "pointer",
            padding: "5px 25px",
            width: "calc(100%-30px)"
          }}
        >
          {suggest}
        </Box>
      ))}
    </Box>
  );
}
