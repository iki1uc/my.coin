// energie.js — Energie — tmpY tmpU tmpD — BIO — Joystick — 120° BIO

import { SYS } from "./sys.js";

export const ENERGIE = {
  type: "energie.js",
  id: "ENERGIE",
  quelle: "BIO — P3 BIO bio konform — P4 BIOLENSTEL joystick tmpY/tmpU/tmpD",
  ecke: "120° BIO",
  farbe: "#33FFDD",
  tmp: { y:"tmpY", u:"tmpU", d:"tmpD" },
  room: { "◎":SYS.room["◎"], "81":SYS.room["81"], "◆":SYS.room["◆"] },
  formel: "ENERGIE = 81 × rutch timing — Waanis Schale springt — rutch 81 ◆ → 81 ◆ — timing drauf an",
  cache: "81 ◆ = gemeinsamer Cache — Energie liegt im Cache — 95-150 anti-reib",
  verbrauch: "TRANS Core — 2.4ms rutch — 96% cache hit — wenig Energie weil GATE VIRTUAL",
  ziel: "Energie → 81 → ◆ → △ → ▣ — Energie wird zu Erfolg"
};
