import { FX } from '../../world/builders';
import type { Kit } from '../../strip/kit';
import type { Path } from '../path';
import { boardName } from './boards';

/** The seven stations, south to north, at their mapped platforms. */
export const STATIONS = [
  { name: 'MGM Grand', x: 2010, z: 1425 },
  { name: 'Horseshoe / Paris', x: 2034, z: 383 },
  { name: 'Flamingo / Caesars Palace', x: 1920, z: -40 },
  { name: 'Harrah\u2019s / The LINQ', x: 1942, z: -348 },
  { name: 'Convention Center', x: 3318, z: -1737 },
  { name: 'Westgate', x: 3322, z: -2383 },
  { name: 'Sahara', x: 3196, z: -2962 },
];

/** Platform length (m): four-car trains with room to spare. */
const LONG = 70;

/**
 * An elevated station on the line: a platform deck spanning both beams, a
 * curved white canopy on slim columns, glass ends and its name board.
 */
export function buildStation(k: Kit, path: Path, st: { name: string; x: number; z: number }) {
  const { s } = path.project(st.x, st.z);
  const at = path.at(s);
  const deg = (Math.atan2(at.dz, at.dx) * 180) / Math.PI + 180;
  const fr = k.frame(at.x, at.z, deg);
  const deck = at.y - fr.o.y;
  k.box(fr, 0, deck - 0.6, 0, LONG, 0.6, 14, '#bdb6aa', { rough: 0.85 });
  k.box(fr, 0, deck + 1.2, 0, LONG, 0.25, 14, '#d8d2c6', { rough: 0.8 });
  for (const x of [-30, -15, 0, 15, 30]) {
    for (const z of [-6.5, 6.5]) k.box(fr, x, -0.5, z, 0.9, deck, 0.9, '#c9c3b8', { rough: 0.85 });
    for (const z of [-6.8, 6.8]) k.box(fr, x, deck + 1.4, z, 0.25, 4.2, 0.25, '#e8e8e8', { rough: 0.4, fx: FX.METAL });
  }
  k.box(fr, 0, deck + 5.6, 0, LONG + 2, 0.5, 16, '#f2f2f0', { rough: 0.5 });
  k.box(fr, 0, deck + 6.1, 0, LONG - 6, 0.6, 9, '#f2f2f0', { rough: 0.5 });
  for (const x of [-LONG / 2, LONG / 2]) k.box(fr, x, deck + 1.4, 0, 0.3, 4.2, 13.6, '#7a9ab0', { rough: 0.15, fx: FX.GLASS });
  k.box(fr, -24, -0.5, 9, 6, deck + 1.8, 5, '#d8d2c6', { rough: 0.8 });
  for (let i = 0; i < 6; i++) k.light(fr.p(-25 + i * 10, deck + 5.2, 0), 1, 0.95, 0.85, 2.5);
  for (const side of [1, -1]) k.sign(fr, boardName(st.name), 0, deck + 5.85, side * 8.05, 0.9, 1.1, FX.NONE, side > 0 ? 0 : Math.PI);
}
