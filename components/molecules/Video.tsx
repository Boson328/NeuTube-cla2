import React, { useEffect, useState } from "react";

import type { VideoType } from "@/utils/types";

import BlockVideo from "@/components/atoms/BlockVideo";
import SkeletonVideo from "@/components/atoms/SkeletonVideo";

export default function Video({ id }: { id: string }) {
  const [info, setInfo] = useState<VideoType>();

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

  return info ? <BlockVideo info={info} /> : <SkeletonVideo />;
}
