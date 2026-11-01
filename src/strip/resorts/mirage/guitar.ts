import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { towerCrane } from '../../parts/crane';
import { hoarding } from '../../parts/hoarding';

/**
 * Where the volcano erupted nightly from 1989 to 2024: the construction site
 * of Hard Rock's guitar-shaped tower, its concrete core climbing between two
 * tower cranes behind a hoarding along the Strip.
 * Frame at the Strip walk, +x north, +z east.
 */
export function buildGuitarSite(k: Kit) {
  const fr = k.frame(1596, -590, 90);
  k.reserve(fr, 0, -40, 70, 40);
  // Excavated lagoon bed and the rising core: body, waist and neck.
  k.box(fr, 0, -1.5, -42, 110, 1.6, 60, '#8a7a62', { rough: 1 });
  k.box(fr, 0, -0.5, -45, 34, 62, 22, '#a8a49c', { rough: 0.9, fx: FX.BALCONY });
  k.box(fr, 0, 61.5, -45, 22, 18, 16, '#b8b4ac', { rough: 0.9 });
  k.box(fr, 0, 79, -45, 12, 6, 10, '#9a968e', { rough: 0.9 });
  for (const y of [20, 40, 60]) k.box(fr, 0, y, -45, 36, 0.4, 24, '#e8c018', { rough: 0.6 });
  towerCrane(k, fr, -30, -48, 110, 60, 0.4);
  towerCrane(k, fr, 34, -40, 96, 55, 2.8);
  hoarding(k, fr, -68, 68, -4, 'hardRockBanner', 3.2);
  k.walk(fr, [[-70, 2], [0, 2], [70, 2]]);
}
