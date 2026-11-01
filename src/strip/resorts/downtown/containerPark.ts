import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';

/** Block centre, and the side on Fremont (local +z faces the street). */
const PARK = { x: 4648, z: -5729, deg: 28, w: 48, d: 84 };
const LONG = 12.2, WIDE = 2.44, HIGH = 2.6;
const COLOURS = ['#2d6fa3', '#c23b22', '#e0a526', '#3d7d4a', '#7d7d78', '#d9d4c7', '#8c3b5e', '#1f3a52'];

/**
 * Downtown Container Park: shops and bars in shipping containers stacked
 * two and three high around a courtyard, with the treehouse playground and
 * the stage in the middle and lit shopfronts facing in.
 */
export function buildContainerPark(k: Kit) {
  const fr = k.frame(PARK.x, PARK.z, PARK.deg, PARK.w / 2, PARK.d / 2);
  let n = 0;
  const box = (x: number, z: number, level: number, along: boolean) => {
    const c = COLOURS[(n++ * 5) % COLOURS.length];
    const y = level * HIGH;
    if (along) k.box(fr, x, y, z, LONG, HIGH - 0.05, WIDE, c, { rough: 0.6 });
    else k.box(fr, x, y, z, WIDE, HIGH - 0.05, LONG, c, { rough: 0.6 });
  };
  const hw = PARK.w / 2, hd = PARK.d / 2;
  for (let x = -hw + LONG / 2; x <= hw - LONG / 2 + 0.01; x += LONG + 0.6) {
    for (let l = 0; l < 2; l++) box(x, hd - 2, l, true);
    for (let l = 0; l < 3; l++) box(x, -hd + 2, l, true);
    k.storefront(fr, x, hd - 3.3, LONG - 2, 2.2);
    k.storefront(fr, x, -hd + 3.3, LONG - 2, 2.2);
  }
  for (let z = -hd + 6 + LONG / 2; z <= hd - 6 - LONG / 2 + 0.01; z += LONG + 0.6) {
    for (const s of [-1, 1]) for (let l = 0; l < 2; l++) box(s * (hw - 2), z, l, false);
  }
  k.box(fr, 0, -0.3, 0, PARK.w - 10, 0.35, PARK.d - 10, '#a89a86', { rough: 0.9 });
  k.cyl(fr, -8, 0, -4, 0.8, 0.8, 9, '#6b4a2e', { rough: 0.9 });
  k.cyl(fr, -8, 6, -4, 5, 2, 6, '#3f6b34', { rough: 0.9 }, 8);
  k.box(fr, -8, 4, -4, 6, 0.4, 6, '#8a5a32', { rough: 0.8 });
  k.box(fr, 10, 0, -14, 12, 1, 7, '#2a2a2a', { rough: 0.7 });
  k.box(fr, 10, 6, -17.3, 12, 0.6, 0.6, '#ffe9b0', { glow: 1.6, fx: FX.NONE });
  k.gather(fr, 2, -4, 12, 30);
}
