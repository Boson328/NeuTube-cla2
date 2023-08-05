import type { SetStateAction, RefObject } from "react";
import React from "react";

import { CloseRounded } from "@mui/icons-material";
import { Box, IconButton, Input } from "@mui/material";

export default function SearchInput({
  erase,
  inputRef,
  isFocus,
  isExitText,
  onInput,
  search,
  setIsFocus
}: {
  erase: () => void;
  inputRef: RefObject<HTMLInputElement> | null;
  isExitText: boolean;
  isFocus: boolean;
  onInput: () => void;
  search: () => void;
  setIsFocus: (value: SetStateAction<boolean>) => void;
}) {
  return (
    <Box
      sx={{
        border: 1,
        borderColor: isFocus ? "#aaaaaa" : "#444444",
        borderRadius: "50px 0px 0px 50px",
        display: "flex",
        width: "100%"
      }}
    >
      <Input
        disableUnderline
        inputRef={inputRef}
        onBlur={() => setIsFocus(false)}
        onFocus={() => setIsFocus(true)}
        onInput={() => onInput()}
        onKeyDown={(e) => {
          if (e.key == "Enter") search();
        }}
        placeholder="検索"
        sx={{
          color: "white",
          fontSize: "14px",
          margin: "4px 4px 4px 18px",
          padding: "0px",
          width: "100%"
        }}
      />
      <IconButton
        onClick={() => erase()}
        sx={{
          ":hover": { backgroundColor: "#aaaaaa23", color: "#aaaaaa" },
          color: "gray",
          display: isExitText ? "" : "none"
        }}
      >
        <CloseRounded />
      </IconButton>
    </Box>
  );
}
