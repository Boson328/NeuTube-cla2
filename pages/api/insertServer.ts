import type { VideoInfo } from "@/utils/types";
import type { NextApiRequest, NextApiResponse } from "next";

import { sql } from "@vercel/postgres";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    const { method } = request;
    if (method === "POST") {
      const { id, title, channel, thumbnail }: VideoInfo = JSON.parse(
        request.body
      );
      await sql`DELETE FROM videos WHERE id = ${id}`;
      const result =
        await sql`INSERT INTO videos (id, title, channel_id, channel_title, channel_icon, thumbnail, played, kps) VALUES (${id}, ${title}, ${channel.id}, ${channel.title}, ${channel.icon}, ${thumbnail}, 0, 0)`;
      return response.status(200).json(result);
    }
  } catch (error) {
    return response.status(500).json({ error });
  }
}
