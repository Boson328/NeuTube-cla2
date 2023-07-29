import { db } from "@vercel/postgres";

import type { VideoInfo } from "@/utils/types";
import type { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line import/order
import { toVideo } from "@/utils/toVideo";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    const { method } = request;
    const client = await db.connect();
    if (method === "POST") {
      const { id }: VideoInfo = JSON.parse(request.body);
      const result = await client.sql`SELECT * FROM videos WHERE id = ${id}`;
      const row = result.rows[0];
      const video: VideoInfo = toVideo(row);
      return response.status(200).json(video);
    } else {
      const result = await client.sql`SELECT * FROM videos`;
      const videos: VideoInfo[] = result.rows.map((row) => {
        return toVideo(row);
      });
      return response.status(200).json(videos);
    }
  } catch (error) {
    return response.status(500).json({ error });
  }
}
