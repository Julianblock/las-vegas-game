import { CIRCUIT, TRACK_HALF } from './circuit';
import { blank } from './loop';

const CELL = 20;
let grid: Map<number, number[]> | null = null;

function key(cx: number, cz: number) {
  return cx * 100003 + cz;
}

/** Circuit samples every 2 m, bucketed into a coarse grid for quick lookups. */
function build() {
  const g = new Map<number, number[]>();
  const p = blank();
  for (let s = 0; s < CIRCUIT.length; s += 2) {
    CIRCUIT.sample(s, p);
    const k = key(Math.floor(p.x / CELL), Math.floor(p.z / CELL));
    let b = g.get(k);
    if (!b) g.set(k, (b = []));
    b.push(p.x, p.z);
  }
  return g;
}

/** True within the walls of the street circuit (plus a margin), where nothing may park. */
export function onCircuit(x: number, z: number, margin = 2) {
  grid ??= build();
  const r = TRACK_HALF + margin, r2 = r * r;
  const cx = Math.floor(x / CELL), cz = Math.floor(z / CELL);
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      const b = grid.get(key(cx + i, cz + j));
      if (!b) continue;
      for (let k = 0; k < b.length; k += 2) {
        const dx = b[k] - x, dz = b[k + 1] - z;
        if (dx * dx + dz * dz < r2) return true;
      }
    }
  }
  return false;
}
