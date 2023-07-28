import type { NextApiRequest, NextApiResponse } from "next";

// YouTube APIから動画を取得するやつ
export default async function getYouTubeVideo(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = JSON.parse(req.body);
  const rawVideoData = await fetch(
    "https://www.googleapis.com/youtube/v3/videos?id=" +
      id +
      "&key=" +
      process.env.YOUTUBE_API +
      "&part=snippet"
  );

  const videoData = (await rawVideoData.json()).items[0].snippet;

  const rawChannelData = await fetch(
    "https://www.googleapis.com/youtube/v3/channels?id=" +
      videoData.channelId +
      "&key=" +
      process.env.YOUTUBE_API +
      "&part=snippet"
  );

  const channelData = (await rawChannelData.json()).items[0].snippet;

  res.status(200).json({
    channel: {
      icon: channelData.thumbnails.default.url,
      id: videoData.channelId,
      title: channelData.title
    },
    id: id,
    isLoaded: true,
    kps: 0,
    played: 0,
    thumbnail: videoData.thumbnails.high.url,
    title: videoData.title
  });
}
