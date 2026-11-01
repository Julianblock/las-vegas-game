import type { Kit } from '../../kit';

const BOUNDS = { x0: 1200, x1: 1520, z0: 1780, z1: 2010 };
const ROOFS = ['#c8202a', '#1a3a9a', '#e0b030'];

/**
 * Excalibur's storybook roofline: OSM maps each round turret as a small
 * circular part; each gets its conical cap in the castle's red, royal blue
 * or gold, a pennant pole at the tip.
 */
export function buildTurrets(k: Kit) {
  if (!k.osm) return;
  let n = 0;
  for (const m of k.osm.masses) {
    const v = m.pts.length / 2;
    if (v < 12 || m.h < 13) continue;
    let ax = Infinity, bx = -Infinity, az = Infinity, bz = -Infinity;
    for (let i = 0; i < m.pts.length; i += 2) {
      ax = Math.min(ax, m.pts[i]);
      bx = Math.max(bx, m.pts[i]);
      az = Math.min(az, m.pts[i + 1]);
      bz = Math.max(bz, m.pts[i + 1]);
    }
    const x = (ax + bx) / 2;
    const z = (az + bz) / 2;
    const r = Math.max(bx - ax, bz - az) / 2;
    if (x < BOUNDS.x0 || x > BOUNDS.x1 || z < BOUNDS.z0 || z > BOUNDS.z1 || r > 8) continue;
    const fr = k.frame(x, z, 0);
    const base = m.h;
    const color = ROOFS[n++ % ROOFS.length];
    k.cyl(fr, 0, base, 0, r * 1.15, 0.05, r * 2.6, color, { rough: 0.5 }, 12);
    k.cyl(fr, 0, base + r * 2.6, 0, 0.06, 0.06, 2.4, '#d8d8d8', { rough: 0.4 }, 4);
    k.box(fr, 0.6, base + r * 2.6 + 1.6, 0, 1.2, 0.7, 0.04, color, { rough: 0.6 });
  }
}
