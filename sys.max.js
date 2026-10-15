// max.sys.js — max sys — der andere ist max sys — alles drin — MARKT BANK BOERSE beim AXI NET oder LINK KONSTELLATION

import { SYS as MINI } from "./sys.js";

export const MAX_SYS = {
  // 1. MINI = kleine sys.js
  mini: MINI,

  // 2. ROOM = yn Map komplett
  room: MINI.room,

  // 3. 3 Ecken = Dreieck = 0° NANO / 120° BIO / 240° ORDNUNG
  drei: {
    "0°": { id:"ATOM ATIM", p:"P1 ATOM 81.tmp + P2 NANO fahrzeug tmpZ/tmpX", sym:"◉", keys:["a"], farbe:"#00FF41" },
    "120°": { id:"ENERGIE", p:"P3 BIO bio konform + P4 BIOLENSTEL joystick tmpY/tmpU/tmpD", sym:"◎+81+◆", keys:["d","e","f"], farbe:"#33FFDD" },
    "240°": { id:"WHY", p:"P5 ORDNUNG RAM 81→2268 + P6 SYS HOME ORT tmpOMG W=88 BIOS=0", sym:"▣", keys:["h"], farbe:"#FFDD33" }
  },

  // 4. 9 ROMs = 9 Schlüssel a-i jedes eigene Symbol Führung
  neun: { keys:["a","b","c","d","e","f","g","h","i"], syms:["◉","3","9","◎","81","◆","△","▣","27"], roms:["d","e","i","n","o","r","s","u","w"] },

  // 5. 81 Konstellation = 9×9 = a1..i9
  einundachtzig: { calc:"9×9=81", nodes:["◉","3","9","◎","81","◆","△","▣","27","756","3 ↺"], shared:{"81":6,"◆":5,"△":6,"27":3} },

  // 6. RAM = flüchtig = bei jeden = Cache zur Verhandlung = Stühle
  ram: { type:"ram.disk.js", fluechtig:true, alloc:(owner)=>({id:`RAM-${owner}-81-◆`,size:"95-150 anti-reib"}), verhandle:(a,b)=>({move:`G0 A${a} B${b}`,unmove:`G0 A${b} B${a}`,resumee:"Waanis Schale springt"}) },

  // 7. ROM = permanent = bleibt = ghost reference die bleibt
  rom: { type:"rom.disk.js", permanent:true, burn:(owner)=>({id:`ROM-${owner}-81-◆`,persist:true,store:`Map + localStorage`}), read:(owner)=>`ROM-${owner}-81-◆` },

  // 8. TEILUNG ob MARKT BANK oder BOERSE beim AXI NET oder LINK KONSTELLATION
  teilung: {
    MARKT: { nodes:["◉","3","9","◎","81"], axi:"AXI NET Fahrzeug tmpZ", link:"LINK 81 schießt 81 Richtungen" },
    BANK: { nodes:["81","◆","△","▣","27","756"], axi:"AXI NET WARB 81→27", link:"LINK ROM bleibt" },
    BOERSE: { nodes:["◎","81","◆","△"], axi:"AXI NET KANAL 756→△→27→▣", link:"LINK GATE VIRTUAL only pointers" },
    AXI_NET: { nodes:["3","◎","27","9","81","▣","◆","756","△"], bus:true },
    LINK_KONSTELLATION: { nodes:["◉","3","9","◎","81","◆","△","▣","27","756","3 ↺"], erfolg:"81→◆→△→▣" }
  },

  // 9. ATOM + ENERGIE + WHY
  atom: { id:"ATOM", sym:"◉", p:"P1 ATOM 81.tmp", wert:1, kette:"1→3→9→81→2268→756→27→▣" },
  energie: { id:"ENERGIE", sym:"◎+81+◆", tmp:["tmpY","tmpU","tmpD"], quelle:"120° BIO" },
  why: { id:"WHY", sym:"▣", w:88, bios:0, tmp:"tmpOMG", frage:"Warum? Weil 81→◆→△→▣ Erfolg" },

  // 10. Erfolg — alle 9 müssen wissen welche Schlüsselposition zum Erfolg
  erfolg: { ziel:"▣", path:["81","◆","△","▣"], alleWissen: MINI.wissen },

  // 11. SCSI RAID SLI VERBUND
  scsi: { devices:["cpu.ram","ram.cpu","ram.gpu","ram.rom","ram.sys","ram.x","ram.y","ram.z"] },
  raid: { "81":6, "◆":5, "△":6, "27":3, note:"wenn 81 fällt fallen 6" },
  sli: { gate:"GATE VIRTUAL ACTIVE", note:"ab jetzt getrennt MARKT BOERSE INDUSTRY TRENNUNG WIE ZUSAMMEN — aber zusammen via cache bridge" }
};

// max sys = alles, kleine sys.js = nur das richtige holen
// kleine sys.js → max sys → 81 Schlüssel → ROM bleibt
