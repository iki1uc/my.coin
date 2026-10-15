export const RAM_SYS = {
  type: "ram.sys",
  location: "bei einen jeden",
  mode: "cache",
  purpose: "verhadlungisereen",

  alloc: (owner) => ({
    owner,
    cache: { id: "81", sym: "◆", proj: "△ 39", size: "95-150 anti-reib" },
    gate: "GATE Cache→Cache virtuell nutzbar",
    ghost: "reference only — kein Raum, nur errechnet"
  }),

  verhandle: (a,b) => {
    const cacheA = RAM_SYS.alloc(a);
    const cacheB = RAM_SYS.alloc(b);
    const move = `G0 A${a} B${b} — move`;
    const unmove = `G0 A${b} B${a} — unmove`;
    const resumee = `Waanis Schale springt — rutch ${cacheA.cache.id} ◆ → ${cacheB.cache.id} ◆ — timing drauf an`;
    return { move, unmove, resumee, shared: "81 ◆ △ = gemeinsamer Cache", trick: "aus dem Nix zum Nix aber real nutzbar" };
  }
};
