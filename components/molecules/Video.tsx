import React, { useEffect, useState } from "react";

import BlockVideo from "../atoms/BlockVideo";

import type { VideoInfo } from "@/utils/types";

// eslint-disable-next-line import/order
import SkeletonVideo from "@/components/atoms/SkeletonVideo";
// eslint-disable-next-line import/order
import { baseUrl } from "@/utils/baseUrl";

export default function Video({ id }: { id: string }) {
  const [info, setInfo] = useState<VideoInfo>();

  async function getInfo() {
    const res = await fetch(baseUrl() + "/api/server", {
      body: JSON.stringify({ id }),
      method: "POST"
    });
    console.log(res);
    const video = await res.json();
    setInfo(video);
  }

  useEffect(() => {
    getInfo();
  }, []);

  return <>{info ? <BlockVideo info={info} /> : <SkeletonVideo />}</>;
}
