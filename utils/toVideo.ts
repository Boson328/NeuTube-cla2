export function toVideo(value: any) {
  return {
    channel: {
      icon: value.channel_icon,
      id: value.channel_id,
      title: value.channel_title
    },
    id: value.id,
    kps: value.kps,
    played: value.played,
    thumbnail: value.thumbnail,
    title: value.title
  };
}
