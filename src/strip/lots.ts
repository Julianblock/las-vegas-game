import type { Lot } from '../world/props';

/**
 * Surface lots from OSM outlines: each ring becomes the rectangle aligned with
 * its longest edge, stall rows running along it. Tiny lots and sprawling
 * irregular ones (mostly fenced yards) are dropped.
 */
export function lotsFromOsm(rings: { pts: number[] }[], skip: (x: number, z: number) => boolean): Lot[] {
  const out: Lot[] = [];
  for (const { pts } of rings) {
    const n = pts.length / 2;
    if (n < 3) continue;
    let best = 0;
    let ang = 0;
    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n;
      const dx = pts[j * 2] - pts[i * 2];
      const dz = pts[j * 2 + 1] - pts[i * 2 + 1];
      const l = dx * dx + dz * dz;
      if (l > best) {
        best = l;
        ang = Math.atan2(dz, dx);
      }
    }
    const c = Math.cos(ang);
    const s = Math.sin(ang);
    let u0 = Infinity, u1 = -Infinity, v0 = Infinity, v1 = -Infinity;
    for (let i = 0; i < n; i++) {
      const x = pts[i * 2], z = pts[i * 2 + 1];
      const u = x * c + z * s;
      const v = -x * s + z * c;
      u0 = Math.min(u0, u);
      u1 = Math.max(u1, u);
      v0 = Math.min(v0, v);
      v1 = Math.max(v1, v);
    }
    const w = u1 - u0;
    const d = v1 - v0;
    if (w < 20 || d < 14 || w * d > 120000) continue;
    const um = (u0 + u1) / 2;
    const vm = (v0 + v1) / 2;
    const x = um * c - vm * s;
    const z = um * s + vm * c;
    if (skip(x, z)) continue;
    out.push({ x, z, ang, w: w - 4, d: d - 4, fill: 0.7 + ((Math.abs(x * 7 + z * 13) % 100) / 100) * 0.25 });
  }
  return out;
}
