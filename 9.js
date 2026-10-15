// element.js — neues Element — vierte Datei — nach room erste, ram zweite, rom dritte
// room = Raum yn Map — ram = bei jeden flüchtig Cache — rom = bei jeden permanent bleibt — element = genannt, fest

import { ROOM } from "./room.js";
import { RAM_SYS } from "./ram.disk.js";
import { ROM_SYS } from "./rom.disk.js";

export const ELEMENT = {
  type: "element.js",
  id: "ELEMENT",
  location: "bei einen jeden — genannt — element — fest",
  purpose: "verhadlungisereen — aus Nix zum Nix aber jetzt fest — ghost reference die bleibt",

  // 1. Raum — wo ist was — yn Koordinaten-Map — Pipeline Vorarbeit Dreieck
  room: ROOM.nodes["81"], // Mitte 0.5,0.5 — 81 Konstellation zentraler Cache
  triangle: ROOM.nodes["3"], // 0°/120°/240° Dreieck
  station: ROOM.nodes["◉"], // SEED ⟁ STATION
  ort: ROOM.nodes["◎"], // KOOP READY ORT

  // 2. RAM — flüchtig — bei jeden — Cache zur Verhandlung
  ram: RAM_SYS.alloc("element"),

  // 3. ROM — permanent — bei jeden — bleibt — ghost reference die bleibt
  rom: ROM_SYS.burn("element"),

  // 4. Verhandlung — G0 move/unmove — Waanis Schale springt — rutch timing
  verhandle: (other) => {
    const ramNeg = RAM_SYS.verhandle("element", other);
    const romNeg = ROM_SYS.verhandle_persist("element", other);
    return {
      ...ramNeg,
      ...romNeg,
      element: `ELEMENT ↔ ${other} — 81 ◆ △ 39 bleibt`,
      boot: "[STATION] waiting for MASSIERE... → ELEMENT loaded → ROOM → RAM → ROM → PROJ 39 ON"
    };
  },

  // 5. Shared Cache Bridges — 81 appears in 6 segments — wenn 81 fällt, fallen 6
  bridges: ROOM.shared["81"],

  // 6. Boot Chain — STATION (◉) → ORT (◎) → HOME → RAM → ROM → ELEMENT
  boot: "◉ → ◎ → /mnt/station/home/iki1uc → RAM_SYS.alloc → ROM_SYS.burn → ELEMENT verhandle_persist → 81 ◆ △ 39 bleibt"
};

// Beispiel:
// ELEMENT.verhandle("iki1uc")
// move: G0 Aelement Biki1uc — move
// unmove: G0 Aiki1uc Belement — unmove
// resumee: Waanis Schale springt — rutch 81 ◆ → 81 ◆ — timing drauf an
// rom: ROM-element-81-◆ ↔ ROM-iki1uc-81-◆
// persist: ROM bleibt — Cache bei jeden fest verhandelt
// boot: [STATION] waiting for MASSIERE... → ROM loaded → PROJ 39 ON
