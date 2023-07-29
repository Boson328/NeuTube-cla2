import React, { useEffect, useState } from "react";

import BlockVideo from "../atoms/BlockVideo";

import type { VideoInfo } from "@/utils/types";

// eslint-disable-next-line import/order
import SkeletonVideo from "@/components/atoms/SkeletonVideo";

export default function Video({ id }: { id: string }) {
  const [info, setInfo] = useState<VideoInfo>();

  async function getInfo() {
    const res = await fetch("/api/getServer", {
      body: JSON.stringify({ id }),
      method: "POST"
    });
    const video = await res.json();
    setInfo(video);
  }

  useEffect(() => {
    getInfo();
  }, []);

  return <>{info ? <BlockVideo info={info} /> : <SkeletonVideo />}</>;
}
