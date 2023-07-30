import React, { useState, useRef, useEffect } from "react";

import { Box } from "@mui/material";
import { Word } from "higgsino";

export default function Typing() {
  const word = useRef<Word>(new Word("サンプル用です", "さんぷるようです"));
  const [displayWord, setDisplayWord] = useState<{
    example: string;
    typed: string;
    untyped: string;
  }>({ example: "", typed: "", untyped: "" });

  function keydown(event: KeyboardEvent) {
    word.current.typed(event.key);
    setDisplayWord({
      example: word.current.example,
      typed: word.current.roman.typed,
      untyped: word.current.roman.untyped
    });
  }
  useEffect(() => {
    window.addEventListener("keydown", keydown);
    return () => {
      window.removeEventListener("keydown", keydown);
    };
  }, []);
  return (
    <Box>
      <Box component="h2">{displayWord.example}</Box>
      <Box component="h4">
        <Box component="span" sx={{ color: "gray" }}>
          {displayWord.typed}
        </Box>
        <Box component="span">{displayWord.untyped}</Box>
      </Box>
    </Box>
  );
}
