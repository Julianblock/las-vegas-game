import type { Resort } from '../resort';
import { deckRun } from './deck';
import { landing } from './towers';

/** Ends closer than this (m) are joined; anything else is an open end that needs a way down. */
const JOIN = 4;

/**
 * The pedestrian bridges as mapped: over the Strip at Flamingo, Tropicana,
 * Harmon and Spring Mountain, and the skywalks between resorts. Every run is
 * a deck; every open end gets an escalator and lift tower.
 */
export const skywalks: Resort = {
  id: 'skywalks',
  name: 'Pedestrian bridges',
  build(k) {
    const ways = k.osm?.bridges ?? [];
    const verts: [number, number][] = [];
    for (const w of ways) for (let i = 0; i < w.pts.length; i += 2) verts.push([w.pts[i], w.pts[i + 1]]);
    const landed: [number, number][] = [];
    for (const w of ways) {
      const p = w.pts;
      for (let i = 2; i < p.length; i += 2) deckRun(k, p[i - 2], p[i - 1], p[i], p[i + 1]);
      if (p.length < 4) continue;
      for (const end of [0, p.length - 2]) {
        const x = p[end], z = p[end + 1];
        const joined = verts.filter(([vx, vz]) => Math.hypot(vx - x, vz - z) < JOIN).length > 1;
        if (joined || landed.some(([lx, lz]) => Math.hypot(lx - x, lz - z) < 25)) continue;
        const inner = end === 0 ? 2 : p.length - 4;
        const dx = x - p[inner], dz = z - p[inner + 1];
        const d = Math.hypot(dx, dz);
        if (d < 0.5) continue;
        landed.push([x, z]);
        landing(k, x, z, dx / d, dz / d);
      }
    }
  },
};
