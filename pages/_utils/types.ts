export type Item = {
  fill: JSX.Element;
  href: string;
  outline: JSX.Element;
  title: string;
};

export type VideoInfo = {
  channel: { icon: string; id: string; title: string };
  id: string;
  kps: number;
  played: number;
  thumbnail: string;
  title: string;
};
