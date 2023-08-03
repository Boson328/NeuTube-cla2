import React, { useEffect, useRef } from "react";

import type { WordsType } from "@/utils/types";
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
  const [{ volume }] = useAtom(settingsAtom);
  const [time, setTime] = useAtom(timeAtom);
  const [wordIdx, setWordIdx] = useAtom(wordIdxAtom);
  const youtubeRef = useRef<YouTubeEvent["target"]>();
  async function getCurrentTime() {
    return (await youtubeRef.current?.getCurrentTime()) || 0;
  }
  async function getDuration() {
    return (await youtubeRef.current?.getDuration()) || 0;
  }
  function setVolume() {
    return youtubeRef.current?.setVolume(volume);
  }
  useEffect(() => {
    const interval = setInterval(async () => {
      const temp = await getCurrentTime();
      if (temp) {
        setTime(temp);
        setWordIdx(words.findLastIndex((w) => w.start <= temp));
      }
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setVolume();
  }, [volume]);

  return (
    <>
      <YouTubePlayer
        id="iframe"
        iframeClassName="iframe"
        onReady={(event) => {
          youtubeRef.current = event.target;
          setVolume();
        }}
        opts={{
          height: "300px",
          playerVars: { controls: 0, rel: 1 },
          width: "100%"
        }}
        videoId={id}
      />
      <ProgressBar
        max={
          words[wordIdx + 1]
            ? words[wordIdx + 1].start - words[wordIdx].start
            : words[wordIdx].start
        }
        value={time - words[wordIdx].start}
      />
    </>
  );
}
