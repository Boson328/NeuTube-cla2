import React, { useEffect, useRef } from "react";

import type { Settings, WordsType } from "@/utils/types";
import type { YouTubeEvent } from "react-youtube";

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
  const [settings] = useAtom<Settings>(settingsAtom);
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
    return youtubeRef.current?.setVolume(settings.volume);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const temp = getCurrentTime();
      setTime(temp);
      setWordIdx(words.findLastIndex((w) => w.start < temp));
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setVolume();
  }, [settings]);

  return (
    <>
      <YouTubePlayer
        iframeClassName="iframe"
        onReady={(event) => {
          youtubeRef.current = event.target;
        }}
        opts={{
          height: "300px",
          playerVars: { allowfullscreen: 0, controls: 0 },
          width: "100%"
        }}
        videoId={id}
      />
      <ProgressBar
        max={
          words[wordIdx]
            ? words[wordIdx + 1]
              ? words[wordIdx + 1].start - words[wordIdx].start
              : getDuration() - words[wordIdx].start
            : words[wordIdx + 1].start
        }
        value={words[wordIdx] ? time - words[wordIdx].start : time}
      />
    </>
  );
}
