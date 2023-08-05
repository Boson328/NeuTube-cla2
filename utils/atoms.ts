import type { SettingsType } from "./types";

import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const timeAtom = atom(0);
export const wordIdxAtom = atom(0);
export const settingsAtom = atomWithStorage<SettingsType>("settings", {
  keyboard: 0,
  volume: 50
});
