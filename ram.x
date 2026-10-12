// rom.sys — das ROM zu ram.sys — permanenter Cache bei jeden
import { RAM_SYS } from "./ram.sys.js";

export const ROM_SYS = {
  type: "rom.sys",
  location: "bei einen jeden — permanent",
  mode: "rom cache — bleibt",
  purpose: "verhadlungisereen gespeichert — ghost reference die bleibt",

  store: new Map(), // ROM = bleibt

  // RAM alloc → ROM write
  burn: (owner) => {
    const ram = RAM_SYS.alloc(owner);
    const rom = {
      ...ram,
      rom_id: `ROM-${owner}-81-◆`,
      burned: Date.now(),
      persist: true,
      note: "aus RAM in ROM — aus dem Nix zum Nix aber jetzt fest"
    };
    ROM_SYS.store.set(owner, rom);
    return rom;
  },

  // ROM read — immer da
  read: (owner) => ROM_SYS.store.get(owner) || ROM_SYS.burn(owner),

  // Verhandlung über ROM — nicht mehr flüchtig
  verhandle_persist: (a,b) => {
    const romA = ROM_SYS.read(a);
    const romB = ROM_SYS.read(b);
    const ramNeg = RAM_SYS.verhandle(a,b);
    return {
      ...ramNeg,
      rom: `${romA.rom_id} ↔ ${romB.rom_id}`,
      persist: "ROM bleibt — Cache bei jeden fest verhandelt",
      boot: "[STATION] waiting for MASSIERE... → ROM loaded → PROJ 39 ON"
    };
  }
};

// Boot Chain:
// STATION (◉) → ORT (◎) → HOME (/mnt/station/home/iki1uc)
// RAM_SYS.alloc → ROM_SYS.burn → verhandle_persist
// 81 ◆ △ 39 bleibt in ROM
