// sys.js — neue Teilung — MARKT BANK BOERSE beim AXI NET oder LINK KONSTELLATION

export const TEILUNG = {
  // 1. MARKT = Verkauf — HY PE PER — High Yield
  MARKT: {
    id: "MARKT",
    nodes: ["◉","3","9","◎","81","3 ↺"],
    farbe: "#00FF41",
    teilung: "Verkauf — Produkt — bio konform — fahrzeug tmpZ",
    axi: "AXI NET = Fahrzeug Bus — tmpZ/tmpX — AIR/AIV Grenzen",
    link: "LINK KONSTELLATION = 81 schießt 9×9 = 81 Richtungen"
  },

  // 2. BANK = Geld — W=88 BIOS=0 Last — tmpOMG — SYS HOME ▣
  BANK: {
    id: "BANK",
    nodes: ["81","◆","△","▣","27","756"],
    farbe: "#FFDD33",
    teilung: "Geld — Cache — W=88 — 95-150 anti-reib — 81 ◆ △ = gemeinsamer Cache",
    axi: "AXI NET = WARB — Waren-Börse — 81 → 27 cache bridge — Geld liegt im Cache",
    link: "LINK KONSTELLATION = ROM-81-◆ — ROM bleibt — Cache bei jeden fest verhandelt"
  },

  // 3. BOERSE = Transport — TRANS WARB KANAL — schnellstes GATE
  BOERSE: {
    id: "BOERSE",
    nodes: ["◎","81","◆","△"],
    farbe: "#33FFDD",
    teilung: "Transport — schnellstes GATE — 2.4ms rutch — 96% cache hit — TRANS Core",
    axi: "AXI NET = KANAL — Exit kanal to industry sink ▣ — 756 → △ → 27 → ▣",
    link: "LINK KONSTELLATION = GATE VIRTUAL holds no data, only pointers — wenn 81 fällt fallen 6"
  },

  // 4. AXI NET = Bus — Verbindung — 0° NANO / 120° BIO / 240° ORDNUNG
  AXI_NET: {
    id: "AXI_NET",
    nodes: ["3","◎","27", "9","81","▣", "◆","756","△"],
    farbe: "#FF8A4D",
    teilung: "Bus — TMP-α β γ — 3 Ecken × 3 = 9 ROMs — 9 → 81 → 756",
    marktb_bank_boerse: "MARKT=tmpZ Fahrzeug, BANK=tmpW W=88, BOERSE=tmpY/tmpU/tmpD Joystick",
    link: "LINK KONSTELLATION = screenTransform(angle,radius,extraRotY,rotX)=6y — jeder Node blickt nur auf sein Zentrum"
  },

  // 5. LINK KONSTELLATION = Verlinkung — 81 Konstellation — NC.9x9
  LINK_KONSTELLATION: {
    id: "LINK_KONSTELLATION",
    nodes: ["◉","3","9","◎","81","◆","△","▣","27","756","3 ↺"],
    farbe: "#C49CFF",
    teilung: "Verlinkung — alle 11 Nodes verlinkt — 81 appears in 6 segments → central bridge",
    axi: "AXI NET = Alle AXI teilen gleichen Bus — 81 Mitte — 0.5,0.5 — alle teilen",
    erfolg: "MARKT oder BANK oder BOERSE — egal — beim AXI NET oder LINK KONSTELLATION — Erfolg immer 81 → ◆ → △ → ▣"
  }
};

// Entscheidung — Teilung ob MARKT BANK oder BOERSE beim AXI NET oder LINK KONSTELLATION:
const entscheidung = (key) => {
  const k = TEILUNG[key];
  return `${k.id}: ${k.teilung} — AXI: ${k.axi} — LINK: ${k.link}`;
};

// Nutzung:
// entscheidung("MARKT") → MARKT: Verkauf — Produkt — AXI NET = Fahrzeug Bus — LINK = 81 schießt 81 Richtungen
// entscheidung("BANK") → BANK: Geld — Cache — AXI NET = WARB — LINK = ROM bleibt
// entscheidung("BOERSE") → BOERSE: Transport — schnellstes GATE — AXI NET = KANAL — LINK = GATE VIRTUAL
// entscheidung("AXI_NET") → AXI_NET: Bus — Verbindung — MARKT/BANK/BOERSE teilen Bus
// entscheidung("LINK_KONSTELLATION") → LINK: alle verlinkt — Erfolg immer 81→◆→△→▣
