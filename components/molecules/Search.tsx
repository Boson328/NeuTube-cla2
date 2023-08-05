import React, { useRef, useState } from "react";

import { Box } from "@mui/material";
import { useRouter } from "next/navigation";

import SearchButton from "@/components/atoms/SearchButton";
import SearchInput from "@/components/atoms/SearchInput";
import Suggests from "@/components/atoms/Suggests";
import { narrow } from "@/utils/narrow";

// 一時的にやってるだけ
const lists: string[] = [
  "ゴー・トゥー・大都会",
  "バカ通信",
  "アンノウン・マザーグース",
  "性格悪くてすみません",
  "フォニィ",
  "砂の惑星"
];

export default function Search() {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isExitText, setIsExitText] = useState<boolean>(false);
  const [suggests, setSuggests] = useState<string[]>(lists);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  function search() {
    if (inputRef.current?.value) {
      const query = inputRef.current.value.replace(/[" "　]/g, "+");
      router.push("/search?query=" + query);
    }
  }

  function erase() {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
      setSuggests(lists);
      setIsExitText(false);
    }
  }

  function suggest() {
    const value: string = inputRef.current?.value || "";
    if (value === "") {
      setSuggests(lists);
      setIsExitText(false);
    } else {
      setSuggests(narrow(value, lists));
      setIsExitText(true);
    }
  }

  return (
    <Box
      sx={{
        color: "white",
        height: "180px",
        maxWidth: "700px",
        position: "relative",
        width: "40%"
      }}
    >
      <Box sx={{ display: "flex", marginTop: "27px", width: "100%" }}>
        <SearchInput
          erase={erase}
          inputRef={inputRef}
          isExitText={isExitText}
          isFocus={isFocus}
          onInput={suggest}
          search={search}
          setIsFocus={setIsFocus}
        />
        <SearchButton search={search} />
      </Box>
      <Suggests
        inputRef={inputRef}
        isFocus={isFocus}
        search={search}
        suggests={suggests}
      />
    </Box>
  );
}
