import React, { useState, useRef, useEffect } from "react";

import type { DisplayWordType, WordType, WordsType } from "@/utils/types";

import { Box } from "@mui/material";
import { Word } from "higgsino";
import { useAtom } from "jotai";

import { wordIdxAtom } from "@/utils/atoms";

const displayWordDefault = {
  example: "",
  typed: "",
  untyped: ""
};

export default function Typing({ words }: { words: WordsType }) {
  const [wordIdx] = useAtom(wordIdxAtom);
  const [displayWord, setDisplayWord] =
    useState<DisplayWordType>(displayWordDefault);
  const word = useRef<Word>(new Word("", ""));

  function wordDisplay() {
    setDisplayWord({
      example: word.current.example,
      typed: word.current.roman.typed,
      untyped: word.current.roman.untyped
    });
  }

  function wordSet({ example, kana }: WordType) {
    word.current = new Word(example, kana);
    wordDisplay();
  }

  useEffect(() => {
    // findLastIndexは最初-1になる
    if (words[wordIdx]) {
      wordSet(words[wordIdx].word);
    } else {
      wordSet({ example: "", kana: "" });
    }
  }, [wordIdx]);

  function keydown(event: KeyboardEvent) {
    word.current.typed(event.key);
    wordDisplay();
  }

  useEffect(() => {
    window.addEventListener("keydown", keydown);
    return () => {
      window.removeEventListener("keydown", keydown);
    };
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff15",
        borderRadius: "20px",
        padding: "30px"
      }}
    >
      <Box
        component="h2"
        sx={{ fontSize: "22px", height: "40px", margin: "0px" }}
      >
        {displayWord.example}
      </Box>
      <Box component="h4" sx={{ fontSize: "15px", height: "13px" }}>
        <Box component="span" sx={{ color: "gray" }}>
          {displayWord.typed}
        </Box>
        <Box component="span">{displayWord.untyped}</Box>
      </Box>
    </Box>
  );
}
