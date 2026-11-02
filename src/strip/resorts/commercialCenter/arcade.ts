import type { Kit } from '../../kit';

const STUCCO = '#e8dcc0';
const FASCIA = '#1a6a6a';
const POST = '#f4f0e8';

export interface Row {
  x: number;
  z: number;
  /** Compass bearing the shopfronts face. */
  deg: number;
  len: number;
  depth: number;
  /** Shopfronts on the back too, with a walkway each side. */
  both?: boolean;
  /** Only the canopies, for a block the map already raises. */
  canopyOnly?: boolean;
}

/**
 * A 1963 single-storey shop row: a stucco block, a teal fascia, and a flat
 * walkway canopy on slim posts along the front (and the back when `both`).
 */
export function arcade(k: Kit, r: Row) {
  const fr = k.frame(r.x, r.z, r.deg);
  k.reserve(fr, 0, 0, r.len / 2, r.depth / 2 + 3.5);
  k.box(fr, 0, -0.5, 0, r.len, 5.3, r.depth, STUCCO, { rough: 0.9 });
  for (const s of r.both ? [-1, 1] : [1]) {
    const z = s * (r.depth / 2 + 1.6);
    k.box(fr, 0, 3.4, z, r.len, 0.25, 3.2, '#d8d0c0', { rough: 0.8 });
    k.box(fr, 0, 3.65, s * (r.depth / 2 + 3.15), r.len, 0.9, 0.12, FASCIA, { rough: 0.6 });
    for (let x = -r.len / 2 + 2; x <= r.len / 2 - 2; x += 6) k.box(fr, x, 0, s * (r.depth / 2 + 2.9), 0.18, 3.4, 0.18, POST, { rough: 0.5 });
    k.box(fr, 0, 0.2, s * (r.depth / 2 + 0.02), r.len - 1, 2.6, 0.06, '#5a7a8a', { rough: 0.1, glow: 0.15 });
  }
}
