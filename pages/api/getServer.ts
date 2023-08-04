import type { VideoType } from "@/utils/types";
import type { NextApiRequest, NextApiResponse } from "next";

import { sql } from "@vercel/postgres";

import { toVideo } from "@/utils/toVideo";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    const { method } = request;
    if (method === "POST") {
      const { id }: VideoType = JSON.parse(request.body);
      const result = await sql`SELECT * FROM videos WHERE id = ${id}`;
      const row = result.rows[0];
      const video: VideoType = toVideo(row);
      return response.status(200).json(video);
    } else {
      const result = await sql`SELECT * FROM videos`;
      const videos: VideoType[] = result.rows.map((row) => {
        return toVideo(row);
      });
      return response.status(200).json(videos);
    }
  } catch (error) {
    return response.status(500).json({ error });
  }
}
