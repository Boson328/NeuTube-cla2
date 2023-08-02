export type Item = {
  fill: JSX.Element;
  href: string;
  outline: JSX.Element;
  title: string;
};

export type WordType = { example: string; kana: string };

export type WordsType = { start: number; word: WordType }[];

export type DisplayWordType = {
  example: string;
  typed: string;
  untyped: string;
};

export type VideoInfo = {
  channel: { icon: string; id: string; title: string };
  id: string;
  kps: number;
  played: number;
  thumbnail: string;
  title: string;
  words: WordsType;
};
