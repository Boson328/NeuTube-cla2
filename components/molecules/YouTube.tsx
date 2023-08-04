import React, { useEffect, useRef } from "react";

import type { WordsType } from "@/utils/types";
import type { YouTubeEvent } from "react-youtube";

import { Box } from "@mui/material";
import { useAtom } from "jotai";
import YouTubePlayer from "react-youtube";

import ProgressBar from "@/components/atoms/ProgressBar";
import { settingsAtom, timeAtom, wordIdxAtom } from "@/utils/atoms";

export default function YouTube({
  id,
  words
}: {
  id: string;
  words: WordsType;
}) {
  const [{ volume }] = useAtom(settingsAtom);
  const [time, setTime] = useAtom(timeAtom);
  const [wordIdx, setWordIdx] = useAtom(wordIdxAtom);
  const youtubeRef = useRef<YouTubeEvent["target"]>();
  function getCurrentTime() {
    return youtubeRef.current?.getCurrentTime();
  }
  function getDuration() {
    return youtubeRef.current?.getDuration();
  }
  function setVolume() {
    return youtubeRef.current?.setVolume(volume);
  }
  useEffect(() => {
    setTime(0);
    setWordIdx(0);
    const interval = setInterval(() => {
      const temp = getCurrentTime();
      if (temp) {
        setTime(temp);
        setWordIdx(words.findLastIndex((w) => w.start <= temp));
      }
    }, 25);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setVolume();
  }, [volume]);

  return (
    <Box sx={{ height: "200px", position: "relative", width: "100%" }}>
      <YouTubePlayer
        id="iframe"
        iframeClassName="iframe"
        onReady={(event) => {
          youtubeRef.current = event.target;
          setVolume();
        }}
        onStateChange={() => {
          focus();
        }}
        opts={{
          height: "200px",
          playerVars: { controls: 0, rel: 1 },
          width: "100%"
        }}
        videoId={id}
      />
      <ProgressBar
        max={
          words[wordIdx + 1]
            ? words[wordIdx + 1].start - words[wordIdx].start
            : getDuration() - words[wordIdx].start
        }
        value={time - words[wordIdx].start}
      />
    </Box>
  );
}
