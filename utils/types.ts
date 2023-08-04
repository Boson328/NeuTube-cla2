export type ItemType = {
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

export type VideoType = {
  channel: { icon: string; id: string; title: string };
  id: string;
  kps: number;
  played: number;
  thumbnail: string;
  title: string;
  words: WordsType;
};

export type SettingsType = {
  keyboard: number;
  volume: number;
};

export type KeyType = {
  code: string;
  length?: number;
  name: string;
  shift: string;
};

export type KeyboardType = KeyType[][];
