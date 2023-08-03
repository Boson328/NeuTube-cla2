import type { VideoInfo } from "./types";

export function toVideo(value: any): VideoInfo {
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
    title: value.title,
    words: [
      {
        start: 0,
        word: {
          example: "",
          kana: ""
        }
      },
      {
        start: 2,
        word: {
          example: "私が愛を語るのならその目には如何映る",
          kana: "わたしがあいをかたるのならそのめにはどううつる"
        }
      },
      {
        start: 6,
        word: {
          example: "詞は有り余るばかり、無垢の音が流れてく",
          kana: "ことばはありあまるばかり、むくのねがながれてく"
        }
      },
      {
        start: 11,
        word: {
          example: "あなたが愛にまみれるまで、その色は幻だ",
          kana: "あなたがあいにまみれるまで、そのいろはまぼろしだ"
        }
      },
      {
        start: 14.5,
        word: {
          example: "ひとりぼっち、音に吞まれれば 全世界共通の快楽さ",
          kana: "ひとりぼっち、おとにのまれればぜんせかいきょうつうのかいらくさ"
        }
      }
    ]
  };
}
