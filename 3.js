// 3.js — 3 Ecken — Dreieck — 0° NANO / 120° BIO / 240° ORDNUNG — Pipeline Vorarbeit — 3 → 6y

import { ROOM } from "./room.js";

export const DREI = {
  type: "3.js",
  id: "3",
  name: "3 Ecken — Dreieck",
  value: 3,
  ecken: {
    "0°": { name: "NANO", p: ["P1 ATOM 81.tmp", "P2 NANO fahrzeug tmpZ/tmpX"], color: "#00FF41" },
    "120°": { name: "BIO", p: ["P3 BIO bio konform", "P4 BIOLENSTEL joystick tmpY/tmpU/tmpD"], color: "#33FFDD" },
    "240°": { name: "ORDNUNG", p: ["P5 ORDNUNG RAM 81→2268", "P6 SYS HOME ORT tmpOMG W=88 BIOS=0"], color: "#FFDD33" }
  },
  split: "Jede Ecke teilt sich in 2y = 6y gesamt",
  diag: "9x9 Matrix Diagonale = 9 Felder, 6 Personen nehmen 1.5 Ø, 3 Felder leer = LÜCKE für neue Koop",
  rule: "Markieren, nicht bauen / Grenze setzen, nicht überschreiten / Schnittstelle legen, liegenlassen",
  nodes: [ROOM.nodes["3"], ROOM.nodes["◉"], ROOM.nodes["◎"]],
  geo: "◉ ↗ ↘ 3 9 ↘ ↗ ◎",
  to9: "3 → 9 → 81",
  boot: "3 Ecken → 6y → 9 Felder → 81 Konstellation"
};
