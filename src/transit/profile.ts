import type { Heightfield } from '../world/heightfield';
import type { OsmMass } from '../world/meta';
import type { Path } from './path';

function inside(pts: number[], x: number, z: number) {
  let c = false;
  for (let i = 0, j = pts.length - 2; i < pts.length; j = i, i += 2) {
    const xi = pts[i], zi = pts[i + 1], xj = pts[j], zj = pts[j + 1];
    if (zi > z !== zj > z && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) c = !c;
  }
  return c;
}

/**
 * Absolute soffit heights along an elevated line: at least `clear` above the
 * ground, lifted over any low mapped roof (garages, podiums) it crosses, then
 * eased so it climbs before an obstacle and grades gently.
 */
export function elevate(path: Path, masses: OsmMass[], hf: Heightfield, clear: number, maxRoof = 45, reach = 70) {
  const p = path.pts;
  const n = p.length / 2;
  const low = masses.filter((m) => m.h < maxRoof);
  const boxes = low.map((m) => {
    let x0 = Infinity, x1 = -Infinity, z0 = Infinity, z1 = -Infinity;
    for (let i = 0; i < m.pts.length; i += 2) {
      x0 = Math.min(x0, m.pts[i]), x1 = Math.max(x1, m.pts[i]);
      z0 = Math.min(z0, m.pts[i + 1]), z1 = Math.max(z1, m.pts[i + 1]);
    }
    return [x0, z0, x1, z1];
  });
  const raw: number[] = [];
  for (let i = 0; i < n; i++) {
    const x = p[i * 2], z = p[i * 2 + 1];
    let lift = clear;
    for (let k = 0; k < low.length; k++) {
      const b = boxes[k];
      if (x < b[0] || x > b[2] || z < b[1] || z > b[3]) continue;
      if (inside(low[k].pts, x, z)) lift = Math.max(lift, low[k].h + 3);
    }
    raw.push(hf.height(x, z) + lift);
  }
  const c = path.cum;
  const window = (src: number[], r: number, f: (vals: number[]) => number) =>
    src.map((_, i) => {
      const vals: number[] = [];
      for (let j = i; j >= 0 && c[i] - c[j] <= r; j--) vals.push(src[j]);
      for (let j = i + 1; j < n && c[j] - c[i] <= r; j++) vals.push(src[j]);
      return f(vals);
    });
  const held = window(raw, reach, (v) => Math.max(...v));
  return window(held, reach * 0.6, (v) => v.reduce((a, b) => a + b, 0) / v.length);
}
