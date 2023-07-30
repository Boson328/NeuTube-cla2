import React, { useRef } from "react";

import type { VideoInfo } from "@/utils/types";

import { Box, Button, Input } from "@mui/material";

import Heading from "@/components/templates/Heading";

export default function Edit() {
  const inputRef = useRef<HTMLInputElement>(null);

  async function insertYTVideo() {
    try {
      const ytRes = await fetch("/api/getYouTube", {
        body: JSON.stringify({ id: inputRef.current?.value }),
        method: "POST"
      });
      const ytVideo: any = (await ytRes.json()) as VideoInfo;

      await fetch("/api/insertServer", {
        body: JSON.stringify({ ...ytVideo }),
        method: "POST"
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box>
      <Heading title="制作" />
      <Input inputRef={inputRef} />
      <Button
        onClick={() => {
          insertYTVideo();
        }}
      >
        Submit
      </Button>
    </Box>
  );
}
