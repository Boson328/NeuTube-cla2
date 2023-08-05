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
  const [isFinish, setIsFinish] = useState<boolean>(false);
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

  function keypress(event: KeyboardEvent) {
    const result = word.current.typed(event.key);
    if (!result.isMiss) wordDisplay();
    if (result.isFinish) setIsFinish(true);
  }

  useEffect(() => {
    window.addEventListener("keypress", keypress);
    return () => {
      window.removeEventListener("keypress", keypress);
    };
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff15",
        borderRadius: "20px",
        height: "150px",
        letterSpacing: "0.8px",
        my: "20px",
        padding: "25px 30px"
      }}
    >
      <Box
        component="h2"
        sx={{
          color: isFinish ? "gray" : "primary.main",
          fontSize: "20px",
          height: "40px",
          margin: "0px"
        }}
      >
        {displayWord.example}
      </Box>
      <Box component="h4" sx={{ fontSize: "15px", height: "40px", m: "0px" }}>
        <Box component="span" sx={{ color: "gray" }}>
          {displayWord.typed}
        </Box>
        <Box component="span">{displayWord.untyped}</Box>
      </Box>
      <Box
        component="h3"
        sx={{
          color: "#fff7",
          fontSize: "13px",
          height: "13px",
          m: "0"
        }}
      >
        {words[wordIdx + 1] ? words[wordIdx + 1].word.example : "終了"}
      </Box>
    </Box>
  );
}
