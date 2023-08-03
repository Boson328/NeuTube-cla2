import type { Settings } from "./types";

import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const timeAtom = atom(0);
export const wordIdxAtom = atom(0);
export const settingsAtom = atomWithStorage<Settings>("settings", {
  keyboard: 0,
  volume: 50
});
