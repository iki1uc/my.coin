// 9.js — 9 ROMs — d,e,i,n,o,r,s,u,w — 9 die in 81 Richtungen schießen kann — 9 → 81

import { ROOM } from "./room.js";
import { DREI } from "./3.js";

export const NEUN = {
  type: "9.js",
  id: "9",
  name: "9 ROMs",
  value: 9,
  roms: ["d", "e", "i", "n", "o", "r", "s", "u", "w"],
  files: ["d.hdf.rom", "e.hdf.rom", "i.hdf.rom", "n.hdf.rom", "o.hdf.rom", "r.hdf.rom", "s.hdf.rom", "u.hdf.rom", "w.hdf.rom"],
  shoots: "81 Richtungen",
  calc: "9 × 9 = 81 Konstellation — NC.9x9.json",
  matrix: "9x9 Matrix — Zeile = ROM — Spalte = Richtung — Diagonale = 9 Felder = 6y + 3 LÜCKE",
  from3: "3 Ecken × 3 = 9 ROMs",
  to81: "9 × 9 = 81",
  to2268: "81 × 28 = 2268 Optionen — 81.tmp → 2268",
  to756: "2268 / 3 = 756 KANAL",
  nodes: [ROOM.nodes["9"], ROOM.nodes["81"]],
  ecken: DREI.ecken,
  boot: "3 → 9 → 81 → ◆ → △ → ▣"
};
