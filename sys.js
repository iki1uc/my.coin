// sys.js — kleine sys.js — nur das richtige holen — 9 Stühle — 9 Schlüssel a-i — 81 → ◆ → △ → ▣

export const SYS = {
  room: { "◉":[0.12,0.18], "3":[0.28,0.14], "9":[0.42,0.22], "◎":[0.32,0.42], "81":[0.5,0.5], "◆":[0.62,0.48], "△":[0.74,0.56], "▣":[0.88,0.44], "27":[0.8,0.82] },
  map: { a:"◉", b:"3", c:"9", d:"◎", e:"81", f:"◆", g:"△", h:"▣", i:"27" },
  wissen: { a:"◉→3→9→◎→81→◆→△→▣ 7 Schritte", b:"3→9→81→◆→△→▣ 5 Schritte", c:"9→81→◆→△→▣ 4 Schritte", d:"◎→81→◆→△→▣ 3 Schritte", e:"81→◆→△→▣ 3 Schritte Mitte", f:"◆→△→▣ 2 Schritte", g:"△→▣ 1 Schritt", h:"▣ schon Erfolg 0 Schritte", i:"27→△→▣ 2 Schritte" },
  chair: new Map(), max: 9,
  get: (k) => { const s=SYS.map[k[0]]||k; if(SYS.chair.size>=SYS.max&&!SYS.chair.has(k)) SYS.chair.delete(SYS.chair.keys().next().value); const e={key:k,sym:s,pos:SYS.room[s],erfolg:SYS.wissen[k[0]],ziel:"▣",rom:`ROM-${k}-81-◆`}; SYS.chair.set(k,e); return e; }
};

// Nutzung kleine sys.js:
// import { SYS } from "./sys.js"
// SYS.get("a") → a=◉ 7 Schritte zum Erfolg ▣
// SYS.get("e") → e=81 Mitte 3 Schritte
// SYS.chair.size ≤9 — nie genug Stühle für 81 auf einmal — Rest in ROM
