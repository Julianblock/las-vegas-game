import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { galleon } from '../../parts/galleon';
import { palm } from '../../parts/palm';

/**
 * Sirens' Cove: the lagoon off the Strip where the pirate battle played four
 * times a night until 2013. The two ships still ride at anchor before the
 * Buccaneer Bay village of rockwork and timbered facades.
 * Frame on the Strip walk at the cove, square to the Strip's bend.
 */
export function buildCove(k: Kit) {
  const fr = k.frame(1772, -950, 117);
  k.reserve(fr, 0, -42, 62, 42);
  const wl = -0.6;
  galleon(k, fr, 10, -24, wl, { length: 34, hull: '#3a2416', trim: '#c8a040', sail: '#e8dcc0' });
  galleon(k, fr, -18, -48, wl, { length: 30, hull: '#2a2a30', trim: '#9a9aa0', sail: '#d8d0c0' });
  // Rock headland and the village frontage at the back of the lagoon.
  for (const [x, z, r, h] of [[-36, -62, 9, 14], [-26, -70, 7, 20], [30, -64, 10, 12], [40, -54, 6, 9]] as const) {
    k.cyl(fr, x, -1, z, r, r * 0.55, h, '#9a6a44', { rough: 1 }, 7);
  }
  for (let i = 0; i < 6; i++) {
    const x = -30 + i * 11;
    const h = 8 + ((i * 7) % 5);
    k.box(fr, x, -0.5, -70, 10, h, 6, ['#c8a070', '#a87850', '#d8b888'][i % 3], { rough: 0.9 });
    k.box(fr, x, h - 0.5, -70, 10.6, 1.4, 6.6, '#5a3a22', { rough: 0.9 });
    k.box(fr, x, 1, -66.9, 3, 2.4, 0.2, '#ffd890', { glow: 0.9 });
  }
  k.sign(fr, 'tiLED', 0, 3, 4, 5, 1.2, FX.NEON, Math.PI / 2, true);
  for (const x of [-46, 46]) palm(k, fr, x, 2, 11);
  k.gather(fr, 0, 3, 14, 30);
  k.walk(fr, [[-60, 4], [0, 3], [60, 4]]);
  k.light(fr.p(10, 9, -24), 1, 0.7, 0.35, 5);
}
