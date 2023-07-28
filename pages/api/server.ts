import { db, sql } from "@vercel/postgres";

import type { VideoInfo } from "@/utils/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    const { method } = request;
    const client = await db.connect();
    if (method === "INSERT") {
      const { id, title, channel, thumbnail }: VideoInfo = JSON.parse(
        request.body
      );
      await sql`DELETE FROM videos WHERE id = ${id}`;
      const result =
        await sql`INSERT INTO videos (id, title, channel_id, channel_title, channel_icon, thumbnail, played, kps) VALUES (${id}, ${title}, ${channel.id}, ${channel.title}, ${channel.icon}, ${thumbnail}, 0, 0)`;
      return response.status(200).json(result);
    } else if (method === "POST") {
      const { id }: VideoInfo = JSON.parse(request.body);
      const result = await client.sql`SELECT * FROM videos WHERE id = ${id}`;
      const row = result.rows[0];
      const video: VideoInfo = {
        channel: {
          icon: row.channel_icon,
          id: row.channel_id,
          title: row.channel_title
        },
        id: row.id,
        kps: row.kps,
        played: row.played,
        thumbnail: row.thumbnail,
        title: row.title
      };
      return response.status(200).json(video);
    } else {
      const result = await client.sql`SELECT * FROM videos`;
      const videos: VideoInfo[] = result.rows.map((row) => {
        return {
          channel: {
            icon: row.channel_icon,
            id: row.channel_id,
            title: row.channel_title
          },
          id: row.id,
          kps: row.kps,
          played: row.played,
          thumbnail: row.thumbnail,
          title: row.title
        };
      });
      return response.status(200).json(videos);
    }
  } catch (error) {
    return response.status(500).json({ error });
  }
}
