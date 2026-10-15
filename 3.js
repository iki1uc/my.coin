// in rom.disk.js burn() zusätzlich:
localStorage.setItem(`ROM-${owner}`, JSON.stringify(rom));
// in read() zusätzlich:
const saved = localStorage.getItem(`ROM-${owner}`);
if (saved) return JSON.parse(saved);
