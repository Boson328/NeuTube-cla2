import type { Settings } from "./types";

import { atom } from "jotai";

export const timeAtom = atom(0);
export const wordIdxAtom = atom(-1);
export const volumeAtom = atom(50);
export const settingsAtom = atom<Settings>({ keyboard: 0, volume: 0 });
