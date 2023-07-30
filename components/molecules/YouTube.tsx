import React, { useEffect, useRef } from "react";

import type { YouTubeEvent } from "react-youtube";

import { LinearProgress } from "@mui/material";
import { useAtom } from "jotai";
import YouTubePlayer from "react-youtube";

import { timeAtom } from "@/utils/atoms";

export default function YouTube({ id }: { id: string }) {
  const [time, setTime] = useAtom(timeAtom);
  const youtubeRef = useRef<YouTubeEvent<number>>();

  function getCurrentTime() {
    return youtubeRef.current?.target.getCurrentTime();
  }
  function getDuration() {
    return youtubeRef.current?.target.getDuration();
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((getCurrentTime() / getDuration()) * 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <YouTubePlayer
        iframeClassName="iframe"
        onReady={(event) => {
          youtubeRef.current = event;
        }}
        opts={{
          playerVars: { allowfullscreen: 0, controls: 0 },
          width: "100%"
        }}
        videoId={id}
      />
      <LinearProgress
        color="error"
        sx={{ height: "5px", mt: "-10px", mx: "15px" }}
        value={time}
        variant="determinate"
      />
    </>
  );
}
