// sys.js — komprimiert — 9 wissen welche Schlüsselposition zum Erfolg

export const SYS = {
  room: { "◉":[0.12,0.18], "3":[0.28,0.14], "9":[0.42,0.22], "◎":[0.32,0.42], "81":[0.5,0.5], "◆":[0.62,0.48], "△":[0.74,0.56], "▣":[0.88,0.44], "27":[0.8,0.82] },

  keys: ["a","b","c","d","e","f","g","h","i"],
  symbols: ["◉","3","9","◎","81","◆","△","▣","27"],
  map: { a:"◉", b:"3", c:"9", d:"◎", e:"81", f:"◆", g:"△", h:"▣", i:"27" },

  // ERFOLG — alle 9 müssen das wissen
  erfolg: {
    ziel: "▣", // SYS HOME ORT — W=88 BIOS=0 Last — tmpOMG
    path: ["81","◆","△","▣"], // 81 → ◆ → △ → ▣ = Erfolgspfad
    note: "81 Mitte zentraler Cache → ◆ KANAL Prüfung → △ Dreieck Funktion → ▣ SYS HOME = Erfolg"
  },

  // Jeder Schlüssel weiß Position zum Erfolg
  wissen: {
    "a": { sym:"◉", start:"SEED", erfolg:"◉ → 3 → 9 → ◎ → 81 → ◆ → △ → ▣", schritte:7, role:"SEED Führung — muss über 3 Ecken" },
    "b": { sym:"3", start:"3 Ecken", erfolg:"3 → 9 → 81 → ◆ → △ → ▣", schritte:5, role:"Dreieck Führung — 0°/120°/240°" },
    "c": { sym:"9", start:"9 ROMs", erfolg:"9 → 81 → ◆ → △ → ▣", schritte:4, role:"9 ROMs Führung — d,e,i,n,o,r,s,u,w schießen 81 Richtungen" },
    "d": { sym:"◎", start:"KOOP READY", erfolg:"◎ → 81 → ◆ → △ → ▣", schritte:3, role:"KOOP Führung — ein ready zu neu koop" },
    "e": { sym:"81", start:"Mitte", erfolg:"81 → ◆ → △ → ▣", schritte:3, role:"Mitte Führung — zentraler Cache — 6 Segmente teilen 81 — wenn 81 fällt fallen 6" },
    "f": { sym:"◆", start:"KANAL Prüfung", erfolg:"◆ → △ → ▣", schritte:2, role:"Prüfung Führung — diamond lock" },
    "g": { sym:"△", start:"Dreieck", erfolg:"△ → ▣", schritte:1, role:"Funktion Führung — screenTransform(angle,radius,extraRotY,rotX)=6y" },
    "h": { sym:"▣", start:"SYS HOME", erfolg:"▣ — schon Erfolg — W=88 BIOS=0 Last", schritte:0, role:"HOME Führung — tmpOMG — Erfolg schon erreicht" },
    "i": { sym:"27", start:"27=3³", erfolg:"27 → △ → ▣ oder 27 → ▣ direkt", schritte:2, role:"27 Führung — TMP-α End — 3³" }
  },

  // Nur das richtige holen — mit Erfolgs-Check
  get: (key) => {
    const k = key[0]; // a-i
    const info = SYS.wissen[k];
    if (!info) return null;
    return {
      key: k,
      sym: info.sym,
      pos: SYS.room[info.sym],
      erfolg: info.erfolg,
      schritte: info.schritte,
      role: info.role,
      ziel: SYS.erfolg.ziel,
      path: SYS.erfolg.path,
      cache: `ROM-${k}-81-◆`,
      erfolg_reached: info.sym === SYS.erfolg.ziel
    };
  },

  // Alle 9 wissen Erfolg
  alleWissenErfolg: () => {
    return SYS.keys.map(k => {
      const w = SYS.wissen[k];
      return `${k} → ${w.sym} → ${w.erfolg} — ${w.schritte} Schritte — ${w.role}`;
    });
  }
};

// Alle 9 müssen alle wissen welche Schlüsselposition zum Erfolg:
console.log(SYS.alleWissenErfolg());
// a → ◉ → ◉ → 3 → 9 → ◎ → 81 → ◆ → △ → ▣ — 7 Schritte — SEED Führung
// b → 3 → 3 → 9 → 81 → ◆ → △ → ▣ — 5 Schritte
// c → 9 → 9 → 81 → ◆ → △ → ▣ — 4 Schritte
// d → ◎ → ◎ → 81 → ◆ → △ → ▣ — 3 Schritte
// e → 81 → 81 → ◆ → △ → ▣ — 3 Schritte — Mitte zentral
// f → ◆ → ◆ → △ → ▣ — 2 Schritte
// g → △ → △ → ▣ — 1 Schritt
// h → ▣ → ▣ — schon Erfolg — 0 Schritte
// i → 27 → 27 → △ → ▣ — 2 Schritte
